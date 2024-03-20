import { Character } from "./modules/character.js";
import { CharacterView } from './components/personagem-view.js';
import { Mage } from "./modules/Mage.js";
import { Archer } from "./modules/Archer.js";
import { ArcaneArcher } from "./modules/ArcaneArcher.js";

const vinicius = new Archer('Vinicius', 7, 15, 5, 20, 7)
const gabriel = new Mage('Gabriel', 5, 12, 17, 'Water', 12, 9);
const fulano = new ArcaneArcher('Fulano', 13, 25, 30, 21, 13, 'Dark', 26, 17);

const chars = [vinicius, gabriel, fulano];

new CharacterView(chars).render();