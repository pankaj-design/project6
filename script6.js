const but = document.querySelectorAll('button');
let screen = document.getElementById('A1');
let screenValue = '';

function toCelsius(f){
    return (5/9)* (f-32);
}
function myFunction() {
    var f= screenValue;
    screen.value = toCelsius(f) + " Celsius";
}


function toFahrenheit(c){
    return c * (9/5) + 32;
}
function myFunction2() {
    var c= screenValue;
    screen.value = toFahrenheit(c) + "Fahrenheit ";
}


for (item of but){
    item.addEventListener('click', (e)=>{
        butText = e.target.innerText;

        if(butText == 'Fah=>Cel'){
            myFunction();
        }
        else if(butText == 'Cel=>Fah'){
            myFunction2();
        }
        else if(butText == '='){
            screen.value = eval(screenValue);
        }
        else if (butText == 'C') {
            screenValue = '';
            screen.value = screenValue;

        }
        else if(butText == 'Del'){
            screenValue = screenValue.slice(0,-1);
            screen.value = screenValue;
        }
        
        else{
            screenValue += butText;
        screen.value = screenValue;
        }
    })
}
