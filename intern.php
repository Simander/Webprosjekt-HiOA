<meta charset="utf-8">

<?php
error_reporting(E_ALL);


session_start();
//@session_start(); //@ gjør at feilmelding ikke vises
if (isset($_SESSION['innlogget'])) {


	echo "<p>DU KLARTE Å LOGGE DEG INN!! WHOPPPPP" . $_SESSION['navn'] . "</p>"; 

}

	else {

		include "login.php"; //skjema for innlogging
	}

?>

