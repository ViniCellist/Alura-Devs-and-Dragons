import { Character } from "./character.js";
import { Archer } from "./Archer.js";
import { Mage } from "./Mage.js";

export class ArcaneArcher extends Character {
    sideA;
    sideM;
    static job = "ArcaneArcher";
    static description = "Detentor de lanças e flechas mágicas!";

    constructor(name, level, hp, mp, dextery, agility, element, powerLevel, intelligence) {
        super(name, level, hp, mp)
        this.sideA = new Archer(name, level, dextery, agility);
        this.sideM = new Mage(name, level, element, powerLevel, intelligence);
    };

    obtainBadge() {
        return `${this.sideA.obtainBadge()} and ${this.sideM.obtainBadge()}`
    };
};