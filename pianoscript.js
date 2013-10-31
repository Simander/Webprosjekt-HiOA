$(document).ready(function(){
	$(".ebony, .ivory").click(function(){
		var $key = $(this);
		var obk = $key.css('background-color');
		$(this).css("background-color", "blue");
		setTimeout(function(){
		$key.css('background-color', obk);
		}, 100);	
	});
	$("#C1").click(function (){
		var ac1 = document.getElementById("cc1");
		ac1.currentTime=0;		
		ac1.play();
	});
	$("#D1").click(function (){
		var ad1 = document.getElementById("dd1");
		ad1.currentTime=0;		
		ad1.play();		
	});
	$("#E1").click(function (){
		var aE1 = document.getElementById("ee1");
		aE1.currentTime=0;		
		aE1.play();
		
	});
	$("#F1").click(function (){
		var aF1 = document.getElementById("ff1");
		aF1.currentTime=0;		
		aF1.play();
		
	});
	$("#G1").click(function (){
		var ag1 = document.getElementById("gg1");
		ag1.currentTime=0;		
		ag1.play();
	});
	$("#A1").click(function (){
		var aa1 = document.getElementById("aa1");
		aa1.currentTime=0;		
		aa1.play();		
	});
	$("#H1").click(function (){
		var ah1 = document.getElementById("hh1");
		ah1.currentTime=0;		
		ah1.play();
	});
	$("#C2").click(function (){
		var aC2 = document.getElementById("cc2");
		aC2.currentTime=0;		
		aC2.play();
		
	});
	$("#Ciss").click(function (){
		var aCiss = document.getElementById("cci");
		aCiss.currentTime=0;		
		aCiss.play();	
	});
	$("#Diss").click(function (){
		var aDiss = document.getElementById("ddi");
		aDiss.currentTime=0;		
		aDiss.play();	
	});
	$("#Fiss").click(function (){
		var aFiss = document.getElementById("ffi");
		aFiss.currentTime=0;		
		aFiss.play();
		
	});
	$("#Giss").click(function (){
		var aGiss = document.getElementById("ggi");
		aGiss.currentTime=0;		
		aGiss.play();
	});
	$("#Aiss").click(function (){
		var aAiss = document.getElementById("aai");
		aAiss.currentTime=0;		
		aAiss.play();
	});
});
