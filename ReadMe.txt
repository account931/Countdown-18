CountDown
It counts toward nearest New Year forever + count to user specified date.
Uses 1 universla function to countdown-> {function my_CountDown_Timer_Core(dateStringX, myDiv, divText)}  //args(dateStringX = "Jan 1, 2019 00:00:00", div to html result, text to add to result)}

#Mega Error of Timer overlapping->  1.) var x must be declared globally outside the function my_CountDown_Timer_Core() {x = setInterval(function()} + 2.) use {clearInterval(x)} as first line inside function