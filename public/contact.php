<?php
/**
 * Contact Form Email Handler
 * Uses SMTP2GO to send emails from contact form submissions
 * Supports: SSL (port 465), TLS (port 587), Plain (port 2525)
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!$data) $data = $_POST;

$required = ['name', 'email', 'message'];
$errors = [];
foreach ($required as $field) {
    if (empty($data[$field])) $errors[] = "Field '$field' is required";
}
if (!empty($data['email']) && !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Invalid email address';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => implode(', ', $errors)]);
    exit;
}

$name     = htmlspecialchars(strip_tags(trim($data['name'] ?? '')), ENT_QUOTES, 'UTF-8');
$company  = htmlspecialchars(strip_tags(trim($data['company'] ?? '')), ENT_QUOTES, 'UTF-8');
$email    = filter_var(trim($data['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$interest = htmlspecialchars(strip_tags(trim($data['interest'] ?? '')), ENT_QUOTES, 'UTF-8');
$message  = htmlspecialchars(strip_tags(trim($data['message'] ?? '')), ENT_QUOTES, 'UTF-8');

// SMTP2GO settings
$smtp_user = 'ahsolution';
$smtp_pass = 'c1LyGp2ED8Ohrv3Z';
$from      = 'noreply@ahimhk.com';
$to        = 'info@ahimhk.com.hk';
$subject   = "AH Solutions Website Enquiry from {$name}";

$html_body = "
<!DOCTYPE html>
<html>
<head><meta charset='UTF-8'></head>
<body style='font-family: Arial, sans-serif; font-size: 14px; color: #333;'>
  <h2 style='color: #2563eb;'>New Enquiry from AH Solutions Website</h2>
  <table style='border-collapse: collapse; width: 100%; max-width: 600px;'>
    <tr><td style='padding: 8px 0; font-weight: bold; width: 120px;'>Name:</td><td style='padding: 8px 0;'>{$name}</td></tr>
    " . ($company ? "<tr><td style='padding: 8px 0; font-weight: bold;'>Company:</td><td style='padding: 8px 0;'>{$company}</td></tr>" : "") . "
    <tr><td style='padding: 8px 0; font-weight: bold;'>Email:</td><td style='padding: 8px 0;'><a href='mailto:{$email}'>{$email}</a></td></tr>
    " . ($interest ? "<tr><td style='padding: 8px 0; font-weight: bold;'>Interested In:</td><td style='padding: 8px 0;'>{$interest}</td></tr>" : "") . "
  </table>
  <hr style='border: none; border-top: 1px solid #eee; margin: 16px 0;'>
  <h4 style='margin-bottom: 8px;'>Message:</h4>
  <p style='white-space: pre-wrap; line-height: 1.6;'>{$message}</p>
  <hr style='border: none; border-top: 1px solid #eee; margin: 16px 0;'>
  <p style='color: #888; font-size: 12px;'>Submitted via ahimhk.com contact form</p>
</body>
</html>";

$plain_body = "Name: {$name}\n" . ($company ? "Company: {$company}\n" : "") . "Email: {$email}\n" . ($interest ? "Interested In: {$interest}\n" : "") . "\nMessage:\n{$message}\n\n---\nSubmitted via ahimhk.com contact form";

/**
 * Try sending via SMTP2GO using stream_socket_client
 * Tries ports in order: 465 (SSL), 587 (TLS), 2525 (plain)
 */
