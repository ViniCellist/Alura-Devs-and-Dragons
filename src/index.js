import { Character } from "./modules/character.js";
import { CharacterView } from './components/personagem-view.js';
import { Mage } from "./modules/Mage.js";

const vinicius = new Character("Vinicius", 1, "Archer", 10, 5);
const gabriel = new Character("Gabriel", 1, "Mage", 8, 12);

const chars = [vinicius, gabriel];

new CharacterView(chars).render();

console.log(new Mage('Fire', 21, 7));