//_____________exercise1 Sorting________________

let a = 300;
let b = 100;
let c = 200;

if (a <= b) {
    if (b <= c) {
        console.log(a, b, c);
    }
    else if (a <= c) {
        console.log(a, c, b);
    }
    else {
        console.log(c, a, b);
    };
} else if (c <= b) {
    console.log(b, a, c);
}
else if (a <= c) {
    console.log(b, a, c);
}
else {
    console.log(b, c, a);
};



//_____________exercise2 Сonverter________________
let temp = -250;
let unit = 'k';
let K = 0;
let F = 0;
let C = 0;

switch (unit) {
    case 'k':
        K = temp,
            C = K + 273.15;
            F = (C * 9 / 5) + 32;
            console.log('Градусов по кельвену:', K.toFixed(2), 'Градусов по цельсию:', C.toFixed(2), 'Градусов по фаренгейту:', F.toFixed(2));
        break;
    case 'f':
        F = temp;
        C = (F - 32) * 5 / 9;
        K = (F - 32) * 5 / 9 + 273.15;
        console.log('Градусов по кельвену:', K.toFixed(2), 'Градусов по цельсию:', C.toFixed(2), 'Градусов по фаренгейту:', F.toFixed(2));
        break;
    case 'c':
        C = temp;
        K = C + 273.15;
        F = (C * 9 / 5) + 32;
        console.log('Градусов по кельвену:', K.toFixed(2), 'Градусов по цельсию:', C.toFixed(2), 'Градусов по фаренгейту:', F.toFixed(2));
        break;
    default:
        console.log('Finish');
}