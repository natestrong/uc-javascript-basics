import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

const condition = true;

if (condition) {
    console.log('yes');
}

const num = 99..toFixed();

console.log(num);

function makeCarPrice() {
    console.log(arguments);
}

makeCarPrice(1, 2, 3, 45);

const drink = {
    id: 'xyz',
    getDrinkDetails() {
        return `Drink_${this.id}`;
    },
    100: 'cool'
};

console.log(drink.getDrinkDetails());

console.log(drink["100"]);

function f(first, ...args) {
    console.log(first, args);
}

f('Hi', 'Hello', 'Cool', 'Awesome', 100);


const cat = {
    name: 'Oliver',
    id: 420,
    style: 'cool af'
};

const {name, ...rest} = cat;

console.log(name, rest);

console.log('-----------');

const cat2 = {
    name: 'Oliver',
    jumpHeight: 3
};

const cat2Withid = Object.create(cat2);
cat2Withid.job = 'security cat'

console.log(cat2);
console.log(cat2Withid);

cat2.name = 'Maxwell'

console.log(Object.keys(cat2Withid))
