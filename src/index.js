// const sayHello = () => {
//     console.log('hello');
// };
// sayHello();

const $ = require('jquery');
// const pokemon = require('pokemon');
// const pokemonGif = require('pokemon-gif');
// const randomPoke = pokemon.random();
// console.log(randomPoke);
// const randomGif = pokemonGif(randomPoke);
// $('#poke').html('<img src="'+randomGif+'">');

// const hi = require('./say-hello.js');
// import hi from './say-hello.js';
import {hello, add, subtract, multiply, divide} from "./say-hello";

// console.log(hi.hello());

// console.log(hi.multiply(37,620));

console.log(hello());
console.log(divide(340, 50));
console.log(multiply(123,7560));
console.log(add(3564.12, 756.091));