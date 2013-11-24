var kkeys = [], admin = "65,68,77,73,78";
	$(document).keydown(function(e) {
	kkeys.push( e.keyCode );
	if ( kkeys.toString().indexOf( admin ) >=0 ){
		window.location.href= "intern.php";
		};
	});