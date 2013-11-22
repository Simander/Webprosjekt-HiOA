$(document).ready(function(){
		//les mer Anders
		$(".anders").hide();
		$("#skjul1").hide();
		$("#vis1").click(function(){
			$(".anders").fadeToggle("slow");
			$("#vis1").toggle();
			$("#skjul1").toggle();
			 $("#vis1").animate({left:'82%'},"slow");
    			$("#skjul1").animate({left:'82%'},"slow");
		}); 
		$("#skjul1").click(function(){
			$(".anders").fadeToggle("slow");
			$("#skjul1").toggle();
			$("#vis1").toggle();
			 var knapp1=$("#vis1");  
    				knapp1.animate({left:'1em'},"slow");
    			var knapp2=$("#skjul1");  
    				knapp2.animate({left:'1em'},"slow");		
		});
		
		
		//les mer Joakim
		$(".joakim").hide();
		$("#skjul2").hide();
		$("#vis2").click(function(){
			$(".joakim").fadeToggle("slow");
			$("#vis2").toggle();
			$("#skjul2").toggle();
			 var knapp1=$("#vis2");  
    				knapp1.animate({left:'82%'},"slow");
    			var knapp2=$("#skjul2");  
    				knapp2.animate({left:'82%'},"slow");
		}); 
		$("#skjul2").click(function(){
			$(".joakim").toggle("slow");
			$("#skjul2").toggle();
			$("#vis2").toggle();
			 var knapp1=$("#vis2");  
    				knapp1.animate({left:'1em'},"slow");
    			var knapp2=$("#skjul2");  
    				knapp2.animate({left:'1em'},"slow");		
		});	
		
});
