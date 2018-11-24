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

    it('testing evaluateBoardFor real bug', () => {
        board[0] = ['', '', '', '', '', '']
        board[1] = ['', '', '', '', '', '']
        board[2] = ['', '', '', '', '', '']
        board[3] = ['X', 'O', 'X', 'O', 'X', 'O']
        board[4] = ['X', '', '', '', '', '']
        board[5] = ['', '', '', '', '', '']
        board[6] = ['O', 'X', 'O', '', '', '']
        console.log(JSON.stringify(board) + 10)
        expect(Util.evaluateBoardFor(board, 'O')).toBe(-3)
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

    it('testing moveOnBoardWithoutCopy()', () => {
        board[0] = ['', '', '', '', '', '']
        board[1] = ['', '', '', '', '', '']
        board[2] = ['', '', '', '', '', '']
        board[3] = ['', '', '', '', '', '']
        board[4] = ['', '', '', '', '', '']
        board[5] = ['', '', '', '', '', '']
        board[6] = ['', '', '', '', '', '']
        Util.moveOnBoardWithoutCopy(board, 3, 'X')
        expect(board[3][0]).toBe('X')
    })

    it('testing unmoveOnBoardWithoutCopy()', () => {
        board[0] = ['', '', '', '', '', '']
        board[1] = ['', '', '', '', '', '']
        board[2] = ['', '', '', '', '', '']
        board[3] = ['', '', '', '', '', '']
        board[4] = ['', '', '', '', '', '']
        board[5] = ['', '', '', '', '', '']
        board[6] = ['', '', '', '', '', '']
        Util.moveOnBoardWithoutCopy(board, 3, 'X')
        Util.unmoveOnBoardWithoutCopy(board, 3, 'X')
        expect(board[3][0]).toBe('X')
    })

    it('testing minimax', () => {
        board[0] = ['', '', '', '', '', '']
        board[1] = ['', '', '', '', '', '']
        board[2] = ['', '', '', '', '', '']
        board[3] = ['', '', '', '', '', '']
        board[4] = ['', '', '', '', '', '']
        board[5] = ['', '', '', '', '', '']
        board[6] = ['', '', '', '', '', '']
        // const columnIx = Util.minimax_search(board, 1, 'X')
        // expect(columnIx).toBe(3)
        // const columnIx1 = Util.minimax_search(board, 2, 'X')
        // expect(columnIx1).toBe(1)
        // const columnIx2 = Util.minimax_search(board, 3, 'X')
        // expect(columnIx2).toBe(2)
        // const columnIx3 = Util.minimax_search(board, 4, 'X')
        // expect(columnIx3).toBe(2)
        // const columnIx4 = Util.minimax_search(board, 5, 'X')
        // expect(columnIx4).toBe(2)
        // const columnIx5 = Util.minimax_search(board, 6, 'X')
        // expect(columnIx5).toBe(3)
        // const columnIx6 = Util.minimax_search(board, 7, 'X')
        // expect(columnIx6).toBe(3)
        const columnIx7 = Util.minimax_search(board, 8, 'X')
        expect(columnIx7).toBe(2)
        // const columnIx8 = Util.minimax_search(board, 9, 'X')
        // expect(columnIx8).toBe(3)
        // const columnIx9 = Util.minimax_search(board, 10, 'X')
        // expect(columnIx9).toBe(2)
    })

    it('testing minimax from real bug 3', () => {
        board[0] = ['', '', '', '', '', '']
        board[1] = ['', '', '', '', '', '']
        board[2] = ['', '', '', '', '', '']
        board[3] = ['X', 'O', 'X', 'O', 'X', 'O']
        board[4] = ['X', '', '', '', '', '']
        board[5] = ['', '', '', '', '', '']
        board[6] = ['O', 'X', '', '', '', '']
        const columnIx = Util.aiMove(board, 4, 'O')
        expect(columnIx).toBe(2)
    })

    it('testin alphabeta', () => {
        board[0] = ['', '', '', '', '', '']
        board[1] = ['', '', '', '', '', '']
        board[2] = ['', '', '', '', '', '']
        board[3] = ['', '', '', '', '', '']
        board[4] = ['', '', '', '', '', '']
        board[5] = ['', '', '', '', '', '']
        board[6] = ['', '', '', '', '', '']
        // const columnIx = Util.alphabetaSearch(board, 1, 'X', Util.evaluateBoardFor, Util.nextMovesCenterFirst, false)
        // expect(columnIx).toBe(3)
        // const columnIx1 = Util.alphabetaSearch(board, 2, 'X', Util.evaluateBoardFor, Util.nextMovesCenterFirst, false)
        // expect(columnIx1).toBe(3)
        // const columnIx2 = Util.alphabetaSearch(board, 3, 'X', Util.evaluateBoardFor, Util.nextMovesCenterFirst, false)
        // expect(columnIx2).toBe(2)
        const columnIx3 = Util.alphabetaSearch(board, 12, 'X', Util.evaluateBoardFor, Util.nextMovesCenterFirst, false)
        expect(columnIx3).toBe(3)
        // const columnIx3 = Util.alphabetaSearch(board, 4, 'X')
        // expect(columnIx3).toBe(2)
        // const columnIx4 = Util.alphabetaSearch(board, 6, 'X')
        // expect(columnIx4).toBe(3)
    })

    it('testin alphabeta from real bug', () => {
        board[0] = ['O', 'X', 'O', 'X', 'X', 'O']
        board[1] = ['X', 'O', 'O', 'X', 'O', 'X']
        board[2] = ['X', 'O', 'X', 'O', 'O', 'X']
        board[3] = ['X', 'O', 'X', 'O', 'O', 'O']
        board[4] = ['O', 'X', 'O', 'O', 'X', 'X']
        board[5] = ['X', 'X', 'O', 'X', '', '']
        board[6] = ['X', '', '', '', '', '']
        const columnIx = Util.alphabetaSearch(board, 8, 'O', Util.evaluateBoardFor, Util.nextMovesCenterFirst, false)
        expect(columnIx).toBe(6)
        //const columnIx1 = Util.alphabetaSearch(board, 2, 'X')
        //expect(columnIx1).toBe(1)
        // const columnIx2 = Util.alphabetaSearch(board, 3, 'X')
        // expect(columnIx2).toBe(2)
        // const columnIx3 = Util.alphabetaSearch(board, 4, 'X')
        // expect(columnIx3).toBe(2)
        // const columnIx4 = Util.alphabetaSearch(board, 6, 'X')
        // expect(columnIx4).toBe(3)
    })

    it('testing alphabeta from real bug 2', () => {
        board[0] = ['X', '', '', '', '', '']
        board[1] = ['X', 'O', '', '', '', '']
        board[2] = ['O', 'X', 'O', 'O', 'X', '']
        board[3] = ['X', 'O', 'X', 'O', 'O', 'O']
        board[4] = ['X', 'X', '', '', '', '']
        board[5] = ['X', '', '', '', '', '']
        board[6] = ['O', '', '', '', '', '']
    })

    it.only('testing alphabeta from real bug 3', () => {
        board[0] = ['', '', '', '', '', '']
        board[1] = ['', '', '', '', '', '']
        board[2] = ['', '', '', '', '', '']
        board[3] = ['X', 'O', 'X', 'O', 'X', 'O']
        board[4] = ['X', '', '', '', '', '']
        board[5] = ['', '', '', '', '', '']
        board[6] = ['O', 'X', '', '', '', '']
        const columnIx = Util.aiMove(board, 10, 'O')
        expect(columnIx).toBe(2)
    })



    it('testing sortListByMiddle', () => {
        expect(Util.sortListByMiddle([0, 1, 2, 3, 4, 5, 6])).toEqual([3, 4, 2, 5, 1, 6, 0])
        expect(Util.sortListByMiddle([0, 1, 2, 4, 5, 6])).toEqual([2, 4, 1, 5, 0, 6])
        expect(Util.sortListByMiddle([0, 1, 4, 5, 6])).toEqual([4, 5, 1, 6, 0])
        expect(Util.sortListByMiddle([0, 1, 5, 6])).toEqual([1, 5, 0, 6])
        expect(Util.sortListByMiddle([0, 1, 2, 3, 4])).toEqual([2, 3, 1, 4, 0])
    })

    it('testing sortListByDistanceToColumnIndex3', () => {
        const list = Util.sortListByDistanceToColumnIndex3([0, 1, 2, 3, 4, 5, 6])
        expect(list[0].toString()).toMatch(/3/)
        expect(list[1].toString()).toMatch(/2|4/)
        expect(list[2].toString()).toMatch(/2|4/)
        expect(list[3].toString()).toMatch(/1|5/)
        expect(list[4].toString()).toMatch(/1|5/)
        expect(list[5].toString()).toMatch(/0|6/)
        expect(list[6].toString()).toMatch(/0|6/)
    })

    it('testing nextMovesCenterFirst', () => {
        board[0] = ['', '', '', '', '', '']
        board[1] = ['', '', '', '', '', '']
        board[2] = ['', '', '', '', '', '']
        board[3] = ['', '', '', '', '', '']
        board[4] = ['', '', '', '', '', '']
        board[5] = ['', '', '', '', '', '']
        board[6] = ['', '', '', '', '', '']
        const list = Util.nextMovesCenterFirst(board)
        expect(list[0].toString()).toMatch(/3/)
        expect(list[1].toString()).toMatch(/2|4/)
        expect(list[2].toString()).toMatch(/2|4/)
        expect(list[3].toString()).toMatch(/1|5/)
        expect(list[4].toString()).toMatch(/1|5/)
        expect(list[5].toString()).toMatch(/0|6/)
        expect(list[6].toString()).toMatch(/0|6/)

        board[0] = ['O', 'X', 'O', 'X', 'X', 'O']
        board[1] = ['X', 'O', 'O', 'X', 'O', 'X']
        board[2] = ['X', 'O', 'X', 'O', 'O', 'X']
        board[3] = ['X', 'O', 'X', 'O', 'O', 'O']
        board[4] = ['O', 'X', 'O', 'O', 'X', 'X']
        board[5] = ['X', 'X', 'O', 'X', '', '']
        board[6] = ['X', '', '', '', '', '']
        const list1 = Util.nextMovesCenterFirst(board)
        expect(list1.length).toBe(2)
        expect(list1[0].toString()).toMatch(/5/)
        expect(list1[1].toString()).toMatch(/6/)
    })

    it('testing alphabeta without copying board', () => {
        board[0] = ['', '', '', '', '', '']
        board[1] = ['', '', '', '', '', '']
        board[2] = ['', '', '', '', '', '']
        board[3] = ['', '', '', '', '', '']
        board[4] = ['', '', '', '', '', '']
        board[5] = ['', '', '', '', '', '']
        board[6] = ['', '', '', '', '', '']

        const stats = {
            numEvals: 0
        }
        Util.alphabetaSearch(board, 3, 'X', Util.evaluateBoardFor, Util.nextMoves, false)
        Util.dumpBoard(board, 6, 7)
        expect(stats.numEvals).not.toBe(0)
    })

    describe('testing performance with copying board', () => {
        it('case 1', () => {
            board[0] = ['', '', '', '', '', '']
            board[1] = ['', '', '', '', '', '']
            board[2] = ['', '', '', '', '', '']
            board[3] = ['', '', '', '', '', '']
            board[4] = ['', '', '', '', '', '']
            board[5] = ['', '', '', '', '', '']
            board[6] = ['', '', '', '', '', '']

            const stats = {
                numEvals: 0
            }
            Util.alphabetaSearch(board, 8, 'X', Util.evaluateBoardFor, Util.nextMoves, true)
            expect(stats.numEvals).not.toBe(0)
        })

        it('case 2', () => {
            board[0] = ['', '', '', '', '', '']
            board[1] = ['', '', '', '', '', '']
            board[2] = ['', '', '', '', '', '']
            board[3] = ['', '', '', '', '', '']
            board[4] = ['', '', '', '', '', '']
            board[5] = ['', '', '', '', '', '']
            board[6] = ['', '', '', '', '', '']

            const stats = {
                numEvals: 0
            }
            stats.numEvals = 0
            Util.alphabetaSearch(board, 8, 'X', Util.evaluateBoardFor, Util.nextMovesCenterFirst, true)
            expect(stats.numEvals).not.toBe(0)
        })

        it('case 3', () => {
            board[0] = ['', '', '', '', '', '']
            board[1] = ['', '', '', '', '', '']
            board[2] = ['', '', '', '', '', '']
            board[3] = ['', '', '', '', '', '']
            board[4] = ['', '', '', '', '', '']
            board[5] = ['', '', '', '', '', '']
            board[6] = ['', '', '', '', '', '']

            const stats = {
                numEvals: 0
            }
            Util.alphabetaSearch(board, 8, 'X', Util.evaluateBoardForV2, Util.nextMoves, true)
            expect(stats.numEvals).not.toBe(0)

        })

        it('case 4', () => {
            board[0] = ['', '', '', '', '', '']
            board[1] = ['', '', '', '', '', '']
            board[2] = ['', '', '', '', '', '']
            board[3] = ['', '', '', '', '', '']
            board[4] = ['', '', '', '', '', '']
            board[5] = ['', '', '', '', '', '']
            board[6] = ['', '', '', '', '', '']

            const stats = {
                numEvals: 0
            }
            stats.numEvals = 0
            Util.alphabetaSearch(board, 8, 'X', Util.evaluateBoardForV2, Util.nextMovesCenterFirst, true)
            expect(stats.numEvals).not.toBe(0)
        })
    })


    describe('testing performance with not copying board', () => {
        it('case 1', () => {
            board[0] = ['', '', '', '', '', '']
            board[1] = ['', '', '', '', '', '']
            board[2] = ['', '', '', '', '', '']
            board[3] = ['', '', '', '', '', '']
            board[4] = ['', '', '', '', '', '']
            board[5] = ['', '', '', '', '', '']
            board[6] = ['', '', '', '', '', '']

            const stats = {
                numEvals: 0
            }
            Util.alphabetaSearch(board, 8, 'X', Util.evaluateBoardFor, Util.nextMoves, false)
            Util.dumpBoard(board, 6, 7)
            expect(stats.numEvals).not.toBe(0)
        })

        it('case 2', () => {
            board[0] = ['', '', '', '', '', '']
            board[1] = ['', '', '', '', '', '']
            board[2] = ['', '', '', '', '', '']
            board[3] = ['', '', '', '', '', '']
            board[4] = ['', '', '', '', '', '']
            board[5] = ['', '', '', '', '', '']
            board[6] = ['', '', '', '', '', '']

            const stats = {
                numEvals: 0
            }
            stats.numEvals = 0
            Util.alphabetaSearch(board, 8, 'X', Util.evaluateBoardFor, Util.nextMovesCenterFirst, false)
            expect(stats.numEvals).not.toBe(0)
        })

        it('case 3', () => {
            board[0] = ['', '', '', '', '', '']
            board[1] = ['', '', '', '', '', '']
            board[2] = ['', '', '', '', '', '']
            board[3] = ['', '', '', '', '', '']
            board[4] = ['', '', '', '', '', '']
            board[5] = ['', '', '', '', '', '']
            board[6] = ['', '', '', '', '', '']

            const stats = {
                numEvals: 0
            }
            Util.alphabetaSearch(board, 8, 'X', Util.evaluateBoardForV2, Util.nextMoves, false)
            expect(stats.numEvals).not.toBe(0)

        })

        it('case 4', () => {
            board[0] = ['', '', '', '', '', '']
            board[1] = ['', '', '', '', '', '']
            board[2] = ['', '', '', '', '', '']
            board[3] = ['', '', '', '', '', '']
            board[4] = ['', '', '', '', '', '']
            board[5] = ['', '', '', '', '', '']
            board[6] = ['', '', '', '', '', '']

            const stats = {
                numEvals: 0
            }
            stats.numEvals = 0
            Util.alphabetaSearch(board, 8, 'X', Util.evaluateBoardForV2, Util.nextMovesCenterFirst, false)
            expect(stats.numEvals).not.toBe(0)
        })
    })

})
