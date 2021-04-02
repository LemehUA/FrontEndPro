//_____________Lesson1________________

const firstName = 'Eugene';
const lastName = 'Lemekh';
let city = 'Dnepr';
let age = 33;
const sex = 'male';
const children = '2';
let hobby = 'fishing';
let itSchool = 'Hillel';
let curse = "Front and Pro";
const homeworkIsReady = true;

console.log(firstName, typeof firstName);
console.log(lastName, typeof lastName);
console.log(city, typeof city);
console.log(age, typeof age);
console.log(sex, typeof sex);
console.log(children, typeof children);
console.log(hobby, typeof hobby);
console.log(itSchool, typeof itSchool);
console.log(curse, typeof curse);
console.log(homeworkIsReady, typeof homeworkIsReady);

//_____________Lesson2________________


let myName = 'Eugene'

let aboutMe = {
    name: myName,
    age: 33,
    isMaried: true,
    studentHillel: true,
    childrenAge: {
        firstSon: '12',
        secondSon: '2',
    },
};

console.log(aboutMe);

//_____________Lesson3________________

alert('Привет! Прежде чем начнем, ответь на пару вопросов!');

let confirmStart = confirm('Готов?');
console.log(confirmStart, typeof confirmStart);

let yourName = prompt('Как тебя зовут?');
console.log(yourName, typeof yourName);

let promptAge = prompt('Сколько тебе лет?');
console.log(promptAge, typeof promptAge);

alert('Отлично!');

let confirmProgramming = confirm('Любишь программировать?');
console.log(confirmProgramming, typeof confirmProgramming);

let promptLanguages = prompt('Какие языки программирования знаешь?');
console.log(promptLanguages, typeof promptLanguages);

let promptFirstProject = prompt('Раскажи о своём первом проекте');
console.log(promptFirstProject, typeof promptFirstProject);

let confirmNewLang = confirm('Продолжишь изучать новые языки программирования?');
console.log(confirmNewLang, typeof confirmNewLang);

let promptLoveLang = prompt('Какой твой любимый язык программированя?');
console.log(promptLoveLang, typeof promptLoveLang);

alert('Отлично! Успехов в изучении!');
