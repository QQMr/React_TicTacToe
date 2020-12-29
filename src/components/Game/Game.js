import './Game.css';
import {Board} from "../Board/Board"
import { useState } from 'react';
import { Cell } from '../Cell/Cell';

const PLAYER = Object.freeze({"X_PLAYER":1, "O_PLAYER":2})

export function Game() {

    const [cellValues, setCellValues] = useState(['','','','','','','','','']);
    const [player, setPlayer] = useState(PLAYER.X_PLAYER)
    const winningComnibation = [];

    console.log("Render Game");
    const cellClicked = (cellIndex) => {

        let cellValuesTmp =  Array.from(cellValues);

        if( cellValuesTmp[cellIndex] !== '' )
            return;

        cellValuesTmp[cellIndex]= (player===PLAYER.X_PLAYER)?'X':'O';

        setCellValues(cellValuesTmp)
        setPlayer((player===PLAYER.X_PLAYER)?PLAYER.O_PLAYER:PLAYER.X_PLAYER)

    }

    return (
      <>
          <div id="game">
            <h1>Tic Tac Toe</h1>
           <Board 
            cellValues={cellValues}
            winningComnibation={winningComnibation}
            cellClicked={cellClicked}
            />
        </div>
  
        <div id="modal-overlay">
            <div id="game-result-modal">
                <div id="result-container">
                    <div id="winner-container">
                        <span></span>
                    </div>
                </div>
                <div id="new-game-container">
                    <button id="new-game-button">Start New Game</button>
                </div>
            </div>
        </div>
      </>
    );
  }
  