$(document).ready(function(){
	
	//sets today to datepicker form value
	document.getElementById('dateHistorical').valueAsDate = new Date();
	
	//onLoad runs enternal countdown to nearest New-Year
	countToNewYear();
	
	 //---------------------------------------------
	$("#getDateEvent").click(function() {   // $(document).on("click", '.circle', function() {   // this  click  is  used  to   react  to  newly generated cicles;
		runCustomCountDown();
    });
	
	
	//runs on click with a user set of  date
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     ** 
	function runCustomCountDown()
	{
		var xx, now, distance, days, hours, minutes, seconds, inputZ
		//if empty input
		if ($("#dateHistorical").val()==""){
			alert("Select the date");
			return false;
		}
		
		//if OLD date selected
		if ( new Date($("#dateHistorical").val()).getTime() < new Date().getTime()){  //if UnixTime of patepicker < now TimeStamp
			alert("You can not set Past time");
			return false;
		}
		
		clearInterval(xx);
		$("#status").html("");
		
	   // Set the date we're counting down to
       // var countDownDate = new Date("Jan 1, 2019 00:00:00").getTime(); //new Date("Jan 5, 2019 15:37:25").getTime();
		var monthX = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        inputZ = $("#dateHistorical").val();  //gets user input
        alert(inputZ);
		
		//constructs string "Jan 1, 2019 00:00:00"
		var constructedDate = inputZ.split("-")[2] + " " + monthX[inputZ.split("-")[1]-1]/*Month digit -1*/ + ", " + inputZ.split("-")[0] + " 00:00:00";  //i.e = "Jan 1, 2019 00:00:00"
		alert(constructedDate );
        var countDownDate = new Date(constructedDate).getTime(); //gets UnixTime of user's time input
        alert(countDownDate);
        

        // can inject funct here!!!!!!
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

          // Display the result in the element with id="status"
         $("#status").html(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

         // If the count down is finished, write some text 
        if (distance < 0) {
            clearInterval(xx);
            document.getElementById("status").innerHTML = "EXPIRED";
        }
      }, 1000);
	}
	
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
		

	
	   
	 //onLoad runs enternal countdown to nearest New-Year
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     ** 
	function countToNewYear()
	{
		//gets next year
		//var aYearFromNow = new Date();
		var nextYear = new Date(new Date().setFullYear(new Date().getFullYear() + 1)) //gets next year date//returns Tue Oct 08 2019 14:40:07 GMT+0300 (за східноєвропейським літнім часом)
		var nextYearZ = nextYear.toString().split(" ")[3]; //gets the next year separartely
		
		
	    // Set the date we're counting down to
        var countDownDate = new Date("Jan 1," + nextYearZ + " 00:00:00").getTime(); //always sets to 1 Jan of next year //new Date("Jan 5, 2019 15:37:25").getTime();
		
		 myCountDown(countDownDate, "#newYear", "New Year will be in ");
	   
	}
    // **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************



  
  
  
    //
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     ** 
	function myCountDown(dateStringX, myDiv, divText)  //dateString = "Jan 1, 2019 00:00:00"
	{
		var countDownDate = new Date(dateStringX).getTime();  //gets UnixTime
       //alert(countDownDate);
        


       // Update the count down every 1 second
       var x = setInterval(function() {

           // Get todays date and time
           var now = new Date().getTime();

           // Find the distance between now and the count down date
           var distance = countDownDate - now;

          // Time calculations for days, hours, minutes and seconds
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);

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
	