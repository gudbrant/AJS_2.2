//В модуле game импорт класса Character

//Экспорт класса Game в качестве дефолтного,
//класса GameSavingData
//и функций readGameSaving и writeGameSaving

class Game {
    start() {
        console.log('game started');
    }
}

export class GameSavingData {
}

export function readGameSaving() {
}

export function writeGameSaving() {
}

import Character from "./domain.js";

export default Game;


