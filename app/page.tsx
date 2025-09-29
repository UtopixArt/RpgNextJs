'use client';

import HeroCard from "@/composant/EntityCard";
import { useGameEngine } from "@/hooks/useGameEngine";

export default function Home() {
  const { hero, monster, handleAttack } = useGameEngine();
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-gray-800 text-white">
      <h1 className="text-5xl font-bold mb-12">RPG Battle</h1>

      <div className="flex gap-12">
       <HeroCard entity={hero!} />
       <HeroCard entity={monster} />
      </div>
      <div className="mt-8">
      <button 
          onClick={handleAttack} 
          disabled={!monster.isAlive()}
          className="bg-green-500 hover:bg-green-700 disabled:bg-gray-500 text-white font-bold py-2 px-4 rounded text-xl"
        >
          {monster.isAlive() ? 'Attaquer !' : 'Vaincu'}
        </button>
      </div>
    </main>
  );
}
