<h1>Din henvendelse er sendt!</h1>
 
<?php
if ($submit)
{
if ($navn)
{
echo ("Du må fylle ut alle feltene!");
}
else
{
$sendto = "joakimtommer@gmail.com"; // Skriv inn din e-mail.
$subject = "Her kan du skrive en tittel"; // Her velger du tittel.
$ip = ( $_SERVER["REMOTE_ADDR"] );
$message = "
Navn: $navn
 
E-post: $epost
 
Tekst: $tekst
 
IP-adresse : $ip
 
Referer: $HTTP_REFERER
 
";
$headers = "Fra: $navn\r\n";
mail($sendto, $subject, $message, $headers);
echo ("<p style=\"font-weight : bold;\">Din henvendelse er sendt!</p>");
 
}
}
?>
