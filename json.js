const person = {id: 1, name: 'Mufassir Mahmud', age: 23, student: 'CSE'};
console.log(person);

const stringified = JSON.stringify(person);
console.log(stringified);

const stringObj = JSON.parse(stringified);
console.log(stringObj);