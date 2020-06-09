<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';
// Переменные, которые отправляет пользователь

$name = $_POST['text'];
$email = $_POST['email'];

$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $msg = "ok";
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";                                          
    $mail->SMTPAuth   = true;
    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера GMAIL
    $mail->Username   = 'automessageb0tr2d2'; // Логин на почте
    $mail->Password   = 'automessageforsite123)'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('automessageb0tr2d2@gmail.com', 'Auto Bot'); // Адрес самой почты и имя отправителя
    // Получатель письма
    $mail->addAddress('jeffersoncaptain@gmail.com'); // Ещё один, если нужен
        // -----------------------
        // Само письмо
        // -----------------------
        $mail->isHTML(true);
        $mail->Subject = 'Сообщение с сайта!';
        $mail->Body    = "<br><b>Почта:</b> $email<br><br><b>Сообщение:</b> $name <br>";
// Проверяем отравленность сообщения
if ($mail->send()) {
    echo "$msg";
} else {
echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
}
} catch (Exception $e) {
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}