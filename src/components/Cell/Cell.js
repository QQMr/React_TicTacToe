import './Cell.css';
import classNames from "classnames"

export function Cell(props) {
    const cellClasses = classNames({
        cell: true,
        winner: props.canHighlight
    })

    const cellContentClasses = classNames({
        'cell-content': true,
        populated: props.value
    })

    return (
            
            <button className={cellClasses}>
                <span className={cellContentClasses}>{props.value}</span>
            </button>
           
       
    );
  }
  