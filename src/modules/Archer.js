import { Character } from "./character.js";

export class Archer extends Character {
    static job = "Archer";
    static description = "Você tem o meu arco!"
    dextery;
    agility;

    constructor(name, dextery, agility) {
        super(name);
        this.dextery = dextery;
        this.agility = agility;
    };

    obtainBadge() {
        if(this.dextery > this.agility) {
            return `Marksman`;
        } else if(this.dextery < this.agility) {
            return `Windwalker`;
        } else {
            return `Hunter`;
        };
    };
};