import { Hero } from "./entities/hero";
import { Monster } from "./entities/monster";
import { PlayerService } from "@/lib/service/playerService";

export class GameEngine {
    public hero: Hero | null = null;
    public monster: Monster;
    private playerService: PlayerService;

    constructor() {
        
        this.playerService = new PlayerService();
        this.monster = new Monster(
            2, "Goblin", "Monster", "Rogue", 10,
            { health: 50, maxHealth: 50, mana: 20, maxMana: 20 },
            { items: ["Dagger"] }
        );
    }

    async loadHero(): Promise<void> {
        this.hero = await this.playerService.loadHero(1);
    }

    async attackTurn(): Promise<void> {

       const isHeroLoaded = this.hero;
       if (!isHeroLoaded) throw new Error("Hero not loaded");

       const allEntitiesIsDead = !this.hero!.isAlive() || !this.monster.isAlive()
     
       if (allEntitiesIsDead) return;
       
       this.hero!.attack(this.monster);

       if (this.monster.isAlive()) {
           this.monster.attack(this.hero!);
       } else {
           alert(`${this.monster.name} has been defeated!`);
           await this.playerService.saveHeroProgress(this.hero!);
       }
    }
}