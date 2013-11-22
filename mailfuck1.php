<?php error_reporting(E_ALL)?>

 
<?php

if (isset($_POST))
{
	if (!isset($_POST['navn']) OR !isset($_POST['epost']))
	{
		echo ("Du må fylle ut alle feltene!");
	}
	else
	{
		$sendto = "kontakt.flagolett@gmail.com"; // Skriv inn din e-mail.
		$subject = "Kontaktskjema ".$_POST['navn']; // Her velger du tittel.
	
		$ip = ( $_SERVER["REMOTE_ADDR"] );
		$message = "
			Navn: ".$_POST['navn']."
		
			E-post: ".$_POST['epost']."
			Tekst: ".$_POST['tekst']."
			IP-adresse :".$ip."";
		
		
		$headers = "Fra: ".$_POST['navn']."";
		mail($sendto, $subject, $message, $headers);
		echo ("<p style=\"font-weight : bold;\">Din henvendelse er sendt!</p>");
 
	}
}
else{
echo "Gå tilbake";
}
