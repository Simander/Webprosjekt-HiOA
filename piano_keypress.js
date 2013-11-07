$(document).ready(function () {
       $(document).on("keydown", function (e) {
        var key;
        key = e.which;
        switch (key) {
            case 67://c
		var ac1 = document.getElementById("cc1");
		ac1.currentTime=0;		
		ac1.play();
		var $key = $("#C1");
		var obk = $key.css('background-color');
		$("#C1").css("background-color", "blue");
		setTimeout(function(){
		$key.css('background-color', obk);
		}, 100);
		break;
            case 70://ciss
              	var aCiss = document.getElementById("cci");
		aCiss.currentTime=0;		
		aCiss.play();
		var $key = $("#Ciss");
		var obk = $key.css('background-color');
		$("#Ciss").css("background-color", "blue");
		setTimeout(function(){
		$key.css('background-color', obk);
		}, 100);
                break;
            case 86://d
		var ad1 = document.getElementById("dd1");
		ad1.currentTime=0;		
		ad1.play();
		var $key = $("#D1");
		var obk = $key.css('background-color');
		$("#D1").css("background-color", "blue");
		setTimeout(function(){
		$key.css('background-color', obk);
		}, 100);
		break;
            case 71://diss
		var aDiss = document.getElementById("ddi");
		aDiss.currentTime=0;		
		aDiss.play();
		var $key = $("#Diss");
		var obk = $key.css('background-color');
		$("#Diss").css("background-color", "blue");
		setTimeout(function(){
		$key.css('background-color', obk);
		}, 100);	
                break;
	    case 66: //E
		var aE1 = document.getElementById("ee1");
		aE1.currentTime=0;		
		aE1.play();
		var $key = $("#E1");
		var obk = $key.css('background-color');
		$("#E1").css("background-color", "blue");
		setTimeout(function(){
		$key.css('background-color', obk);
		}, 100);
		break;
	    case 78: //F
		var aF1 = document.getElementById("ff1");
		aF1.currentTime=0;		
		aF1.play();
		var $key = $("#F1");
		var obk = $key.css('background-color');
		$("#F1").css("background-color", "blue");
		setTimeout(function(){
		$key.css('background-color', obk);
		}, 100);
		break;
	    case 74: //j: Fiss
		var aFiss = document.getElementById("ffi");
		aFiss.currentTime=0;		
		aFiss.play();
		var $key = $("#Fiss");
		var obk = $key.css('background-color');
		$("#Fiss").css("background-color", "blue");
		setTimeout(function(){
		$key.css('background-color', obk);
		}, 100);
		break;
	    case 77: //m: G
		var ag1 = document.getElementById("gg1");
		ag1.currentTime=0;		
		ag1.play();
		var $key = $("#G1");
		var obk = $key.css('background-color');
		$("#G1").css("background-color", "blue");
		setTimeout(function(){
		$key.css('background-color', obk);
		}, 100);
		break;
	    case 75: //k: giss
		var aGiss = document.getElementById("ggi");
		aGiss.currentTime=0;		
		aGiss.play();
		var $key = $("#Giss");
		var obk = $key.css('background-color');
		$("#Giss").css("background-color", "blue");
		setTimeout(function(){
		$key.css('background-color', obk);
		}, 100);
		break;
	    case 188: // , : A 
		var aa1 = document.getElementById("aa1");
		aa1.currentTime=0;		
		aa1.play();
		var $key = $("#A1");
		var obk = $key.css('background-color');
		$("#A1").css("background-color", "blue");
		setTimeout(function(){
		$key.css('background-color', obk);
		}, 100);
		break;
	    case 76: //L: Aiss
		var aAiss = document.getElementById("aai");
		aAiss.currentTime=0;		
		aAiss.play();
		var $key = $("#Aiss");
		var obk = $key.css('background-color');
		$("#Aiss").css("background-color", "blue");
		setTimeout(function(){
		$key.css('background-color', obk);
		}, 100);
		break;
	     case 190: //. : H
		var ah1 = document.getElementById("hh1");
		ah1.currentTime=0;		
		ah1.play();
		var $key = $("#H1");
		var obk = $key.css('background-color');
		$("#H1").css("background-color", "blue");
		setTimeout(function(){
		$key.css('background-color', obk);
		}, 100);
		break;
	     case 189: // - : C2
		var aC2 = document.getElementById("cc2");
		aC2.currentTime=0;		
		aC2.play();
		var $key = $("#C2");
		var obk = $key.css('background-color');
		$("#C2").css("background-color", "blue");
		setTimeout(function(){
		$key.css('background-color', obk);
		}, 100);
          	break;
        }
    });
});
