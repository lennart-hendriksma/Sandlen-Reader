var plusmin1 = 1;
var plusmin2 = 0;
var multi1 = 16;
var multi2 = 16;
$( window ).ready(function() {
	var $line1 = $( "#line_1" ), width1 = 0, timer1;
    var $line2 = $( "#line_2" ), width2 = 511, timer2;
    function rotate1() {
        $line1.css( "width" , width1);                     
        timer1 = setTimeout(function() {

            if( plusmin1 == 1 ){
                width1++;
                plusmin1 = 1;
                if( (width1+multi1) >= 510){plusmin1 = 0; multi1 = multi1*2;}
                $line1.css( "left" , "");  
            }else{
                width1--;
                plusmin1 = 0;
                if( width1 <= 0){plusmin1 = 1}
                $line1.css( "left" , 510-(width1+0));   
            }
            rotate1();
        },5);
    }
    function rotate2() {
        $line2.css( "width" , width2);                     
        timer2 = setTimeout(function() {

            if( plusmin2 == 1 ){
                width2++;
                plusmin2 = 1;
                if( (width2+multi2) >= 510){plusmin2 = 0; multi2 = multi2 *2;}
                $line2.css( "left" , "");  
            }else{
                width2--;
                plusmin2 = 0;
                if( width2 <= 0){plusmin2 = 1}
                $line2.css( "left" , 510-(width2+0));   
            }
            rotate2();
        },5);
    }
    rotate1();
    rotate2();
});