<!doctype html>
<!--------------------------------Bootstrap  Main variant ------------------------------------------>
  <html lang="en-US">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="Content-Type" content="text/html">
      <meta name="description" content="myConcert" />
      <meta name="keywords" content="myConcert">
      <title>myCountDown</title>

      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> <!-- Fa-fa library-->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	 
      <link rel="stylesheet" type="text/css" media="all" href="css/myCountDown.css">
	  
	  <script src="js/dropAdvertise_zzz.js"></script>         <!-- Core countdown18 API JS-->
      <script src="js/myCountDown.js"></script>         <!-- Core countdown18 API JS-->
	  <script src="js/changeStyleTheme.js"></script>   <!-- Change wallpapers,changeStyleTheme JS-->
	  
	  
	  
	 <!--------------- START  EXTERNAL ANIMATED PLUG-IN COUNTDOWN  FILES  --------------->   <!-- Time  is  set  in = asserts/js/script.js-->
      <!--  Files  those  uses    for  creating countdown  are  stored  in FOLDER  ASSERTS-->

      <!-- CSS -->
        <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300" />
        <link rel="stylesheet" href="external_countdown_plugin/assets/countdown/jquery.countdown.css" />        
	   
	   <!--  JS  Countdown--> <!--Located  in header  causes  Non-working-->
       <script src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
	   <script src="external_countdown_plugin/assets/countdown/jquery.countdown.js"></script>
	   <script src="external_countdown_plugin/assets/js/script.js"></script>  
	 <!----------------  END  EXTERNAL ANIMATED PLUG-IN COUNTDOWN  FILES  ----------------------------------->
	  
	  
	  
	  <meta name="viewport" content="width=device-width" />
	  
	  <!--Favicon-->
      <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
     </head>

     <body>  
	 	 

       <div id="headX" class="jumbotron text-center gradient alert-success my-background head-style" style =' background-color:lavender ;'> <!--#2ba6cb;-->
         <h1 id="h1Text"> <span id="textChange">myCountDown</span> <i class="fa fa-clock-o" style="font-size:48px;color:"></i><!--</span> <img src="http://78.media.tumblr.com/tumblr_m2hq5tt3ma1qav3uso1_400.gif" style="width:3%"/>--> </h1> 
	     <p id="newYear"></p>
	   </div>



       
         <div class="wrapper grey">
    	     <div class="container">
		         <div class="row row1">
			 
			     
					 
			  
					 
				     <!---------------- Div with DatePicker -------->	
				     <div class="col-sm-4 col-xs-12 my-background coreDivs-toHide head-style"  id="datePicker" >
					     <div class="form-group">
                              <label for="dateHistorical">Select date </label>
				              <input type="date" name="" id="dateHistorical" class="date"> 
							   
						  </div>
						  
						  <div class="form-group">
                              <label for="timeZ">Select time </label>
				              <input type="time" name="" id="timeZ" class="date" value="00:00">
                              <br>							  
							  <!-- Button to start -->
							  <input id ="getDateEvent" type="button" class="btn btn-default" value="Get">
						  </div>
						 
					 </div>
				     <!---------------- Div with DatePicker -------->
					 
					 
				 
				   </div>  <!-- END class="row row1"> here, to make sure QR img appears on the same line in desktop-->
				 
				 
				 
				 
				 
				 
				    <!---------------- myCountDown --------------->
				    <br>
				    <div class="col-sm-12 col-xs-12 head-style"> 
					    <center>
                            <p id ="status"></p>
                        </center>						
				    </div>
				    <!--------------- END  myCountDowne ------------------>
				 
				 
				 
				 
				
				 
				 
				 
				 
				 
				    <!--------- Error Closable window-------->
					<br><br><br><br>
					<div class="col-sm-12 col-xs-12" id="errorDiv"> 
				       <div class="alert alert-info alert-dismissible" id="err">
					         <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                             
                       </div>
					</div>
				    <!------ ENF Error Closable window-------->
				  
				  
				
				
				
				
				 <br>
				 <!----------------------------------- START EXTERNAL ANIMATE COUNTDOWN PLUG-IN---------------------------------->
                 <!-- START COUNTDOND--><!--  ALL  FILES  ARE  IN ASSERTS  folder --> <!-- Time  is  set  in = asserts/js/script.js-->
				 <div class="col-sm-12 col-xs-12" id="countdown"> 
                    
				 </div>
                 <!--<p id="note"></p>--><!--  This  shows  text   info  , like  u  have  5  days  left-->
                 <!-- END  COUNTDOWN -->
				 <!----------------------------------- END  EXTERNAL ANIMATE COUNTDOWN PLUG-IN---------------------------------->
				 
				
				
				
				
				
				

				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				

				<!------    JUST TO FIX OVERLAPPING by footer ------->
				<div class="col-sm-12 col-xs-12 " style="height:400px;">
				</div>
				
				
	 

	 
	 
    		</div><!-- /.container -->	  		
         </div><!-- /.wrapper -->
        
                


    	          
    	
		
		
		
			      <!-----------------  Button to change Style theme------------------------->
	              <input type="button" class="btn" value=">>" id="changeStyle" style="position:absolute;top:0px;left:0px;" title="click to change theme"/>
	              <!-----------------  Button to change Style theme------------------------->
				  
				  
				  
				  
				 
				  
				  
				  
				  
				  
				  
		
		          <!------------- Footer ------------->
				  <div class="footer"> <!--navbar-fixed-bottom  fixxes bootom problem-->
				      Contact: <strong>dimmm931@gmail.com</strong><br>
					  <?php  echo date("Y"); ?>
				  </div>
		          <!------------ END Footer ----------->  
		
		
		
		
		<!-- ##### -- Advertise -- #### -->
		<!--
		   <div class="ads ">
		        <a target="_blank" href="https://www.facebook.com/events/165143454205556/" id="link">
				    <img src="images/ads/sub_od.jpg" alt="Submerged"/>  
				</a>	
			</div>
			-->
		<!-- ##### -- END Advertise -- #### -->
		
		
		
		
    
    </body>
</html>





<?php

// Record (with CLASS) all the  input  to  txt;  //;
      include("Classes/RecordTxt.php");
      RecordTxt::RecordAnyInput(array(/*$user*/), 'recordText/myCountDown.txt');// Record  to  text;
//End  Record;
?>


