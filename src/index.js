import { Character } from "./modules/character.js";
import { CharacterView } from './components/personagem-view.js';
import { Mage } from "./modules/Mage.js";

const mageVinivius = new Mage('Vinicius', 4, 10, 11, 'Fire', 11, 8)
const mageGabriel = new Mage('Gabriel', 5, 12, 17, 'Water', 12, 9);

const chars = [mageVinivius, mageGabriel];

new CharacterView(chars).render();


console.log(mageGabriel)