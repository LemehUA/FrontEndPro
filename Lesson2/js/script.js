console.log('15' * 'Text' || !!('100' + 70));   //true

console.log(!!undefined != null || (100 - - true));     //true

console.log(!' ' === (null || 10) > undefined);     //true

console.log(100 && !!(500 + 'Text') + 100);     //101

console.log(100 % ' ' / 10 && !'' && (!(10 + 5 + ' ') && 100 % 10));     //NaN

console.log(1000 % 10 - - false <= 10 ** 100 + 'Text');     // false

console.log(true + 100 % 'Text' < 'true' + + 'false');      // false

console.log(!(undefined + 'NaN') || +(100 - - true));       // 101

console.log((1000 % 10) && undefined && 50 || !(null || 10));       // false

let a = 5;
let b = undefined;
let c = 500;
let d = null;
console.log(d === (null || c) * a > undefined + + b);       // false