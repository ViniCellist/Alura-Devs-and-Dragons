import { Character } from "./character.js";

export class Mage extends Character{
    element;
    intelligence;
    powerLevel;
    job = 'Mage';

    constructor(name, level, hp, mp, element, intelligence, powerLevel) {
        super(name, level, hp, mp)
        this.element = element;
        this.intelligence = intelligence;
        this.powerLevel = powerLevel;
    };
};

/*
Elements: Fire, Water, Ground, Wind. Special: Dark, Light, Nature

Habilidades{
    fire {
        offensive: FireBall,
        defensive: FireWall,
        special: Eruption,
        passive: Fire Immunity
    },
    water {
        offensive: Water,
        defensive: WaterWall,
        special: Tsunami,
        passive: Waterbreathing
    },
    ground {
        offensive: Spikes,
        defensive: StoneWall,
        special: Fissure,
        passive: Never Lost
    },
    lightning {
        offensive: Thunderbolt,
        defensive: ThunderCloak,
        special: Storm,
        passive: Tracker
    },
    dark {
        offensive: Soul Absorb,
        defensive: 4th Dimension,
        special: Blackhole,
        passive: Night Vision
    },
    light {
        offensive: Judgement,
        defensive: Holy Protection,
        special: Punishment,
        passive: Magic Resistence
    },
    nature {
        offensive: Whip Prison,
        defensive: Forest Clone,
        special: Life's cycle,
        passive: Animal's friend
    }
}

*/