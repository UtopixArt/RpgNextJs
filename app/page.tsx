'use client';
import { useState } from "react";

import HeroCard from "@/composant/EntityCard";
import { Hero } from "@/lib/entities/hero";
import { Monster } from "@/lib/entities/monster";

let hero = new Hero(
  1, // id
  "Arthas",
  "Player", // entityType
  "Warrior", // classType
  20,
  { health: 100, maxHealth: 100, mana: 50, maxMana: 50 }, // stats
  { items: ["Sword", "Shield"] } // inventory
);

let monster1 = new Monster(
  1, // id
  "Goblin",
  "Monster", // entityType
  "Rogue", // classType
  10,
  { health: 50, maxHealth: 50, mana: 20, maxMana: 20 }, // stats
  { items: ["Dagger"] } // inventory
);


export default function Home() {
  const [playerHealth, setPlayerHealth] = useState(hero.stats.health);
  const [monsterHealth, setMonsterHealth] = useState(monster1.stats.health);

  const handleAttack = () => {
    hero.attack(monster1);
    setMonsterHealth(monster1.stats.health);
    if (monster1.isAlive()) {
      monster1.attack(hero);
      setPlayerHealth(hero.stats.health);
    }else{
      alert(`${monster1.name} has been defeated!`);
    }

  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-gray-800 text-white">
      <h1 className="text-5xl font-bold mb-12">RPG Battle</h1>

      <div className="flex gap-12">
       <HeroCard entity={hero} />
       <HeroCard entity={monster1} />
      </div>
      <div className="mt-8">
      <button 
          onClick={handleAttack} 
          disabled={!monster1.isAlive()}
          className="bg-green-500 hover:bg-green-700 disabled:bg-gray-500 text-white font-bold py-2 px-4 rounded text-xl"
        >
          {monster1.isAlive() ? 'Attaquer !' : 'Vaincu'}
        </button>
      </div>
    </main>
  );
}