function try_smtp2go($host, $ports, $user, $pass, $from, $to, $subject, $html_body, $plain_body, $reply_to) {
    $crlf = "\r\n";

    foreach ($ports as $info) {
        $port = $info['port'];
        $type = $info['type']; // 'ssl', 'tls', 'plain'

        $context = null;
        $sock_type = STREAM_CLIENT_CONNECT;

        if ($type === 'ssl' || $type === 'tls') {
            $context = stream_context_create([
                'ssl' => [
                    'verify_peer'      => false,
                    'verify_peer_name' => false,
                    'allow_self_signed' => true,
                ]
            ]);
        }

        $address = ($type === 'ssl' ? 'ssl://' : 'tcp://') . $host . ':' . $port;

        $socket = @stream_socket_client($address, $errno, $errstr, 15, $sock_type, $context);

        if (!$socket) {
            continue; // try next port
        }

        stream_set_timeout($socket, 15);

        // Read greeting
        $r = fgets($socket, 512);
        if (substr($r, 0, 3) !== '220') { fclose($socket); continue; }

        // EHLO
        fputs($socket, "EHLO localhost{$crlf}");
        fgets($socket, 512); fgets($socket, 512);

        // AUTH
        fputs($socket, "AUTH LOGIN{$crlf}");
        fgets($socket, 512);
        fputs($socket, base64_encode($user) . $crlf);
        fgets($socket, 512);
        fputs($socket, base64_encode($pass) . $crlf);
        $r = fgets($socket, 512);
        if (substr($r, 0, 3) !== '235') { fclose($socket); continue; }

        // MAIL FROM
        fputs($socket, "MAIL FROM: <{$from}>{$crlf}");
        fgets($socket, 512);

        // RCPT TO
        fputs($socket, "RCPT TO: <{$to}>{$crlf}");
        fgets($socket, 512);

        // DATA
        fputs($socket, "DATA{$crlf}");
        $r = fgets($socket, 512);

        // Build headers
        $uid = md5(uniqid(time()));
        $headers = [
            "From: AH Solutions <{$from}>",
            "Reply-To: {$reply_to}",
            "To: {$to}",
            "Subject: =?UTF-8?B?" . base64_encode($subject) . "?=",
            "MIME-Version: 1.0",
            "Content-Type: multipart/alternative; boundary=\"----={$uid}=\"",
            "X-Mailer: AH-Solutions-PHP/1.0",
        ];

        $msg = "";
        foreach ($headers as $h) {
            $msg .= $h . $crlf;
        }
        $msg .= $crlf;
        $msg .= "------={$uid}={$crlf}";
        $msg .= "Content-Type: text/plain; charset=UTF-8; format=flowed{$crlf}";
        $msg .= "Content-Transfer-Encoding: 7bit{$crlf}";
        $msg .= $crlf;
        $msg .= $plain_body . $crlf;
        $msg .= $crlf;
        $msg .= "------={$uid}={$crlf}";
        $msg .= "Content-Type: text/html; charset=UTF-8{$crlf}";
        $msg .= "Content-Transfer-Encoding: base64{$crlf}";
        $msg .= $crlf;
        $msg .= chunk_split(base64_encode($html_body)) . $crlf;
        $msg .= $crlf;
        $msg .= "------={$uid}=--{$crlf}";
        $msg .= ".{$crlf}";

        fputs($socket, $msg);
        $r = fgets($socket, 512);
        fputs($socket, "QUIT{$crlf}");
        fclose($socket);

        if (substr($r, 0, 3) === '250') {
            return ['success' => true, 'port_used' => "{$type}:{$port}"];
        }
    }

    return ['success' => false, 'error' => "Could not connect to SMTP2GO on any port"];
}

$result = try_smtp2go(
    'mail.smtp2go.com',
    [
        ['port' => 465, 'type' => 'ssl'],
        ['port' => 587, 'type' => 'tls'],
        ['port' => 2525, 'type' => 'plain'],
    ],
    $smtp_user,
    $smtp_pass,
    $from,
    $to,
    $subject,
    $html_body,
    $plain_body,
    "{$name} <{$email}>"
);

if ($result['success']) {
    echo json_encode([
        'success' => true,
        'message' => 'Your message has been sent successfully! We will reply within 1 business day.',
        'debug' => $result
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to send email. Please try again or contact us directly at info@ahimhk.com.hk',
        'debug' => $result
    ]);
}
