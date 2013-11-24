<?php
if(!empty($_GET)){
	$page = $_GET['page'];
} else {
	$page = "";
}
?>
<!DOCTYPE HTML>
<html>
	<head>
		<link rel="stylesheet" title="layout1" href="adminstil.css">
		<meta charset="UTF-8">
		<title>Admin</title>
	</head>
	<body>
		<div id="adminframe"> <!-- Hovedvindu-->
			<nav id="navigasjon"> <!-- Navigasjonsbar-->
			<!-- Epost knapp, access login gmail-->
					<a class="button" id="mail" href="2E4A967CF0.php?page=1">
						E-post
					</a>
	
					<a class="button" id="soundcloud" href="2E4A967CF0.php?page=2"> <!-- Soundcloud admin knapp, access login soundcloud-->
						Soundcloud Admin
					</a>
			
					<a class="button" id="kalender" href="2E4A967CF0.php?page=3"> <!-- trykkbar versjon av kalender html, endringer skjer her-->
						Kalender Admin
					</a>
			</nav>
			<section id="include"> <!-- vindu hvor sidene blir inkludert-->
				<?php
					switch($page)
					{
					 case 1:
						include('epost.html');
					break;
							
					case 2:
						include('soundcloud.html');
					break;
				
					case 3: 
						include('kalenderinfo.html');
						
					break;
				
					default:
						include('nothing.html');
					}
				?>			
		</section>
	</div>
	</body>
</html>
