<meta charset="utf-8">


<?php


session_start();
if (isset ($_POST ['knapp'])) {

//sjekk om brukernavn og passord er riktig

	if ($_POST['bruker'] == "flagolett" && $_POST ['passord'] == "12345") 
	{

		$_SESSION ['navn'] = ucfirst ($_POST['bruker']);
		$_SESSION ['innlogget'] = true;
		include "intern.php";
	}

	else {

			//kaller opp siden på nytt igjen, tvinger ny innlogging
		header("Location: {$_SERVER['PHP_SELF']}");
		exit; //hindrer at koden under utføres til tross av redirect
	}
} // slutt på if, knapp trykket
	else {

		//skal vise skjemaet

		?>
	<h3>Husk å logge inn da kjære deg!</h3>
	<form action="<?= $_SERVER ['PHP_SELF'] ?>" method="post">
	     <table>
	     	<tr><td>Brukernavn: </td>
	     		<td><input type="text" name="bruker" /></td></tr>
	     		<tr><td>Passord :</td>
	     			<td><input type="passord" name="passord" size="5" />
	     			</td></tr>

	     		<tr><td colspan="2"><input type="submit" name="knapp" />
	     		</td></tr></table></form>

	 <?php

} //slutt else




?>
