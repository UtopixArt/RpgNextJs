import { Entity } from "./entity";

export class Hero extends Entity {
    level: number = 0;
    experience: number = 0;

    speak(message: string): void {
        console.log(`${this.name} says: ${message}`);
    };

    attack(target: Entity): void {
        this.speak(`attacks ${target.name}!`);
        target.takeDamage(this.stats.health / 4);
    };

    takeDamage(amount: number): void {
       this.stats.health -= amount;
       this.isAlive() ?      
       this.speak(`has ${this.stats.health} health left.`) : 
       this.speak(`has been defeated!`);
    };

    heal(amount: number): void {
        this.stats.health += amount;
        this.speak(`heals for ${amount}. Current health: ${this.stats.health}`);
    }

    useMana(amount: number): boolean {
        throw new Error("Method not implemented.");
    };

    restoreMana(amount: number): void {
        throw new Error("Method not implemented.");
    };

    getStatus(): string {
         this.speak(`Health: ${this.stats.health}, Mana: ${this.stats.mana}`);
         return `Health: ${this.stats.health}, Mana: ${this.stats.mana}`;
    };
}