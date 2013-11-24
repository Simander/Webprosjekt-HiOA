$(document).ready(function(){
		//knapp lyd switch
		$("#sound").click(function(){
			$("#audio_samples").fadeToggle();
			$("#sound").toggle();
			$("#skjul").toggle();
			 var knapp1=$("#sound");  
    				knapp1.animate({left:'62%'},"slow");
    			var knapp2=$("#skjul");  
    				knapp2.animate({left:'62%'},"slow");
		}); 
		$("#skjul").click(function(){
			$("#audio_samples").fadeToggle();
			$("#skjul").toggle();
			$("#sound").toggle();
			 var knapp1=$("#sound");  
    				knapp1.animate({left:'1em'},"slow");
    			var knapp2=$("#skjul");  
    				knapp2.animate({left:'1em'},"slow");		
		});	
});
