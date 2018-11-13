import * as React from 'react';
import './App.css';

import Board from './Board'
import Message from './Message'
import Util from './Util'

interface AppState {
  board: string[][]
  xTurn: boolean
  winner: string
}

class App extends React.Component<any, AppState> {

  constructor(props:any) {
    super(props)
    this.onColumnClicked = this.onColumnClicked.bind(this)
    this.state = {
      // this way facing up ----->>
      board: [
        ['','','','','',''],
        ['','','','','',''],
        ['','','','','',''],
        ['','','','','',''],
        ['','','','','',''],
        ['','','','','',''],
        ['','','','','','']],
      xTurn: true,
      winner: ''
    }
  }

  private onColumnClicked(colIx:number) {
//    console.log('onColumnClicked(' + colIx + ')')
    if(this.state.winner === '' && this.state.xTurn === true) {
//      this.addToColumn(colIx, this.state.xTurn ? 'X' : 'O')
//      if (this.state.xTurn) {
  
      if (Util.isValidMove(this.state.board[colIx])) {
        this.humanAddToColumn(colIx, 'X')
      }
    }
  }


  private humanAddToColumn(colIx:number, mark:string) {
    console.log('humanAddToColumn')
    this.setState((prevState) => {
      //const newBoard = Array.from(prevState.board)
      const newBoard = Util.deepcopyBoard(prevState.board)
      for(let rowIx = 0; rowIx < newBoard[colIx].length; rowIx++) {
        if(newBoard[colIx][rowIx] === '') {
          newBoard[colIx][rowIx] = mark
          break
        }
      }

      Util.dumpBoard(newBoard, 6, 7)

      return {
        board: newBoard,
        xTurn: false
      }
    }
    // , () => {
    //   console.log('ai turn')
    //   if(this.state.winner == '') {
    //     this.setState((prevState) => {
    //       const newBoard = Array.from(prevState.board)
    //       const aiColumn = Util.aiMove(newBoard, 'O')
          
    //       for(let rowIx = 0; rowIx < newBoard[aiColumn].length; rowIx++) {
    //         if(newBoard[aiColumn][rowIx] === '') {
    //           newBoard[aiColumn][rowIx] = 'O'
    //           break
    //         }
    //       }

    //       return {
    //         board: newBoard
    //       }
    //     })
    //   }
    // }
    )
  }

  public componentDidUpdate() {
    console.log('componentDidUpdate')
    Util.dumpBoard(this.state.board, 6, 7)
    setTimeout(() => {
      if(this.state.winner == '' && this.state.xTurn == false) {
        this.setState((prevState) => {
          const newBoard = Array.from(prevState.board)
          const aiColumn = Util.aiMove(newBoard, 'O')
          
          for(let rowIx = 0; rowIx < newBoard[aiColumn].length; rowIx++) {
            if(newBoard[aiColumn][rowIx] === '') {
              newBoard[aiColumn][rowIx] = 'O'
              break
            }
          }
  
          return {
            board: newBoard,
            xTurn: true,
          }
        })
      }  
    }, 100)
  }

  // private checkGameOver() {
  //   const winner = Util.checkForWinner(this.state.board)
  //   this.setState(() => {
  //     return {
  //       winner: winner
  //     }
  //   })
  // }

  public render() {
    console.log('render()')
    Util.dumpBoard(this.state.board, 6, 7)
    return (
      <div className="app">
        <Board
          columns={this.state.board}
          onColumnClicked={this.onColumnClicked}
        />
        <Message
          xTurn={this.state.xTurn}
          winner={this.state.winner}
        />
      </div>
    );
  }

}

export default App;
