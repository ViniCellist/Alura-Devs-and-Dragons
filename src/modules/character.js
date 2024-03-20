export class Character {
    name;
    hp;
    mp;
    level;
    description;

    constructor(name, level, hp, mp) {
        this.name = name;
        this.level = level;
        this.hp = hp;
        this.mp = mp;
    }

    obtainBadge() {
        if (this.level >= 5) {
            return `Legendary ${this.job}`;
        }
        return `${this.job} Rookie`;
    };
};

/*
Jobs:
Mage
Archer
Warrior
ArcaneArcher
*/