<?php
if(!empty($_GET)){
	$page = $_GET['page'];
} else {
	$page = "";
}
?>
	<style>#sound, #skjul{padding: 1em; width: 16em; height: 1em; color: white;
				text-shadow: 2px 1px #5B6262;				
				border-radius: 10px; 
				-webkit-touch-callout: none;
                                -webkit-user-select: none;
                                -khtml-user-select: none;
                                -moz-user-select: none;
                                -ms-user-select: none;
                                user-select: none;
                                cursor: pointer;}
  			#skjul{ margin-left: 400px;   }                     
                       </style>
		<script src="audio_gallery.js"></script>
		<div id="sound" class="menu_button"><strong>Lytt til eksempler på lyd fra studioet.</strong></div>
		<div id="skjul" class="menu_button"><strong>Skjul Lydavspilleren.</strong></div>
		<div id="audio_samples">
			<h1>Lydgalleri fra SoundCloud</h1>
			<!-- Legger til soundcloud playlist -->
			<iframe width="700" height="600" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/15090033"></iframe>
		</div>

	<h2>
		<b>Book Studio</b>
	</h2>
	
	<div class="innhold">
		<div class="calendar>
			  <?php
                                switch($page)
								{                                
                                default:
									include('kalender.html');
								}
								?>
			
			<!--Boks for kalender data
				->Kalender data settes her.
			-->
		</div>
		<article class="om">
			<p>
				Studio flagolett har vært i drift siden 20.10.2013 og inneholder det som trengs for å
				gjøre en god musikk produksjon.
			</p>			
			<h2> Utstyr </h2>
			<!-- Les mer -->
			<figure>
				<!-- sett inn bilde/galleri til utstyret-->
			</figure>			
			<ul>
				<li>
					Et stort utvalg av Sennheiser mikrofoner
				</li>
				<li>
					Cubase 7, Logic og Protools programvare
				</li>
				<li>
					Alesis controllere
				</li>
				<li>
					KRK lyd
				</li>
			</ul>
			<h2> Teknikkere </h2>
			<!-- Les mer -->
			<p> Se om oss for mer informasjon</p>
			<ul>
				<li>
					Anders Simonsen
				</li>
				<li>
					Joakim Tømmer
				</li>
			</ul>
			<h2> Priser </h2>
			<ul>
				<li>
					500,- Per time på ukedager mellom 10:00 og 18:00
				</li>
				<li>
					800,- Per time på ukedager mellom 18:00 og 22:00 og i helger.
				</li>
				<li>
					8000,- for en hel helg, 8-10 timer dagen.
				</li>
				<li>
					15000,- for en hel uke, 8-10 timer dagen.
				</li>
			<ul>
		</article>
	</div>
