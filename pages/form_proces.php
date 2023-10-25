<?php

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $name = $_POST["name"];
    $tel = $_POST["tel"]
    $email = $_POST["email"];
    $bericht = $_POST["bericht"];


    $to = "diegoblom01@gmail.com";
    $subject = "contact form website van $name";
    $messagebody = "Naam: $name\nTel: $tel\nE-mail: $email\nBericht: $bericht";
    $headers = "Van $name";

    if(mail($to, $subject, $messagebody, $headers)){
        echo "uw bericht is verzonden!"
    }else{
        echo "There went something wrong."
    }
}



?>

