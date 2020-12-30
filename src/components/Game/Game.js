import './Game.css';
import {Board} from "../Board/Board"
import { useState } from 'react';
import { Cell } from '../Cell/Cell';
import { ResultModal } from '../ResultModal/ResultModal'
import {calculateWinner} from '../../utils/calculateWinner'

const PLAYER = Object.freeze({"X_PLAYER":1, "O_PLAYER":2})



export function Game() {

    const [cellValues, setCellValues] = useState(['','','','','','','','','']);
    const [player, setPlayer] = useState(PLAYER.X_PLAYER)
    const [isGameOver, setIsGameOver] = useState(false)
    const [winner, setWinner] = useState()
    const [winnerCombination, setWinnerCombination] = useState()

    console.log("Render Game");
    const cellClicked = (cellIndex) => {

        let newCellValues =  Array.from(cellValues);

        if( newCellValues[cellIndex] !== '' ) //Prevent overwriting cell
            return;

        newCellValues[cellIndex]= (player===PLAYER.X_PLAYER)?'X':'O';
        
        //Calculate the result
        const calcResult = calculateWinner(newCellValues,cellIndex)

        setCellValues(newCellValues)
        setPlayer((player===PLAYER.X_PLAYER)?PLAYER.O_PLAYER:PLAYER.X_PLAYER)
        setIsGameOver(calcResult.hasResult)
        setWinner(calcResult.winner)
        setWinnerCombination(calcResult.winningComnibation)

    }

    const newGameClick = () => {
        setCellValues(['','','','','','','','',''])
        setPlayer(PLAYER.X_PLAYER)
        setIsGameOver(false)
        setWinner()
        setWinnerCombination()
    } 
    
    return (
      <>
          <div id="game">
            <h1>Tic Tac Toe</h1>
           <Board 
            cellValues={cellValues}
            winningComnibation={winnerCombination}
            cellClicked={cellClicked}
            />
        </div>
  
        <ResultModal 
          gameOver = {isGameOver}
          winner= {winner}
          newGameClick = {newGameClick}
        />
      </>
    );
  }
  