'use client'

import { useReducer, useState } from "react";
import { Hero } from "@/lib/entities/hero";
import { Monster } from "@/lib/entities/monster";

export function useGameEngine() {
    const [hero, setHero] = useState(() => new Hero(
        1, "Arthas", "Player", "Warrior", 20,
        { health: 100, maxHealth: 100, mana: 50, maxMana: 50 },
        { items: ["Sword", "Shield"] }
      ));
    
    const [monster, setMonster] = useState(() => new Monster(
        2, "Goblin", "Monster", "Rogue", 10,
        { health: 50, maxHealth: 50, mana: 20, maxMana: 20 },
        { items: ["Dagger"] }
    ));
    
      const [, forceUpdate] = useReducer(x => x + 1, 0);
    
    const handleAttack = () => {
        hero.attack(monster);

        if (monster.isAlive()) {
            monster.attack(hero);
        }else{
            alert(`${monster.name} has been defeated!`);
        }
        forceUpdate();
    };

    return {
        hero,
        monster,
        handleAttack
    };
}
    