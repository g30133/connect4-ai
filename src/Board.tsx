import * as React from 'react';
import './Board.css';

import Column from './Column'

interface BoardProps {
  columns: string[][]
  onColumnClicked: (colIx:number) => void
}

class Board extends React.Component<BoardProps> {
    public render() {
      const columns = []

      for(let columnIndex = 0; columnIndex < this.props.columns.length; columnIndex++) {
        columns.push(
          <Column
            key={columnIndex}
            colIndex={columnIndex}
            column={this.props.columns[columnIndex]}
            onColumnClicked={this.props.onColumnClicked}
          />
        )
      }

      return (
        <div className='board'>
            {columns}
        </div>
      )
    }
}

export default Board;