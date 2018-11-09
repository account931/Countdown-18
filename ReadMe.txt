CountDown
 #It counts toward nearest New Year forever + count to user specified date.
 #Uses 1 universal function to countdown-> {function my_CountDown_Timer_Core(dateStringX, myDiv, divText)}  
 //args(dateStringX = "Jan 1, 2019 00:00:00", div to html result, text to add to result)}

 #Mega Error of Timer overlapping->  1.) var x must be declared globally outside the function my_CountDown_Timer_Core()
 {x = setInterval(function()} + 2.) use {clearInterval(x)} as first line inside function



============================================

 #EXTERNAL ANIMATED PLUG-IN COUNTDOWN
 #Additionally this timer uses  EXTERNAL ANIMATED PLUG-IN COUNTDOWN, which dublicates custom user input timer

 
 #Time for countdown is set in countdown_external/assets/js/script.js in global var ts, which is set onClick in  js/myCountDown.js->{function set_user_date_input()}
 # Core timer is in countdown_external/assets/countdown/jquery.countdown.js but it is trigered in assets/js/script.js