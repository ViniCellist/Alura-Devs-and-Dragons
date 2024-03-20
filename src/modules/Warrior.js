import { Character } from "./character.js";

export class Warrior extends Character {
    job = "Warrior";
    strengh;
    defense;

    constructor(name, level, hp, mp, strengh, defense) {
        super(name, level, hp, mp);
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