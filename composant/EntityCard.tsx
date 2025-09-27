import { Entity } from "@/lib/entities/entity";
import StatusAffichage from "./StatusJoueur";

function HeroCard({ entity }: { entity: Entity }) {
    return (
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg border border-gray-700">
            <h2 className="text-2xl font-bold mb-2">{entity.name}</h2>
            <h3 className="text-lg mb-4">{entity.classType}</h3>
            <StatusAffichage 
                health={entity.stats.health} 
                mana={entity.stats.mana} 
                maxHealth={entity.stats.maxHealth} 
                maxMana={entity.stats.maxMana} 
            />
        </div>
    );
}

export default HeroCard;