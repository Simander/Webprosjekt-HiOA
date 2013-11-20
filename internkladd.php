<?php
if(!empty($_GET)){
	$page = $_GET['page'];
} else {
	$page = "";
}
?>

<head>
	<link rel="stylesheet" title="layout1" href="adminstil.css">
</head>
<body>
	<div id="adminframe"> <!-- Hovedvindu-->
		<section id="navigasjon"> <!-- Navigasjonsbar-->
			<button id="mail"> <!-- Epost knapp, access login gmail-->
				<a href="internkladd.php?page=1">
					E-post
				</a>
			</button>
			<button id="soundcloud">
				<a href="internkladd.php?page=2"> <!-- Soundcloud admin knapp, access login soundcloud-->
					Soundcloud Admin
				</a>
			</button>
			<button id="kalender"> 
				<a href="internkladd.php?page=3"> <!-- trykkbar versjon av kalender html, endringer skjer her-->
					Kalender Admin
				</a>
			</button>
		</section>
		<div id="include"> <!-- vindu hvor sidene blir inkludert-->
			<?php
				switch($page)
				{
				 case 1:
					include('http://mail.google.com');
				break;
						
				case 2:
					include('http://soundcloud.com/');
				break;
				
				case 3: 
					include('kalender.html');
						
				break;
				
				default:
					include('nothing.html');
				}
			?>			
		</div>
	</div>
</body>