import { Character } from "./character.js";
import { Archer } from "./Archer.js";
import { Mage } from "./Mage.js";

export class ArcaneArcher extends Character {
    sideA;
    sideM;
    static job = "ArcaneArcher";
    static description = "Detentor de lanças e flechas mágicas!";

    constructor(name, dextery, agility, element, powerLevel, intelligence) {
        super(name)
        this.sideA = new Archer(name, dextery, agility);
        this.sideM = new Mage(name, element, powerLevel, intelligence);
    };

    obtainBadge() {
        return `${this.sideA.obtainBadge()} and ${this.sideM.obtainBadge()}`
    };
};