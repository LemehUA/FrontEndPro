function story() {
    let kolobok = {
        name: 'kolobok',
        say: function (phrase) {
            console.log(phrase);
        }
    };

    let grandMa = {
        name: 'grandMa',
        say: function (phrase) {
            console.log(phrase);
        }
    };

    let grandFa = {
        name: 'grandFa',
        say: function (phrase) {
            console.log(phrase);
        }
    };

    let rabbit = {
        name: 'rabit',
        say: function (phrase) {
            console.log(phrase);
        }
    };

    let bear = {
        name: 'bear',
        say: function (phrase) {
            console.log(phrase);
        }
    };

    let fox = {
        name: 'fox',
        say: function (phrase) {
            console.log(phrase);
        }
    };

    chapter1(kolobok, grandFa, grandMa);
    chapter2(kolobok, rabbit);
    chapter3(kolobok, bear);
    chapter4(kolobok, fox)

    console.log(kolobok);
    console.log(grandFa);
    console.log(grandMa);
    console.log(rabbit);
    console.log(bear);
    console.log(fox);

}

story();

function chapter1(kolobok, grandFa, grandMa) {
    kolobok.say(`${kolobok.name}: "Hellow Grandma and Grandfa"`);
    grandFa.say(`${grandFa.name}: "Hellow ${kolobok.name}"`);
    grandMa.say(`${grandMa.name}: "Hellow ${kolobok.name}"`);
    kolobok.say(`${kolobok.name}: "I'm not interested in sitting at home, I will swing into the forest"`);

};

function chapter2(kolobok, rabbit) {
    kolobok.say(`${kolobok.name}: "Hey! Who are you?"`);
    rabbit.say(`${rabbit.name}: "Hey! I ${rabbit.name}. And Who are you?"`);
    kolobok.say(`${kolobok.name}: "I'm Kolobok! ${kolobok.name}!"`);
    rabbit.say(`${rabbit.name}: "${kolobok.name}, ${kolobok.name}, I will eat you"`);
    kolobok.say(`${kolobok.name}: "I left my Grandma, I left my Grandfa and the hare will leave you"`);
};

function chapter3(kolobok, bear) {
    kolobok.say(`${kolobok.name}: "Hey! Who are you?"`);
    bear.say(`${bear.name}: "Hey! I ${bear.name}. And Who are you?"`);
    kolobok.say(`${kolobok.name}: "I'm Kolobok! ${kolobok.name}!"`);
    bear.say(`${bear.name}: "${kolobok.name}, ${kolobok.name}, I will eat you"`);
    kolobok.say(`${kolobok.name}: I left my Grandma, I left my Grandfa, I left Rabbit and I’ll leave you"`);
};

function chapter4(kolobok, fox) {
    kolobok.say(`${kolobok.name}: "Hey! Who are you?"`);
    fox.say(`${fox.name}: "I'm ${fox.name}, and I will eat you"`);
    kolobok.say(`${kolobok.name}: "I  ${kolobok.name}! A ty kto ryzhaia bestiai!"`);
    kolobok.say(`${kolobok.name}: I left my Grandma, I left my Grandfa, I left Rabbit and Bear and I’ll leave you!!! GOOD BY))"`);
};