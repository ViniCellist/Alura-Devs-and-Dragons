import { Character } from "./character.js";

export class Warrior extends Character {
    static job = "Warrior";
    static description = "Pela honra do Rei!";
    strengh;
    defense;

    constructor(name, strengh, defense) {
        super(name);
        this.strengh = strengh;
        this.defense = defense;
    };

    obtainBadge() {
        if(this.strengh > this.defense) {
            return `Lord`
        } else if(this.strengh < this.defense) {
            return `Paladin`
        } else {
            return `Crusader`
        };
    };
};