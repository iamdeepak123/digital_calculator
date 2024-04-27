const disp1 = document.getElementById("display1");
let disp2 = document.getElementById("display2");

function appendToDisplay(input){
    disp2.value = disp2.value + input;
}
function percent(){
    
    if (disp1.value == " ") {

        disp2.value = disp2.value/100;

    } else {

        disp2.value = disp2.value*100;

    }
}

function clearDisplay()
{
    disp1.value= " ";
    disp2.value = " ";

}
function calculate(){
    if (disp2.value == " ") {

        
    } else {
        disp1.value= disp2.value;
    disp2.value = eval(disp2.value);
    
    }
    
}

