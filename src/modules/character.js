export class Character {
    name;
    health;
    magic;
    level;
    job;
    type;

    obtainBadge() {
        if (this.level >= 5) {
            return `Legendary ${this.type}`;
        }
        return `${this.type} Rookie`;
    };
};