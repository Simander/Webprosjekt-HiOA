$(document).ready(function(){
		//knapp lyd switch
		$("#audio_samples").hide();
		$("#skjul").hide();
		$("#sound").click(function(){
			$("#audio_samples").toggle("fast");
			$("#sound").toggle();
			$("#skjul").toggle();
			 var knapp1=$("#sound");  
    				knapp1.animate({left:'29em'},"slow");
    			var knapp2=$("#skjul");  
    				knapp2.animate({left:'29em'},"slow");
		}); 
		$("#skjul").click(function(){
			$("#audio_samples").toggle("fast");
			$("#skjul").toggle();
			$("#sound").toggle();
			 var knapp1=$("#sound");  
    				knapp1.animate({left:'1em'},"slow");
    			var knapp2=$("#skjul");  
    				knapp2.animate({left:'1em'},"slow");		
		});	
});
