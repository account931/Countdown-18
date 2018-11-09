
//$(function(){  //otherwise function startExternal_CountDown()	is not visible in myCountDown.js
	
	var note = $('#note'),
		ts = new Date(2012, 0, 1),
		newYear = true; //not used
	
	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date()).getTime() +  10*24*60*60*1000;  // sets date for 10 days ahead from now
		newYear = false;
	}
	
	//have set it to function {startExternal_CountDown()} to trigger in js/myCountDown.js-> $("#getDateEvent").click(function() { 
	//if remove function, it will run onLoad with default date, which is now + 10 days
    function startExternal_CountDown()	
	{
		$('#countdown').html('');
		$('.countdownHolder').remove;   //Mega Fix to avoid redoubling the counter when clicking on the "GET" button for more than 1 time. 
		//This class "countdownHolder" is assigned dynamically in countdown_external/assets/countdown/jquery.countdown.js
		
	    $('#countdown').countdown({
		    timestamp	: ts,  //date/time for countdown, we get it from js/myCountDown.js->{function set_user_date_input()}
		    callback	: function(days, hours, minutes, seconds){
			
			    var message = "";
			
			    message += days + " day" + ( days==1 ? '':'s' ) + ", ";
			    message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
			    message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
			    message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
			    
				
				//below will never fire
			    if(newYear){
				    message += "left until the new year!";
			    }
			    else {
				    message += "left to 10 days from now!";
			    }
			
			    note.html(message);
		    }
	   });
    }
	
//});



//});
