export class Character {
    name;
    hp;
    mp;
    level;

    constructor(name, level, hp, mp) {
        this.name = name;
        this.level = level;
        this.hp = hp;
        this.mp = mp; 
    }

    obtainBadge() {
        if (this.level >= 5) {
            return `Legendary ${this.constructor.job}`;
        }
        return `${this.constructor.job} Rookie`;
    };
};

/*
Jobs:
Mage
Archer
Warrior
ArcaneArcher
*/