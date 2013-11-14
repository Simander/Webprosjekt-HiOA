/* author: Anders Simonsen
	Dette er en alternativ løsning på bildegalleri problemet.
	Jeg tenkte det kanskje ville være ryddigere og enklere å forstå koden om
	bildene ble lagret i et array. Da trengs bare en <img> tag i html koden slik at
	bildet er konstant og det eneste som byttes ut er bildets kilde!
*/


//sier fra at scriptet ikke skal kjøres før dokumentet er lastet inn!
$(document).ready(function(){
	//Oppretter et array for å lage bilder som skal brukes i galleriet!	
	var bilde_galleri = new Array();
		//oppretter et nytt bildeobjekt i bilde_galleri arrayets indeks 0:
		bilde_galleri[0] = new Image();
		//setter bildet i bilde_galleri[0]'s kilde:
		bilde_galleri[0].src="http://images.fanpop.com/images/image_uploads/spongerocker-spongebob-squarepants-723640_800_601.jpg";
		//oppretter et nytt bildeobjekt i bilde_galleri arrayets indeks 1:					
		bilde_galleri[1]=new Image();
		//setter bildet i bilde_galleri[1]'s kilde:
		bilde_galleri[1].src="http://ksj.mit.edu/sites/default/files/images/tracker/2011/SpongeBob-Squarepants.png";
		//oppretter et nytt bildeobjekt i bilde_galleri arrayets indeks 2:					
		bilde_galleri[2]=new Image();
		//setter bildet i bilde_galleri[2]'s kilde:
		bilde_galleri[2].src="http://images4.wikia.nocookie.net/__cb20120807051902/poohadventures/images/a/a7/Spongebob009.gif";
		//oppretter et nytt bildeobjekt i bilde_galleri arrayets indeks 3:					
		bilde_galleri[3]=new Image();		
		//setter bildet i bilde_galleri[3]'s kilde:		
		bilde_galleri[3].src="http://images6.fanpop.com/image/photos/33200000/Spongebob-Patrick-spongebob-squarepants-33210739-1731-1068.jpg";			
		/* nye bilder legges til på samme måte:
			bilde_galleri[i] = new Image();
			bilde_galleri[i].src="bilde.jpg";
		*/
			
		//initialiserer variabelen i som brukes for indeks til arrayet.  
		$i = 0;
		$siste_bilde = bilde_galleri.length -1;		
		//Bestemmer hva som skjer om knapp #left klikkes. ingen linjer kan fjernes!!
		$("#left").click(function(){
				if($i > 0)
					$i-=1;
				else if($i == 0)
					$i = $siste_bilde;
		 		document.getElementById("mittBilde").src = bilde_galleri[$i].src;	    
		});
				
		//Bestemmer hva som skjer om knapp #right klikkes. ingen linjer kan fjernes!!
		$("#right").click(function(){
				if($i < $siste_bilde)
			    		$i+=1;
				else if($i == $siste_bilde)
					$i = 0;
				document.getElementById("mittBilde").src = bilde_galleri[$i].src;	    
		});
});
