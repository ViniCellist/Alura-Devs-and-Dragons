import { Character } from "./modules/character.js";

const vinicius = new Character();
vinicius.name = 'Vinicius';
vinicius.health = 13;
vinicius.magic = 7;
vinicius.level = 1;
vinicius.job = 'Archer';
vinicius.type = 'Neutral';
vinicius.description = 'A young archer seeking to become one of the best!';

console.log(vinicius);