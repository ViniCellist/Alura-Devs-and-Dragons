import { Character } from "./character.js";

export class Archer extends Character {
    job = "Archer";
    dextery;
    agility;

    constructor(name, level, hp, mp, dextery, agility) {
        super(name, level, hp, mp);
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