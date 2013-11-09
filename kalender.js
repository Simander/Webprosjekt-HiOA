

	var dager = new array();
		dager[1] = "Mandag";
		dager[2] = "Tirsdag";
		dager[3] = "Onsdag";
		dager[4] = "Torsdag";
		dager[5] = "Fredag";
		dager[6] = "Lørdag";
		dager[7] = "Søndag";
		
	
	var måneder = new array();
		måned[1] = "Januar";
		måned[2] = "February";
		måned[3] = "March";
		måned[4] = "April";
		måned[5] = "May";
		måned[6] = "June";
		måned[7] = "July";
		måned[8] = "August";
		måned[9] = "September";
		måned[10] = "October";
		måned[11] = "November";
		måned[12] = "December";
	
	//var year = 2014;
	//var år = 2000;		
	var hour = 0; // Time teller
	var hourstotal = 24; // max antall timer på et døgn
	var daycount = 0; // Teller for dager
	var daystotal = get.date?; // Hente totale dager i måneden
	var year = 2014; // Hente ut år
	
	for (var i = 0; <= hourstotal; i++) // Løkkeception -_-
	{
		hour++;  // Øker timeteller med 1
		if ( hour == hourstotal) //instruks for løkke som går til max antall timer på et døgn
		{
			for (var j = 0; j <= dager.length; j++)
			{	
				dager[j++]; // øker dag array med 1, Altså navnet på dagen.
				daycount++ // Dag teller øker med 1
				hour = 0; // reset timer
				
				if ( daycount == 30) // om dag teller når slutten av måneden <- må sette inn riktig date get metode
				{
					for ( int k = 0; k <= måned.length; k++)
					{
						måned[k++]; // øker måned med 1
						daycount = 0; // reset dager
					}	
				}		
					
				
			}
		}
		
	}
	
	
	
