<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require("formulaire2.php");

function mailer($to, $subject, $body)
{
    $mail = new PHPMailer();

    try {
        $mail->IsSMTP();
        $mail->SMTPDebug = 0;
        $mail->SMTPAuth = true;
        $mail->SMTPSecure = "tls";
        $mail->Host = "smtp-mail.outlook.com";
        $mail->Port = 587;
        $mail->Username = "yassine.aitalla@imie-paris.fr";
        $mail->Password = "Aitalla@2023";
        $mail->SetFrom('yassine.aitalla@imie-paris.fr', 'yassine aitalla');
        $mail->Subject = $subject;
        $mail->Body = $body;
        $mail->AddAddress($to);

        $mail->send();
        echo "Mail envoyé";
    } catch (Exception $e) {
        echo "erro: $e";
    }
}

