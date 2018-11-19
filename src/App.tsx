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
    console.log('this.state.xTurn:' + this.state.xTurn)
    if(this.state.winner === '' && this.state.xTurn === true) {
//      this.addToColumn(colIx, this.state.xTurn ? 'X' : 'O')
//      if (this.state.xTurn) {
  
      if (Util.isValidMove(this.state.board[colIx])) {
        this.humanAddToColumn(colIx, 'X')
      }
    }
  }


  private humanAddToColumn(colIx:number, mark:string) {
    // console.log('humanAddToColumn')
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
    )
  }

  public componentDidUpdate() {
    // console.log('componentDidUpdate')
    Util.dumpBoard(this.state.board, 6, 7)


    setTimeout(() => {
      if(this.state.winner == '') {
        this.checkGameOver()
        if(this.state.xTurn == false) {
          this.setState((prevState) => {
            let aiDepth = -1
 
            // const depthSelect = document.getElementById('.depthselect')
            // console.log(depthSelect.)
            const depthSelect:HTMLSelectElement|null = document.querySelector('.depthselect')
            if (depthSelect) {
              console.log(depthSelect)
              const difficulty = depthSelect.options[depthSelect.selectedIndex].text
              if(difficulty == 'expert') {
                aiDepth = 8
              } else if(difficulty == 'hard') {
                aiDepth = 6
              } else if(difficulty == 'easy') {
                aiDepth = 4
              } else if(difficulty == 'noob') {
                aiDepth = 2
              }
            }

            const newBoard = Util.deepcopyBoard(prevState.board)
            const aiColumn = Util.aiMove(newBoard, aiDepth, 'O')
            //const aiColumn = this.worker.postMessage({board:JSON.stringify(prevState.board), depth:aiDepth, aiMark:'O'})

            const progressBar:HTMLProgressElement|null = document.querySelector('.aiprogress')
            if (progressBar) {
                progressBar.value = 0
            }
            
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
      }  
    }, 100)
  }

  private checkGameOver() {
    const winner = Util.checkForWinner(this.state.board)
    // console.log('winner:' + winner)
    if(winner != '') {
      this.setState(() => {
        return {
          winner: winner
        }
      })
    }
  }

  public render() {
    // console.log('render()')
    Util.dumpBoard(this.state.board, 6, 7)
    return (
      <div className="app">
        <label className='aititle'>Ai Thinking...</label>
        <progress className='aiprogress'
                  max="100" value="0">
          70
        </progress>
        <Board
          columns={this.state.board}
          onColumnClicked={this.onColumnClicked}
        />
        
        <select className='depthselect'>
          <option value='expert'>expert</option>
          <option value='hard'>hard</option>
          <option value='easy'>easy</option>
          <option value='noob'>noob</option>

        </select>

        <Message
          xTurn={this.state.xTurn}
          winner={this.state.winner}
        />
      </div>
    );
  }

}

export default App;
