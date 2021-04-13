

//_____________exercise1 Сonverter on function________________//

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

    console.log(`Градусов по кельвену: = ${K.toFixed(2)},\nГрадусов по цельсию: = ${C.toFixed(2)},\nГрадусов по фаренгейту: = ${F.toFixed(2)}`);

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


//_____________exercise2 Сonverter on function (variant 1)________________//

function f(n) {
    if (n === 1) {
        return n;
    }
    return n + f(--n);
};

let recursion = f(100);
console.log('Recursion =', recursion);

//_____________exercise2 Сonverter on function (variant 2)________________//

function f(n) {
    if (n == 1)
        return 1;
    return n + f(n - 1);

};

alert(f(100));

