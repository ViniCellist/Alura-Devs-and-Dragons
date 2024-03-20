export class Character {
    name;
    health;
    magic;
    level;
    job;
    type;

    constructor(name, health, magic, level, job, type) {
        this.name = name;
        this.health = health;
        this.magic = magic;
        this.level = level;
        this.job = job
        this.type = type;
    }

    obtainBadge() {
        if (this.level >= 5) {
            return `Legendary ${this.type}`;
        }
        return `${this.type} Rookie`;
    };
};