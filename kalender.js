var objToday = new Date(),
	weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
	dayOfWeek = weekday[objToday.getDay()],
	domEnder = new Array( 'th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th' ),
	dayOfMonth = today + (objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder[objToday.getDate()] : objToday.getDate() + domEnder[parseFloat(("" + objToday.getDate()).substr(("" + objToday.getDate()).length - 1))],
	months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
	curMonth = months[objToday.getMonth()],
	curYear = objToday.getFullYear(),
	curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
	curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
	curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
	curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
var today = curHour + ":" + curMinute + "." + curSeconds + curMeridiem + " " + dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear;

	var day = new array();
		day[1] = "Mandag";
		day[2] = "Tirsdag";
		day[3] = "Onsdag";
		day[4] = "Torsdag";
		day[5] = "Fredag";
		day[6] = "Lørdag";
		day[7] = "Søndag";
		
	
	var month = new array();
		month[1] = "Januar";
		month[2] = "February";
		month[3] = "March";
		month[4] = "April";
		month[5] = "May";
		month[6] = "June";
		month[7] = "July";
		month[8] = "August";
		month[9] = "September";
		month[10] = "October";
		month[11] = "November";
		month[12] = "December";
	
	//var year = 2014;
	//var år = 2000;		
	var hour = 0; // Time teller
	var hourstotal = 24; // max antall timer på et døgn
	var daycount = 0; // Teller for day
	var daystotal = get.date?; // Hente totale day i monthen
	var year = 2014; // Hente ut år
	
	for (var i = 0; <= hourstotal; i++) // Løkkeception -_-
	{
		hour++;  // Øker timeteller med 1
		if ( hour == hourstotal) //instruks for løkke som går til max antall timer på et døgn
		{
			for (var j = 0; j <= day.length; j++)
			{	
				day[j++]; // øker dag array med 1, Altså navnet på dagen.
				daycount++ // Dag teller øker med 1
				hour = 0; // reset timer
				
				if ( daycount == 30) // om dag teller når slutten av monthen <- må sette inn riktig date get metode
				{
					for ( int k = 0; k <= month.length; k++)
					{
						month[k++]; // øker month med 1
						daycount = 0; // reset day
					}	
				}						
			}
		}
		
	}
	
	
	var objToday = new Date(),
                weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
                dayOfWeek = weekday[objToday.getDay()],
                domEnder = new Array( 'th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th' ),
                dayOfMonth = today + (objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder[objToday.getDate()] : objToday.getDate() + domEnder[parseFloat(("" + objToday.getDate()).substr(("" + objToday.getDate()).length - 1))],
                months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
                curMonth = months[objToday.getMonth()],
                curYear = objToday.getFullYear(),
                curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
                curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
                curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
                curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
var today = curHour + ":" + curMinute + "." + curSeconds + curMeridiem + " " + dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear;
	
	
