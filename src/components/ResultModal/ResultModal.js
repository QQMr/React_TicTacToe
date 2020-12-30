import './ResultModal.css';
import classNames from "classnames"
import logo from '../../asset/pika.gif'

export function ResultModal(props) {

   const resultModalClasses = classNames({
       'modal-open' : props.gameOver
   })

   const message = props.winner? `Winner is ${props.winner}` : 'It is a tie.';
    return (
        <div id="modal-overlay" className={resultModalClasses}>
            <div id="game-result-modal">
                <div id="result-container">
                    <div id="winner-container">
                        <span>{message}</span>
                    </div>
                </div>
                <div id="image-container">              
                    <img id="image2-container" src={logo} alt="loading..." />
                </div>
                <div id="new-game-container">
                    <button id="new-game-button"
                        onClick = { props.newGameClick }
                    >    
                        Start New Game
                    </button>
                </div>
            </div>
        </div>
    );
  }
  