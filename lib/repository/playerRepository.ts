import { supabase } from "../supabaseClient";
import { EntityStats } from "@/game/entities/entity";

export interface PlayerData {
    id: number;
    name: string;
    level: number;
    experience: number;
    stats: EntityStats;
}

export class PlayerRepository {
    async getPlayerById(id: number): Promise<PlayerData | null> {
        const { data, error } = await supabase
            .from('players')
            .select('*')
            .eq('id', id)
            .single();

        if (error) {
            console.error("Error fetching player:", error);
            throw new Error("Could not fetch player data");
        }

        return data;
    }

    async updatePlayer(id: number, updates: Partial<PlayerData>): Promise<void> {
        const { error } = await supabase
            .from('players')
            .update(updates)
            .eq('id', id);

        if (error) {
            console.error("Error updating player:", error);
            throw new Error("Could not update player data");
        }
    }
}