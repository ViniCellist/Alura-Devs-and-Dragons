import { Character } from "./modules/character.js";
import { CharacterView } from './components/personagem-view.js';
import { Mage } from "./modules/Mage.js";
import { Archer } from "./modules/Archer.js";
import { ArcaneArcher } from "./modules/ArcaneArcher.js";
import { Warrior } from "./modules/Warrior.js";

const p1 = new Archer('Apollo', 12, 15, 5, 20, 7);
const p2 = new Mage('Magnus', 10, 12, 17, 'Water', 12, 9);
const p3 = new ArcaneArcher('Finrod', 13, 25, 30, 21, 13, 'Dark', 26, 17);
const p4 = new Warrior('Alfarr', 12, 37, 12, 20, 21);

const chars = [p1, p2, p3, p4];

new CharacterView(chars).render();

console.log(Character.verifyWinner(p1, p2))