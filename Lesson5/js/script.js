

// ______________Exercise 1________________

//array filled from 1 to 1000
let points = new Array(999);
for (let i = 0; i <= 999; i++) {
    points[i] = i + 1;
}

for (let i = 0; i < points.length; i++) {
    console.log(points[i]);
}

let array2 = points;


// ______________Exercise 2________________

// Even numbers and multiples of 10
let multipleOf_10 = array2.filter((_element) => {
    if (_element % 2 === 0) {
        return _element % 10 === 0;
    }
});

console.log('Even numbers and multiples of 10', multipleOf_10);



// Odd and multiples of 3
let multipleOf_3 = array2.filter((_element) => {
    if (_element % 2 !== 0) {
        return _element % 3 === 0;
    }
});

console.log('Odd and multiples of 3', multipleOf_3);



// Odd and multiples of 5
let multipleOf_5 = array2.filter((_element) => {
    if (_element % 2 !== 0) {
        return _element % 5 === 0;
    }
});

console.log('Odd and multiples of 5', multipleOf_5);



// Sorted from highest to lowest
let fromMoreToLess = array2.sort((a, b) => {
    return b - a;
});

console.log('Sorted from highest to lowest', fromMoreToLess);


// ______________Exercise 3________________


let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

let studentJoint = student1Courses.concat(student2Courses);

console.log(studentJoint);