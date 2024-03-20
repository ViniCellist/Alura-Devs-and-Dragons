export class Character {
    name;
    health;
    magic;
    level;
    job;
    description;

    constructor(name, level, job, health, magic) {
        this.name = name;
        this.level = level;
        this.job = job;
        this.health = health;
        this.magic = magic;
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