
<?php
error_reporting(E_ALL);


session_start();
//@session_start(); //@ gjør at feilmelding ikke vises
if (isset($_SESSION['innlogget'])) {

	
	echo "<p> Da har du logget inn på vår hemmelige side" . $_SESSION['navn'] . "</p>";
}
	
	 include "internkladd.php"; 

}

	else {

		include "login.php"; //skjema for innlogging
	}

?>

