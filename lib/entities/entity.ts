export type classType = 'Warrior' | 'Mage' | 'Rogue';
export type entityType = 'Player' | 'NPC' | 'Monster';

export interface Inventory {
    items: string[];
}

export abstract class Entity {
    readonly id: number;
    readonly name: string;
    readonly entityType: entityType;
    readonly classType: classType;
    readonly expReward: number;
    readonly stats: EntityStats;
    readonly inventory: Inventory;
    constructor(id: number, name: string, type: entityType, classType: classType, expReward: number, stats: EntityStats, inventory: Inventory) {    
        this.id = id;
        this.name = name;
        this.entityType = type;
        this.classType = classType;
        this.expReward = expReward;
        this.stats = stats;
        this.inventory = inventory;
    }
    abstract speak(message: string): void;
    abstract attack(target: Entity): void;
    isAlive(): boolean {
        return this.stats.health > 0;
    };
    abstract takeDamage(amount: number): void;
    abstract heal(amount: number): void;
    abstract useMana(amount: number): boolean;
    abstract restoreMana(amount: number): void;
    abstract getStatus(): string;
};

export interface EntityStats {
    health: number;
    readonly maxHealth: number;
    mana: number;
    readonly maxMana: number;
}

