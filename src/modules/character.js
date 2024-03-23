export class Character {
    name;
    hp;
    mp;
    #level;

    constructor(name) {
        this.name = name;
        this.#level = 1;
        this.hp = 5;
        this.mp = 5; 
    }

    aumentarLevel() {
        this.level += 1;
    };

    diminuirLevel() {
        this.level -= 1;
    };

    obtainBadge() {
        if (this.#level >= 5) {
            return `Legendary ${this.constructor.job}`;
        }
        return `${this.constructor.job} Rookie`;
    };

    get level() {
        return this.#level;
    };

    set level(newLevel) {
        if (newLevel >= 1 && newLevel <= 10) {
            this.#level = newLevel;
        };
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