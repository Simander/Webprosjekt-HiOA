$(document).ready(function(){
		//knapp lyd switch
		$("#audio_samples").hide();
		$("#skjul").hide();
		$("#sound").click(function(){
			$("#audio_samples").toggle("fast");
			$("#sound").toggle();
			$("#skjul").toggle();
		}); 
		$("#skjul").click(function(){
			$("#audio_samples").toggle("fast");
			$("#skjul").toggle();
			$("#sound").toggle();
			
			
		});	
});
	
