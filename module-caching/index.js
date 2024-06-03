const SuperHero = require("./superhero")

// const superheroBatman =  superHero.getName();
// console.log(superheroBatman);
// superHero.setName('wonder woman');
// console.log(superHero.getName());

// const newSuperHero = require("./superhero")
// console.log(superHero.getName());
//the result would be wonder woman because wonder woman hs been cached, which is a fancy way of remembering

 
const batman =  new SuperHero("Batman")
console.log(batman.getName())
batman.setName('Bruce Wayne')
console.log(batman.getName())

const newSuperHero =  new SuperHero("Wonder Woman")
console.log(newSuperHero.getName())
