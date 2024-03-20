import { Character } from "./modules/character.js";
import { CharacterView } from './components/personagem-view.js';

const vinicius = new Character("Vinicius", 1, "Archer");
const gabriel = new Character("Gabriel", 1, "Mage");

const chars = [vinicius, gabriel];

new CharacterView(chars).render();