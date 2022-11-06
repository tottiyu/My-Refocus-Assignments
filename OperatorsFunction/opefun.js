//Celsius to Kelvin
function convertToKelvin(tempCelsius) {
    let tempKelvin = tempCelsius + 273.15;
    return tempKelvin;
}

console.log(convertToKelvin(15));

//Fahrenheit to Kelvin
function convertToKelvin(tempFahrenheit) {
    let tempKelvin = (tempFahrenheit - 32) / 1.8 + 273.15;
    return tempKelvin;
}

console.log(convertToKelvin(10));

//TASK2
const TIP_RATE = 0.1;

function computeTip(totalBill) {
    let totalTip = totalBill * TIP_RATE;
    return totalTip;
}

console.log(computeTip(2000));