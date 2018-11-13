import * as React from 'react';
import './Column.css';

import Cell from './Cell'

interface ColumnProps {
    colIndex:number
    column: string[]
    onColumnClicked: (colIx:number) => void
}

class Column extends React.Component<ColumnProps> {

    constructor(props:ColumnProps) {
        super(props)

        this.onColumnClicked = this.onColumnClicked.bind(this)
    }

    public render() {
        const cells = []
        for(let rowIndex = 0; rowIndex < this.props.column.length; rowIndex++) {
            cells.push(
                <Cell
                    key={rowIndex * 7 + this.props.colIndex}
                    value={this.props.column[rowIndex]}
                    rowIx={rowIndex}
                    colIx={this.props.colIndex}/>
            )
        }
        return (
            <div className='column' onClick={this.onColumnClicked}>{cells}</div>
        )
    }

    private onColumnClicked() {
        this.props.onColumnClicked(this.props.colIndex)
    }

}
export default Column
