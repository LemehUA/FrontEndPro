

function calculate(temp, unit) {

    var temp = -250;
    var unit = 'k';
    console.log(`Unit:${unit}, Temp:${temp}`);

    switch (unit) {
        case 'k':
            K = temp;
            C = kelvinToCelsius(temp);
            F = kelvinToFahrenheit(temp);
            break;
        case 'f':
            F = temp;
            C = fahrenheitToCelsius(temp);
            K = fahrenheitToKelvin(temp);
            break;
        case 'c':
            C = temp;
            K = celsiusToKelvin(temp);
            F = celsiusToFahrenheit(temp);
            break;
        default:
            console.log('Finish');
    }

    console.log(`
    Градусов по кельвену: = ${K.toFixed(2)},
    Градусов по цельсию: = ${C.toFixed(2)},
    Градусов по фаренгейту: = ${F.toFixed(2)}`);

}

calculate();

function kelvinToCelsius(temp) {
    return temp + 273.15;
};
function kelvinToFahrenheit(temp) {
    return (temp * 9 / 5) + 32;
};

function fahrenheitToCelsius(temp) {
    return (temp - 32) * 5 / 9;
};

function fahrenheitToKelvin(temp) {
    return (temp - 32) * 5 / 9 + 273.15;
};

function celsiusToKelvin(temp) {
    return temp + 273.15;
};

function celsiusToFahrenheit(temp) {
    return (temp * 9 / 5) + 32;
};