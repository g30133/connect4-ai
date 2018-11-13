import * as React from 'react';
import './Cell.css';

interface CellProps {
    value:string
    colIx:number
    rowIx:number
}

class Cell extends React.Component<CellProps> {
    public render() {
        let className = 'cell'
        if(this.props.value === 'X') {
            className += ' black'
        } else if(this.props.value === 'O') {
            className += ' white'
        }
        return (
            <div className={className}/>
        )
    }
}


export default Cell;