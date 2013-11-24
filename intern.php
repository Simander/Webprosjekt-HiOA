
<?php



session_start();

if (isset($_SESSION['innlogget'])) {

	
	echo "<p> Da har du logget inn på vår hemmelige side" . $_SESSION['navn'] . "</p>";


}


	else {


		include "login.php"; //skjema for innlogging
	}

?>
