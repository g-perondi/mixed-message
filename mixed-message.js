// Future predicting bot

// Declaring arrays from which to pull random elements of the sentence
const comp1 = ['You','Someone you love','Someone you hate'];
const comp2 = ['will','won\'t'];
const comp3 = ['be','end up'];
const comp4 = ['married','famous','rich'];

// Declaring a function to randomize values
const randomizeComponent = arr => arr[Math.floor(Math.random() * arr.length)];

// Declaring a function to generate the message
const generateMessage = () => {
let sentence = [];
sentence.push(randomizeComponent(comp1));
sentence.push(randomizeComponent(comp2));
sentence.push(randomizeComponent(comp3));
sentence.push(randomizeComponent(comp4));
console.log(sentence.join(' '));
}

// Running the script
generateMessage()

