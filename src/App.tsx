import * as React from 'react';
import './App.css';

import Board from './Board'
import Message from './Message'
import Util from './Util'

import Worker from 'worker-loader!./ai.worker'

interface AppState {
  board: string[][]
  xTurn: boolean
  winner: string
  progress: number
}

class App extends React.Component<any, AppState> {

  private worker:any

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
      winner: '',
      progress: 0
    }

    this.initWorker()
  }

  private initWorker() {
    this.worker = new Worker();

    //this.worker.postMessage({ board:, depth: });

    //this.worker.onmessage = (event:any) => {
    //  console.log('onmessage from worker', event);
    //};
    
    this.worker.addEventListener('message', (event:any) => {
      // console.log('data from worker:', event.data);
      // console.log('event.data.colIx:' + event.data.colIx)
      if (event.data.colIx !== undefined) {
        // console.log('inside if block!!')
        // console.log('event data', event.data)
        const aiColumn = event.data.colIx

        this.setState((prevState) => {
          const newBoard = Util.deepcopyBoard(prevState.board)
  
          for(let rowIx = 0; rowIx < newBoard[aiColumn].length; rowIx++) {
            if(newBoard[aiColumn][rowIx] === '') {
              newBoard[aiColumn][rowIx] = 'O'
              break
            }
          }

          const winner = Util.checkForWinner(newBoard)
  
          return {
            board: newBoard,
            xTurn: true,
            winner: winner
          }
        })
      }
      
      if (event.data.progress !== undefined) {
        // const progressBar:HTMLProgressElement|null = document.querySelector('.aiprogress')
        // progressBar.value = event.data.progress
        // if (progressBar) {
        // }
        // console.log('xTurn:' + this.state.xTurn)
        this.setState({
          progress: event.data.progress,
          // xTurn: true
        })
      }
    });
  }

  private onColumnClicked(colIx:number) {
//    console.log('onColumnClicked(' + colIx + ')')
    // console.log('this.state.xTurn:' + this.state.xTurn)
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

      // Util.dumpBoard(newBoard, 6, 7)

      return {
        board: newBoard,
        xTurn: false
      }
    },
    () => {
      // console.log('aiMove')
      // Util.dumpBoard(this.state.board, 6, 7)

      if(this.state.winner == '') {
//        this.checkGameOver()
        const winner = Util.checkForWinner(this.state.board)
        // console.log('winner:' + winner)
        if(winner == '') {
          if(this.state.xTurn == false) {
            let aiDepth = -1
  
            // const depthSelect = document.getElementById('.depthselect')
            // console.log(depthSelect.)
            const depthSelect:HTMLSelectElement|null = document.querySelector('.depthselect')
            if (depthSelect) {
              // console.log(depthSelect)
              const difficulty = depthSelect.options[depthSelect.selectedIndex].text
              if(difficulty == 'expert') {
                aiDepth = 10
              } else if(difficulty == 'hard') {
                aiDepth = 8
              } else if(difficulty == 'easy') {
                aiDepth = 6
              } else if(difficulty == 'noob') {
                aiDepth = 4
              } else if(difficulty == 'beginner') {
                aiDepth = 2
              }
            }
  
            //const aiColumn = Util.aiMove(newBoard, aiDepth, 'O')
            this.worker.postMessage({board:this.state.board, depth:aiDepth, aiMark:'O'})
          }            
        } else {
          this.setState({
            winner: winner
          })
        }
      }  
    })
  }

  // private checkGameOver() {
  //   const winner = Util.checkForWinner(this.state.board)
  //   // console.log('winner:' + winner)
  //   if (winner != '') {
  //     this.setState({
  //         winner: winner
  //     })
  //   }
  // }

  public render() {
    // console.log('render()')
    // Util.dumpBoard(this.state.board, 6, 7)
    return (
      <div className="app">
        <label className='aititle'>Ai Thinking...</label>
        <progress className='aiprogress'
                  max="100" value={this.state.progress}>
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
          <option value='beginner'>beginner</option>

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
