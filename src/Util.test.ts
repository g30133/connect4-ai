import * as C from './constants'

import Util from './Util';

describe('util helper functions', () => {
    let board:string[][]
    beforeEach(() => {
        board = []
        for(let colIx = 0; colIx < C.BOARD_NUM_COLS; colIx++) {
            const column = []
            for(let rowIx = 0; rowIx < C.BOARD_NUM_ROWS; rowIx++) {
                column.push('')
            }
            board.push(column)
        }
        Util.dumpBoard(board, C.BOARD_NUM_ROWS, C.BOARD_NUM_COLS)
    })

    it('testing column checkForWinner', () => {
        board[1] = ['X', 'X', 'X', 'X', '', '']
        board[2] = ['O', 'X', 'O', 'X', '', '']
        board[3] = ['O', 'O', 'X', 'O', '', '']
        board[4] = ['O', 'X', 'O', 'X', '', '']
        console.log('testing checkForWinner...')
        expect(Util.checkForWinner(board)).toBe('X')
    })

    it('testing row checkForWinner', () => {
        board[0] = ['X', 'O', '', '', '', '']
        board[1] = ['X', '', '', '', '', '']
        board[2] = ['X', 'O', '', '', '', '']
        board[3] = ['X', 'O', '', '', '', '']
        expect(Util.checkForWinner(board)).toBe('X')
    })

    it('testing diagonal checkForWinner', () => {
        board[0] = ['X', 'O', 'X', '', '', '']
        board[1] = ['O', 'X', 'O', '', '', '']
        board[2] = ['X', 'O', 'X', '', '', '']
        board[3] = ['O', 'X', 'O', '', '', '']
        board[4] = ['X', 'O', 'X', '', '', '']
        board[5] = ['O', 'x', 'O', '', '', '']
        board[6] = ['X', 'O', 'X', '', '', '']
        expect(Util.checkForWinner(board)).toBe('')
    })

    it('testing diagonal checkForWinner', () => {
        board[0] = ['', '', '', '', '', '']
        board[1] = ['X', '', '', '', '', '']
        board[2] = ['O', 'X', '', '', '', '']
        board[3] = ['O', 'X', 'X', '', '', '']
        board[4] = ['O', 'X', 'O', 'X', '', '']
        board[5] = ['', '', '', '', '', '']
        board[6] = ['O', '', '', '', '', '']
        expect(Util.checkForWinner(board)).toBe('X')
    })

    it('testing diagonal checkForWinner', () => {
        board[0] = ['O', '', '', '', '', '']
        board[1] = ['', '', '', '', '', '']
        board[2] = ['O', 'X', 'O', 'X', '', '']
        board[3] = ['X', 'O', 'X', '', '', '']
        board[4] = ['O', 'X', '', '', '', '']
        board[5] = ['X', '', '', '', '', '']
        board[6] = ['', '', '', '', '', '']
        expect(Util.checkForWinner(board)).toBe('X')
    })

    it('testing row checkForWinner', () => {
        board[0] = ['X', '', '', '', '', '']
        board[1] = ['X', 'X', '', '', '', '']
        board[2] = ['X', '', '', '', '', '']
        board[3] = ['O', '', '', '', '', '']
        board[4] = ['O', '', '', '', '', '']
        board[5] = ['O', '', '', '', '', '']
        board[6] = ['O', '', '', '', '', '']
        expect(Util.checkForWinner(board)).toBe('O')
    })

    it('testing row checkForWinner', () => {
        board[0] = ['O', 'O', 'O', 'X', 'X', 'X']
        board[1] = ['X', 'X', 'X', 'O', 'O', 'X']
        board[2] = ['O', 'O', 'O', 'X', 'X', 'X']
        board[3] = ['X', 'X', 'X', 'O', 'O', 'X']
        board[4] = ['O', 'O', 'O', 'X', 'X', 'O']
        board[5] = ['X', 'X', 'X', 'O', 'O', 'O']
        board[6] = ['O', 'O', 'O', 'X', 'X', 'X']
        expect(Util.checkForWinner(board)).toBe('X')
    })

    it('testing row checkForWinner', () => {
        board[0] = ['O', 'O', 'O', 'X', 'X', 'X']
        board[1] = ['X', 'X', 'X', 'O', 'O', 'X']
        board[2] = ['O', 'O', 'O', 'X', 'X', 'O']
        board[3] = ['X', 'X', 'X', 'O', 'O', 'O']
        board[4] = ['O', 'O', 'O', 'X', 'X', 'O']
        board[5] = ['X', 'X', 'X', 'O', 'O', 'O']
        board[6] = ['O', 'O', 'O', 'X', 'X', 'X']
        expect(Util.checkForWinner(board)).toBe('O')
    })

    it('testing evaluateBoardFor', () => {
        board[0] = ['', '', '', '', '', '']
        board[1] = ['', '', '', '', '', '']
        board[2] = ['', '', '', '', '', '']
        board[3] = ['', '', '', '', '', '']
        board[4] = ['', '', '', '', '', '']
        board[5] = ['', '', '', '', '', '']
        board[6] = ['', '', '', '', '', '']
        expect(Util.evaluateBoardFor(board, 'X')).toBe(0)
        
        board[3] = ['X', '', '', '', '', '']
        expect(Util.evaluateBoardFor(board, 'X')).toBe(7)
        board[3] = ['X', 'O', '', '', '', '']
        expect(Util.evaluateBoardFor(board, 'X')).toBe(-3)
        board[3] = ['X', 'X', '', '', '', '']
        expect(Util.evaluateBoardFor(board, 'X')).toBe(19)
        board[3] = ['X', 'X', 'X', '', '', '']
        expect(Util.evaluateBoardFor(board, 'X')).toBe(38)
        board[3] = ['X', 'X', 'X', 'X', '', '']
        expect(Util.evaluateBoardFor(board, 'X')).toBe(10000)

    })

    it('testing nextMoves', () => {
        board[0] = ['', '', '', '', '', '']
        board[1] = ['', '', '', '', '', '']
        board[2] = ['', '', '', '', '', '']
        board[3] = ['', '', '', '', '', '']
        board[4] = ['', '', '', '', '', '']
        board[5] = ['', '', '', '', '', '']
        board[6] = ['', '', '', '', '', '']
        expect(Util.nextMoves(board)).toEqual([0,1,2,3,4,5,6])     
        board[3] = ['X', '', '', '', '', '']
        expect(Util.nextMoves(board)).toEqual([0,1,2,3,4,5,6])
        board[3] = ['X', 'X', 'X', 'X', 'X', 'X']
        expect(Util.nextMoves(board)).toEqual([0,1,2,4,5,6])
        board[0] = ['X', 'X', 'X', 'X', 'X', 'X']
        board[1] = ['X', 'X', 'X', 'X', 'X', 'X']
        board[2] = ['X', 'X', 'X', 'X', 'X', 'X']
        board[4] = ['X', 'X', 'X', 'X', 'X', 'X']
        board[5] = ['X', 'X', 'X', 'X', 'X', 'X']
        board[6] = ['X', 'X', 'X', 'X', 'X', 'X']
        expect(Util.nextMoves(board)).toEqual([])
    })

    it('testing isGameOver()', () => {
        board[0] = ['', '', '', '', '', '']
        board[1] = ['', '', '', '', '', '']
        board[2] = ['', '', '', '', '', '']
        board[3] = ['', '', '', '', '', '']
        board[4] = ['', '', '', '', '', '']
        board[5] = ['', '', '', '', '', '']
        board[6] = ['', '', '', '', '', '']
        expect(Util.isGameOver(board)).toBe(false)

        board[0] = ['O', '', '', '', '', '']
        board[1] = ['', 'O', '', '', '', '']
        board[2] = ['', '', 'O', '', '', '']
        board[3] = ['', '', '', 'O', '', '']
        board[4] = ['', '', '', '', '', '']
        board[5] = ['', '', '', '', '', '']
        board[6] = ['', '', '', '', '', '']
        expect(Util.isGameOver(board)).toBe(true)    

        board[3] = ['X', 'X', 'X', '', '', '']
        expect(Util.isGameOver(board)).toBe(false)

        board[3] = ['X', 'X', 'X', 'X', '', '']
        expect(Util.isGameOver(board)).toBe(true)    
    })

    it('testing deepcopyBoard()', () => {
        board[0] = ['O', '', '', '', '', '']
        board[1] = ['', 'O', '', '', '', '']
        board[2] = ['', '', 'O', '', '', '']
        board[3] = ['', '', '', 'O', '', '']
        board[4] = ['', '', '', '', '', '']
        board[5] = ['', '', '', '', '', '']
        board[6] = ['', '', '', '', '', '']
        expect(Util.deepcopyBoard(board)).toEqual(board)
    })

    it('testing moveOnBoard()', () => {
        board[0] = ['', '', '', '', '', '']
        board[1] = ['', '', '', '', '', '']
        board[2] = ['', '', '', '', '', '']
        board[3] = ['', '', '', '', '', '']
        board[4] = ['', '', '', '', '', '']
        board[5] = ['', '', '', '', '', '']
        board[6] = ['', '', '', '', '', '']
        expect(Util.moveOnBoard(board, 3, 'X')).not.toEqual(board)
    })

    it('testing minimax', () => {
        board[0] = ['', '', '', '', '', '']
        board[1] = ['', '', '', '', '', '']
        board[2] = ['', '', '', '', '', '']
        board[3] = ['', '', '', '', '', '']
        board[4] = ['', '', '', '', '', '']
        board[5] = ['', '', '', '', '', '']
        board[6] = ['', '', '', '', '', '']
        const columnIx = Util.minimax_search(board, 1, 'X')
        expect(columnIx).toBe(3)
        const columnIx1 = Util.minimax_search(board, 2, 'X')
        expect(columnIx1).toBe(1)
        const columnIx2 = Util.minimax_search(board, 3, 'X')
        expect(columnIx2).toBe(2)
        const columnIx3 = Util.minimax_search(board, 4, 'X')
        expect(columnIx3).toBe(2)
    })

    it.only('testin alphabeta', () => {
        board[0] = ['', '', '', '', '', '']
        board[1] = ['', '', '', '', '', '']
        board[2] = ['', '', '', '', '', '']
        board[3] = ['', '', '', '', '', '']
        board[4] = ['', '', '', '', '', '']
        board[5] = ['', '', '', '', '', '']
        board[6] = ['', '', '', '', '', '']
        // const columnIx = Util.alphabetaSearch(board, 1, 'X')
        // expect(columnIx).toBe(3)
        const columnIx1 = Util.alphabetaSearch(board, 2, 'X')
        expect(columnIx1).toBe(1)
        // const columnIx2 = Util.alphabetaSearch(board, 3, 'X')
        // expect(columnIx2).toBe(2)
        // const columnIx3 = Util.alphabetaSearch(board, 4, 'X')
        // expect(columnIx3).toBe(2)
        // const columnIx4 = Util.alphabetaSearch(board, 6, 'X')
        // expect(columnIx4).toBe(3)
    })
})
