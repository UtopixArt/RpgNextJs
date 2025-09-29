'use client'

import { useReducer, useState, useEffect } from "react";
import { GameEngine } from "@/game/gameEngine";

export function useGameEngine() {
    const [gameEngine] = useState(new GameEngine());
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    const handleAttack = () => {
        gameEngine.attackTurn();
        forceUpdate();
    };
    useEffect(() => {
        gameEngine.loadHero().then(() => forceUpdate());
    }, [gameEngine]);
    return {
        hero: gameEngine.hero,
        monster: gameEngine.monster,
        handleAttack
    };
}
    