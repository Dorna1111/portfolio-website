<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $to = "jaisidorna4@gmail.com"; // Replace with your email address
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(array("status" => "success", "message" => "Your message has been sent."));
    } else {
        echo json_encode(array("status" => "error", "message" => "Failed to send message. Please try again later."));
    }
}
?>
