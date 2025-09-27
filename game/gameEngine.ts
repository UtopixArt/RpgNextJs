import { Hero } from "./entities/hero";
import { Monster } from "./entities/monster";

export class GameEngine {
    public hero: Hero;
    public monster: Monster;
    constructor() {
        this.hero = new Hero(
            1, "Arthas", "Player", "Warrior", 20,
            { health: 100, maxHealth: 100, mana: 50, maxMana: 50 },
            { items: ["Sword", "Shield"] }
        );

        this.monster = new Monster(
            2, "Goblin", "Monster", "Rogue", 10,
            { health: 50, maxHealth: 50, mana: 20, maxMana: 20 },
            { items: ["Dagger"] }
        );
    }
    public attackTurn(): void {
        this.hero.attack(this.monster);

        if (this.monster.isAlive()) {
            this.monster.attack(this.hero);
        } else {
            alert(`${this.monster.name} has been defeated!`);
        }
    }
}