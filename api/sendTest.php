<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require "Exception.php";
require "PHPMailer.php";
require "SMTP.php";

// RECIVING DATA FROM REACT FORM (AXIOS(URL))
$request_data = file_get_contents('php://input');
// DECODING JSON DATA RECIVED
$data_decode = json_decode($request_data, true);

$name = $data_decode["name"];
$surname = $data_decode["surname"];
$age = $data_decode["age"];
$email = $data_decode["email"];
$subject = $data_decode["subject"];

$host = "smtp.gmail.com";
$user = "testMailerHostPropio@gmail.com";
$pass = "briujltpxjlrstoo";

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->CharSet = "utf-8";

    //Servicio de correo utilizado (ej: gmail, hostinger...)
    $mail->Host       = $host;                      //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication

    //----- DESDE DONDE SE ENVIA -----
    // php va a acceder a esta cuenta y enviar el mail desde ahí
    $mail->Username   = $user;                     //SMTP username
    $mail->Password   = $pass;                      //SMTP password

    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
    $mail->Port       = 587;                                    
    $mail->SMTPSecure = "tls";            //Enable implicit TLS encryption

    //Recipients
    $mail->setFrom($user); //Se envia DESDE... (segundo parametro opcional)

    //----- A QUE CORREO VA A LLEGAR -----
    $mail->addAddress("testMailerHostPropio@gmail.com");  //Va a LLEGAR A... (segundo parametro opcional)

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = "Pruebas con react y php";
    $mail->Body    = "
        <h1>Body PHP sendTest</h1>
        <h3>Name: {$name}</h3>
        <h3>Surname: {$surname}</h3>
        <h3>Age: {$age}</h3>
        <h3>Mail: {$email}</h3>
        <h3>Subject: {$subject}</h3>
    ";
    $mail->AltBody = "This is the body in plain text for non-HTML mail clients";

    $mail->send();
        echo "Message has been sent";
    } catch (Exception $e) {
        echo "{$mail->ErrorInfo}";
}

?>