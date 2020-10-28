let  printCelsius = document.getElementById("celsius1");
let printDegreeCelsius = document.getElementById("celsius2");
let  printFahrenheit = document.getElementById("fahrenheit1");
let printDegreeFahrenheit = document.getElementById("fahrenheit2");
let  printNewton = document.getElementById("newton1");
let printDegreeNewton = document.getElementById("newton2");

document.getElementById("kelvin").onkeyup = function(event){
    const kelvin = document.getElementById("kelvin").value;
    let celsius;
    celsius = kelvin - 273;  // convert temperature in kelvin to celsius
    printCelsius.style.padding = "16px";
    let text1 = "Temperature in Celsius";
    printCelsius.innerHTML = text1;
    printDegreeCelsius.innerHTML = celsius;

    const fahrenheit = Math.floor(celsius * (9/5) + 32);  // convert temperature in celsius to fahrenheit
    printFahrenheit.style.padding = "16px";
    let text2 = "Temperature in Fahrenheit";
    printFahrenheit.innerHTML = text2;
    printDegreeFahrenheit.innerHTML = fahrenheit;

    const newton = Math.floor(celsius * (33/100));
    printNewton.style.padding = "16px";
    let text3 = "Temperature in newton";
    printNewton.innerHTML = text3;
    printDegreeNewton.innerHTML = newton;
}; 

