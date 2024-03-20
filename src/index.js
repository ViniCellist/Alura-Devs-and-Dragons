import { Character } from "./modules/character.js";
import { CharacterView } from './components/personagem-view.js';

const vinicius = new Character("Vinicius", 12, 5, 1, "Archer", "Wind");

const personagem = [vinicius]
new CharacterView(personagem).render()