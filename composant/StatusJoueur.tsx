import { EntityStats } from "@/game/entities/entity";

function StatusAffichage(props: EntityStats) {
    return (
        <div>
       <div className="bg-gray-500 text-white p-2 rounded-lg border-black mb-2">
            <h2 className="text-2xl font-bold mb-2">Status</h2>
        </div>
        <div className="bg-green-400 text-white p-2 rounded-lg mb-1">  
            <h3 className="text-sm mb-1">Health: {props.health} / {props.maxHealth}</h3>
        </div>
        <div className="bg-blue-400 text-white p-2 rounded-lg">
            <h3 className="text-sm">Mana: {props.mana} / {props.maxMana}</h3>
        </div>
        </div>
    );
}

export default StatusAffichage;