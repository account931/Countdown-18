$(document).ready(function(){
	
	//init setInterval timer var as global
	var x, yy;  //var for setTimeInterval //Mega Error was here: var should not have local scope with {x = setInterval(function()}, xx had local scope and the next click triggers set_user_date_input() which runs a new {x = setInterval(function()}, while the old one remained runnning as well
	var x_NY; //var for setTimeInterval for New-year counter
	//sets today to datepicker form value
	document.getElementById('dateHistorical').valueAsDate = new Date();
	
	//onLoad runs enternal countdown to nearest New-Year
	set_date_to_New_Year();
	
	
	 //---------------------------------------------
	 //Click in User Calendar
	$("#getDateEvent").click(function() {   // $(document).on("click", '.circle', function() {   // this  click  is  used  to   react  to  newly generated cicles;
		set_user_date_input();
    });
	
	
	
	
	
	
	   
	 //onLoad runs enternal countdown to nearest New-Year
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     ** 
	function set_date_to_New_Year()
	{
		//gets next year
		//var aYearFromNow = new Date();
		var nextYear = new Date(new Date().setFullYear(new Date().getFullYear() + 1)) //gets next year date//returns Tue Oct 08 2019 14:40:07 GMT+0300 (за східноєвропейським літнім часом)
		var nextYearZ = nextYear.toString().split(" ")[3]; //gets the next year separartely from nextYear
		
		
	    // Set the date we're counting down to
        var countDownDate = new Date("Jan 1," + nextYearZ + " 00:00:00").getTime(); //always sets to 1 Jan of next year //new Date("Jan 5, 2019 15:37:25").getTime();
		
		 //runs countdown with passed New Year date
		 //my_CountDown_Timer_Core(countDownDate, "#newYear", "New Year will be in ");   //TEMPO DISBALED nad use MANUAL COUNTDOWN
		 
		 
		 //---------------- RAW FUNCTION ------------------------------
		 clearInterval(yy); //mega fix, without this timers overlaps
		var countDownDate = new Date(countDownDate).getTime();  //gets UnixTime of passed 1 arg
       //alert(countDownDate);
        


       // Update the count down every 1 second
       /*var*/ yy = setInterval(function() {  //x must be global

           // Get todays date and time
           var now = new Date().getTime();

           // Find the distance between now and the count down date
           var distance = countDownDate - now;

          // Time calculations for days, hours, minutes and seconds
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		  
		  //adds 0 to 1-9 minutes, ie display 09 minutes, not 9 minutes
		  if(minutes < 10){
			  minutes = "0" + minutes;
		  }
		  
		  //adds 0 to 1-9 seconds, ie display 09 seconds, not 9 seconds
		  if(seconds < 10){
			  seconds = "0" + seconds;
		  }
		  
          // Display the result in the element with id="status"
		  //$(myDiv).stop().fadeOut("fast",function(){ $(this).html(divText + days + "d " + hours + "h " + minutes + "m " + seconds + "s ")}).fadeIn(900);  //with animation
          $("#newYear").html("New-Year comes in " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

         // If the count down is finished, write some text 
        if (distance < 0) {
            clearInterval(x);
            $("#newYear").html("EXPIRED");
        }
      }, 1000);
	   
	}
    // **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************


	
	
	
	
	//on click runs a user input value date
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     ** 
	function set_user_date_input()
	{
		//gets the time input, blankspace before is a must, by default the time is 00:00
		var timeXX = " " + $("#timeZ").val() + ":00";
		
		//var xZ;
		//clearInterval(window.xZ); //must have to avoid timers overlapping
		
		var now, distance, days, hours, minutes, seconds, inputZ
		//checks if not empty input
		if ($("#dateHistorical").val()==""){
			alert("Select the date");
			return false;
		}
		
		//check if not OLD date is selected
		if ( new Date($("#dateHistorical").val() + timeXX).getTime() < new Date().getTime()){  //if UnixTime of patepicker < NOW TimeStamp
			alert("Please, select date greater than today ");
			return false;
		}
		
		//clearInterval(xx);
		$("#status").html("");
		
	   // Set the date we're counting down to
       // var countDownDate = new Date("Jan 1, 2019 00:00:00").getTime(); //new Date("Jan 5, 2019 15:37:25").getTime();
		var monthX = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        inputZ = $("#dateHistorical").val();  //gets user input
        //alert(inputZ + timeXX);
		$("#err").append("<br>" + inputZ + timeXX); //instead of alert
		
		//constructs string "Jan 1, 2019 00:00:00" OR + time set by user (00:00) by default
		var constructedDate = inputZ.split("-")[2] + " " + monthX[inputZ.split("-")[1]-1]/*Month digit -1*/ + ", " + inputZ.split("-")[0] +  timeXX /* " 00:00:00" */;  //i.e = "Jan 1, 2019 00:00:00"
		//alert(constructedDate);
		$("#err").append("<br>" + constructedDate); //instead of alert
		
        //var countDownDate = new Date(constructedDate).getTime(); //gets UnixTime of user's time input
        //alert(countDownDate);
        

        // can inject funct here!!!!!!
		//var textZ = inputZ.split("-")[2] + " " + monthX[inputZ.split("-")[1]-1] + " will be in "; //date, month
		
		//runs Universal countdown function with user date
		my_CountDown_Timer_Core(constructedDate, "#status", "");  //arg("Jan 1, 2019 00:00:00", divToHtml, Text)
		
		/*
       // Update the count down every 1 second
       xx = setInterval(function() {

           // Get todays date and time
           now = new Date().getTime();

           // Find the distance between now and the count down date
           distance = countDownDate - now;

          // Time calculations for days, hours, minutes and seconds
          days = Math.floor(distance / (1000 * 60 * 60 * 24));
          hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          seconds = Math.floor((distance % (1000 * 60)) / 1000);
		  
		  //adds 0 to 1-9 seconds
		  if(seconds < 10){
			  seconds = "0" + seconds;
		  }

          // Display the result in the element with id="status"
         $("#status").html(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

         // If the count down is finished, write some text 
        if (distance < 0) {
            clearInterval(xx);
            document.getElementById("status").innerHTML = "EXPIRED";
        }
      }, 1000);
	  */
	}
	
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
		

	

  
  
  
    //Universal Function to run countdowns with a date passed as 1st arg
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     ** 
	function my_CountDown_Timer_Core(dateStringX, myDiv, divText)  //args(dateString = "Jan 1, 2019 00:00:00", div to html result, text to add to result, var for timer)
	{
		clearInterval(x); //mega fix, without this timers overlaps
		var countDownDate = new Date(dateStringX).getTime();  //gets UnixTime of passed 1 arg
       //alert(countDownDate);
        


       // Update the count down every 1 second
       /*var*/ x = setInterval(function() {  //x must be global

           // Get todays date and time
           var now = new Date().getTime();

           // Find the distance between now and the count down date
           var distance = countDownDate - now;

          // Time calculations for days, hours, minutes and seconds
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		  
		  //adds 0 to 1-9 minutes, ie display 09 minutes, not 9 minutes
		  if(minutes < 10){
			  minutes = "0" + minutes;
		  }
		  
		  //adds 0 to 1-9 seconds, ie display 09 seconds, not 9 seconds
		  if(seconds < 10){
			  seconds = "0" + seconds;
		  }
		  
          // Display the result in the element with id="status"
		  //$(myDiv).stop().fadeOut("fast",function(){ $(this).html(divText + days + "d " + hours + "h " + minutes + "m " + seconds + "s ")}).fadeIn(900);  //with animation
          $(myDiv).html(divText + days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

         // If the count down is finished, write some text 
        if (distance < 0) {
            clearInterval(x);
            $(myDiv).html("EXPIRED");
        }
      }, 1000);
	}
  
    // **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************

  
  
  
  
  
  
	   
	   
	   
//=============================== DONOR =======================================================================
	   
	 // Scroll the page to results  #resultFinal
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     ** 
	function scrollResults(divName, parent)  //arg(DivID, levels to go up from DivID)
	{   //if 2nd arg is not provided while calling the function with one arg
		if (typeof(parent)==='undefined') {
		
            $('html, body').animate({
                scrollTop: $(divName).offset().top
                //scrollTop: $('.your-class').offset().top
             }, 'slow'); 
		     // END Scroll the page to results
		} else {
			//if 2nd argument is provided
			var stringX = "$(divName)" + parent + "offset().top";  //i.e constructs -> $("#divID").parent().parent().offset().top
			$('html, body').animate({
                scrollTop: eval(stringX)         //eval is must-have, crashes without it
                }, 'slow'); 
		}
	}
	
	// **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************
	
	
	
	
	
	
	 // **************************************************************************************
    // **************************************************************************************
    //                                                                                     ** 
	
	
	function scroll_toTop() 
	{
	    $("html, body").animate({ scrollTop: 0 }, "slow");	
	}
	// **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************
	
	
	

});
// end ready	
	