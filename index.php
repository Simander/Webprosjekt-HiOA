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
                <link rel="stylesheet" title="layout1" href="layout1.css">
                <link href='http://fonts.googleapis.com/css?family=Open+Sans:600|Stoke' rel='stylesheet' type='text/css'>
                <meta charset="UTF-8">
                <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
				<script src="admin.js"></script>
                <title>Studio Flagolett</title>
        </head>
        <body>
			<div id="fb-root"></div>
			<script>(function(d, s, id) {
  				var js, fjs = d.getElementsByTagName(s)[0];
				  if (d.getElementById(id)) return;
				  js = d.createElement(s); js.id = id;
				  js.src = "//connect.facebook.net/nn_NO/all.js#xfbml=1";
  					fjs.parentNode.insertBefore(js, fjs);
					}(document, 'script', 'facebook-jssdk'));</script>
                <div id="centre">
                        <section id="top_bar">
                                <header>
                                        <!-- Vi kan eventuelt gjøre så overskiften endres etter ?page -->
                                        <!--  med php if/elseif statements og php include -->
                                        <img id="logostor" src="Logo3.png" alt="Bedrift logo">
                                </header>
                        <br>
                                <div id="nav_menu">
                                        <nav>
                                                <a class="menu_button" id="button_1" href="index.php?page=default">Forside</a>
                                                <a class="menu_button" id="button_2" href="index.php?page=1">Book Studioet</a>
                                                <a class="menu_button" id="button_3" href="index.php?page=2">Book Musikere</a>
                                                <a class="menu_button" id="button_4" href="index.php?page=3">Om Oss</a>
                                                <a class="menu_button" id="button_5" href="index.php?page=4">Kontakt Oss</a>
                                        </nav>
                                </div>
                              
                                <div id="Content">
                               
                        </div>
                                
                        </section>
                        <br>
                        <section id="content">
                                 <!-- innhold legges til her med if og elseif statements og php include relativ til ?page -->
								  <?php
                                switch($page)
								{
                                 case 1:
									include('bookstudio.php');
                                break;
                                        
                                case 2:
									include('bookmusiker.php');
                                break;
                                
                                case 3: 
									include('webteam.html');
                                        
                                break;
                                
                                case 4:
									include('kontakt.php');
                                        
                                break;
                                
                                case 'hidden':
                                					include('piano.html');
                                break;
                                
                                default:
									include('home.html');
									include('bilde_galleri.php');
								}
								?>       
                                         
                                        
                                        
                               
                                
                        </section>
                        <br>
                        <section id="bottom_bar">
                                <footer>
                                        <p class="footy"><strong>	
						Copyright: Studio Flagolett
						<br>kontakt.flagolett@gmail.com</strong></p>
					<div class="fb-like" data-href="https://www.facebook.com/flagoletten" data-layout="button_count" data-action="like" data-show-faces="true" data-share="true"></div>
                                </footer>
                        </section>
                </div>
        </body>
</html>
