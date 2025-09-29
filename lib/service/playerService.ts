import { Hero } from "@/game/entities/hero";
import { PlayerRepository } from "../repository/playerRepository"; 

export class PlayerService {
    private playerRepository: PlayerRepository;

    constructor() {
        this.playerRepository = new PlayerRepository();
    }

    async loadHero(id: number): Promise<Hero> {
        const playerData = await this.playerRepository.getPlayerById(id);
        if (!playerData) {
            throw new Error("Player not found");
        }

        return new Hero(
            playerData.id,
            playerData.name,
            "Player", "Warrior", 20,
            playerData.stats,
            { items: [] } 
        );
    }

    async saveHeroProgress(hero: Hero): Promise<void> {
        await this.playerRepository.updatePlayer(hero.id, {
            level: hero.level,
            experience: hero.experience,
            stats: hero.stats,
        });
        console.log("Hero progress saved.");
    }
}