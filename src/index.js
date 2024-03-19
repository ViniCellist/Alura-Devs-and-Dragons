import { Character } from "./modules/character.js";

const vinicius = new Character();
vinicius.name = 'Vinicius';
vinicius.health = 13;
vinicius.magic = 7;
vinicius.level = 1;
vinicius.job = 'Archer';
vinicius.type = 'Wind';

const gabriel = new Character();
gabriel.name = 'Gabriel';
gabriel.health = 17;
gabriel.magic = 5;
gabriel.level = 1;
gabriel.job = 'Thief';
gabriel.type = 'Dark';

console.log('Insignia de ' + vinicius.name + ': ' + vinicius.obtainBadge());
console.log('Insignia de ' + gabriel.name + ': ' + gabriel.obtainBadge());