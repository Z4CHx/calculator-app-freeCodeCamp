$(document).ready(function(){
    
    var a = "";
    var b = "";
    var result = 0;
    var pressed = "";
    var operator = "";
    var displayArea = $("#display");
    var display = function(output){
        $("#display").html(output);
    }
    
    var calc = function(a,b,operator){
        a = parseFloat(a);
        b = parseFloat(b);
        displayArea.text("");
       if( operator === "+" ) {
           console.log("result: a + b was " + ( a + b ) );
           result = a + b;
           return result;
       } else if ( operator === "-" ) {
           console.log("result: a - b was " + ( a - b ) );
           result = a - b;
           return result;
       } else if ( operator === "*" ) {
           console.log("result: a * b was " + ( a * b ) );
           result = a * b;
           return result;
       } else if ( operator === "/" ) {
           console.log("result: a / b was " + ( a / b ) );
           result = a / b;
           return result;
       } else {
           return 0;
       }
       
   };
    
    
    
    $("#numbers a, #operators a").click(function(){
        var buttonValue = $(this).html();
//        console.log("button value was " + buttonValue);
        if (buttonValue === "C"){
            pressed = "";
            display(pressed);
            console.log("was cleared");
        } else if (buttonValue === "AC"){
            a = 0;
            b = 0;
            result = 0;
            pressed = "";
            operator = "";
            display(calc);
            console.log("all was cleared");
        } else if (buttonValue === "="){
            
            display(calc(a,b,operator)); 
            console.log("equals pressed");
        } else if (buttonValue === "+" || buttonValue === "-" || buttonValue === "*" || buttonValue === "/") {
            operator = buttonValue;
            display(operator);
        } else {
            pressed = $(this).html();
            if (operator === "") {
                a += pressed;
            } else {
                b += pressed;
            }
            display(pressed);
//            console.log("went to else");
        } 
        
        console.log("a is " + a + ", b is " + b + ", and operator is " + operator);
    });

    
   
    
});