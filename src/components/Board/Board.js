import './Board.css';
import {Cell} from "../Cell/Cell"

export function Board(props) {

    const cellClicked = (cellIndex) => {
        console.log(`log ${cellIndex} click`);
    }

    const cellValues = props.cellValues;
    const winningComnibation = props.winningComnibation;
    const cells = cellValues.map( (value,index) => {
        const canHighlight = winningComnibation && 
                            winningComnibation.indexOf(index) >= 0;
        return <Cell 
                    key={index} 
                    value={value} 
                    canHighlight={canHighlight}
                    cellClicked ={ ()=>{props.cellClicked(index)} }
                />
    });

    return (
            <div id="board">
                {cells }
            </div>
       
    );
  }
  