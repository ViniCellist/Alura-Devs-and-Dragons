export class Character {
    name;
    health;
    magic;
    level;
    job;
    type;

    constructor(name, level, type) {
        this.name = name;
        this.level = level;
        this.type = type;
    }

    obtainBadge() {
        if (this.level >= 5) {
            return `Legendary ${this.type}`;
        }
        return `${this.type} Rookie`;
    };
};

/*
Jobs:
Mage
Archer
Warrior
ArcaneArcher
*/