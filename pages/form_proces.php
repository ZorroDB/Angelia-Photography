<?php

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $name = $_POST["name"];
    $tel = $_POST["tel"];
    $email = $_POST["email"];
    $bericht = $_POST["bericht"];


    $to = "diegoblom01@gmail.com";
    $subject = "contact form website van $name";
    $messagebody = "Naam: $name\nTel: $tel\nE-mail: $email\nBericht: $bericht";
    $headers = "Van $name";

    if (mail($to, $subject, $messagebody, $headers)) {
        $response = "The message has been deliverd!";
    } else {
        $response = "Oops! Something went wrong.";
    }

    header("Location: contact.php?message=" . urlencode($response));
    exit;

}



?>

