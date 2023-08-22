<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = '16774996@qq.com';
$subject = 'New message from contact form';
$body = "Name: $name\n\nEmail: $email\n\nMessage: $message";

$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";

mail($to, $subject, $body, $headers);

header('Location: thank_you.html');
exit();
?>