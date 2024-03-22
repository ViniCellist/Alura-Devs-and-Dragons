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

    static verifyWinner(personagem1, personagem2) {
        if(personagem1.level === personagem2.level) {
            return `Empate`;
        };

        if(personagem1.level > personagem2.level) {
            return `${personagem1.constructor.job} ${personagem1.name} é o vencedor!`;
        };

        return `${personagem2.constructor.job} ${personagem2.name} é o vencedor!`;

        
    }
};

/*
Jobs:
Mage
Archer
Warrior
ArcaneArcher
*/