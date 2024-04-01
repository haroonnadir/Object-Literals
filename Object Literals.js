let person = {
    name: 'John',
    age: 30,
    gender: 'male',
    greet: function() {
        console.log('Hello, my name is ' + this.name);
    }
};

person.greet(); // Output: Hello, my name is John