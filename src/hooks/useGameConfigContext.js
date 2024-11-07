import { useContext } from "react";
import { GameConfigContext } from "../context";

export function useGameConfigContext() {
    const gameConfig = useContext(GameConfigContext);

    if(gameConfig === undefined) {
        throw new Error('useGameConfigContext must be used with GameConfigContext ')
    }

    return gameConfig;
}