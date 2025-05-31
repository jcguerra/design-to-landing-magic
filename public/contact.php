
<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

// Validate required fields
$required_fields = ['name', 'email'];
foreach ($required_fields as $field) {
    if (empty($input[$field])) {
        http_response_code(400);
        echo json_encode(['error' => "Field '$field' is required"]);
        exit;
    }
}

// Sanitize input
$name = filter_var(trim($input['name']), FILTER_SANITIZE_STRING);
$email = filter_var(trim($input['email']), FILTER_SANITIZE_EMAIL);
$message = isset($input['message']) ? filter_var(trim($input['message']), FILTER_SANITIZE_STRING) : '';

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email format']);
    exit;
}

// Email configuration
$to = 'contacto@connectbuy.com'; // Change this to your email
$subject = 'Nuevo contacto desde ConnectBuy - ' . $name;
$headers = [
    'From: noreply@connectbuy.com',
    'Reply-To: ' . $email,
    'Content-Type: text/html; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion()
];

// Email body
$email_body = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <title>Nuevo contacto - ConnectBuy</title>
</head>
<body style='font-family: Arial, sans-serif; line-height: 1.6; color: #333;'>
    <div style='max-width: 600px; margin: 0 auto; padding: 20px;'>
        <div style='background: linear-gradient(135deg, #ec4899, #8b5cf6); padding: 20px; border-radius: 10px; margin-bottom: 20px;'>
            <h1 style='color: white; margin: 0; text-align: center;'>ConnectBuy</h1>
            <p style='color: white; margin: 10px 0 0 0; text-align: center;'>Nuevo mensaje de contacto</p>
        </div>
        
        <div style='background: #f8f9fa; padding: 20px; border-radius: 10px; margin-bottom: 20px;'>
            <h2 style='color: #ec4899; margin-top: 0;'>Información del contacto</h2>
            <p><strong>Nombre:</strong> {$name}</p>
            <p><strong>Email:</strong> {$email}</p>
            <p><strong>Fecha:</strong> " . date('d/m/Y H:i:s') . "</p>
        </div>
        
        " . (!empty($message) ? "
        <div style='background: white; padding: 20px; border-radius: 10px; border-left: 4px solid #ec4899;'>
            <h3 style='color: #333; margin-top: 0;'>Mensaje:</h3>
            <p style='white-space: pre-wrap;'>{$message}</p>
        </div>
        " : "") . "
        
        <div style='text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6;'>
            <p style='color: #6c757d; font-size: 14px;'>
                Este mensaje fue enviado desde el formulario de contacto de ConnectBuy
            </p>
        </div>
    </div>
</body>
</html>
";

// Send email
$mail_sent = mail($to, $subject, $email_body, implode("\r\n", $headers));

if ($mail_sent) {
    // Log the contact (optional)
    $log_entry = date('Y-m-d H:i:s') . " - Contact from: $name ($email)\n";
    file_put_contents('contacts.log', $log_entry, FILE_APPEND | LOCK_EX);
    
    echo json_encode([
        'success' => true,
        'message' => 'Message sent successfully'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'error' => 'Failed to send message'
    ]);
}
?>
