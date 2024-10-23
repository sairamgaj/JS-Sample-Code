const person = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function() {
        console.log('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 80
    }
};

console.log(typeof person);  // object

// accessing the object value
console.log(person.name);

console.log(person.hobbies[0]);

person.greet();

console.log(person.score["maths"]);

console.log(person.score.maths);

console.log(person["score.maths"]);

console.log(person["score"].maths);

console.log(Object.entries(person.score)[0][1])

console.log(Object.entries(person.score)["maths"])

console.log(person["score"]["maths"])
