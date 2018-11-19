class Util {
    public static dumpBoard(board:string[][], numRows:number, numCols:number) {
        //console.log(`dumpBoard(${board})`)
        let dump:string = ''
        for (let rowIx = 0; rowIx < numRows; rowIx++) {
            for(let colIx = 0; colIx < numCols; colIx++) {
                dump += (board[colIx][rowIx] === '') ? '.' : board[colIx][rowIx]            
                if (colIx === numCols-1) {
                    dump += '\n'
                }
            }
        }
        console.log(dump)
    }

    public static checkForWinner(board:string[][]) {
//        console.log('checkForWinner()')
        const columnWinner =  Util.checkColumnsForWinner(board)
        const rowWinner = Util.checkRowsForWinner(board)
        const diagonalWinner = Util.checkDiagonalForWinner(board)
        let winner = ''
        if(columnWinner !== '') {
            winner = columnWinner
        } else if(rowWinner !== '') {
            winner = rowWinner
        } else if(diagonalWinner !== '') {
            winner = diagonalWinner
        }
        return winner
    }

    private static checkColumnsForWinner(board:string[][]) {
        for(const column of board) {
            for(let i = 0; i < column.length-3; i++) {
                if(column[i] === column[i+1] && column[i+1] === column[i+2] && column[i+2] === column[i+3] && column[i] !== '') {
//                    console.log('column[i]:' + column[i])
                    return column[i]
                }
            }
        }
        return ''
    }

    private static checkRowsForWinner(board:string[][]) {
        for(let colIx = 0; colIx < board.length-3; colIx++) {
            for(let rowIx = 0; rowIx < board[colIx].length; rowIx++) {
                if(
                    board[colIx][rowIx] === board[colIx+1][rowIx] &&
                    board[colIx+1][rowIx] === board[colIx+2][rowIx] &&
                    board[colIx+2][rowIx] === board[colIx+3][rowIx] &&
                    board[colIx][rowIx] !== '') {
                        return board[colIx][rowIx]
                    }
            }
        }
        return ''
    }

    private static checkDiagonalForWinner(board:string[][]) {
        for(let colIx = 0; colIx < board.length-3; colIx++) {
            for(let rowIx = 0; rowIx < board[colIx].length-3; rowIx++) {
                if(board[colIx][rowIx] === board[colIx+1][rowIx+1] &&
                        board[colIx+1][rowIx+1] === board[colIx+2][rowIx+2] &&
                        board[colIx+2][rowIx+2] === board[colIx+3][rowIx+3] &&
                        board[colIx][rowIx] !== '') {
                    return board[colIx][rowIx]
                }
            }

            for(let rowIx = 3; rowIx < board.length; rowIx++) {
                if(board[colIx][rowIx] === board[colIx+1][rowIx-1] &&
                board[colIx+1][rowIx-1] === board[colIx+2][rowIx-2] &&
                board[colIx+2][rowIx-2] === board[colIx+3][rowIx-3] &&
                board[colIx][rowIx] !== '') {
                    return board[colIx][rowIx]    
                }

            }
        }
        return ''
    }

    public static isBoardFull(board:string[][]) {
        for(const column of board) {
            for(const cell of column) {
                if(cell === '') return false
            }
        }
        return true
    }

    public static isValidMove(column:string[]) {
        for(const cell of column) {
            if(cell === '') {
//                console.log('isValidMove TRUE')
                return true
            }
        }
//        console.log('isValidMove FALSE')
        return false
    }

//     def segment_evaluate_v2(board, maximizer_id=0):
//     '''
//     3-in-a-row would give a score of 9, 2 would be 4, 1=1) and if state
//     resulted in 4 in a row it would get a big bonus/punishment of
//     10000/-10000. 
//     '''
//     global segment_evaluate_v2_callcount
//     segment_evaluate_v2_callcount += 1
//     score = 0
//     segments = segment_board(board)

//     player_id = 0
//     if maximizer_id != 0:
//         player_id = maximizer_id
//     else:
//         player_id = board.get_current_player_id()
    
//     opponent_id = 1 if player_id == 2 else 2

//     #print 'player_id:', player_id
//     #print 'opponent_id:', opponent_id
//     #print segments
// #    print 'seglen:', len(segments)
//     for segment in segments:
// #        print 'seg:', segment
//         num_player = [i for i, x in enumerate(segment) if x == player_id]
//         num_opponent = [i for i, x in enumerate(segment) if x == opponent_id]
//         num_empty = [i for i, x in enumerate(segment) if x == 0]
//         # loop through indexes of segment and push into arrays depending on value
//         # num_empty = [i for i, x in enumerate(segment) if x == 0]
//         # num_x = [i for i, x in enumerate(segment) if x == 1]
//         # num_o = [i for i, x in enumerate(segment) if x == 2]
// #        print 'numx:', num_x
// #        print 'numo:', num_o
// #        print 'nume:', num_empty
// #        print '_______________'
//         if len(num_opponent) == 0:
//             if len(num_player) > 0:
//                 if len(num_player) == 4:
//                    score += 10000
//                 else:
//                     score += len(num_player) * len(num_player)
// #                print 'score:', len(num_x) * len(num_x)

//         if len(num_player) == 0:
//             if len(num_opponent) > 0:
//                 if len(num_opponent) == 4:
//                     score -= 10000
//                 else:
//                     score -= len(num_opponent) * len(num_opponent)
// #                print 'score:', len(num_o) * len(num_o)

//     # print 'turn:', board.get_current_player_id()
//     # print board
//     #print 'score:', score
//     # print '_____________________'
//     return score

    private static getNumOccurences(segment:string[], token:string) {
        let numTokens = 0

        for(let cellIx = 0; cellIx < segment.length; cellIx++) {
//            console.log('cell:' + segment[cellIx])
            if(segment[cellIx] == token) {
                numTokens += 1
            } 
        }

//        console.log('numTokens:' + numTokens)
        return numTokens
    }

    // return evaluate score of the given board for the maximizerToken
    public static evaluateBoardFor(board:string[][], maximizerToken:string) {
        //TODO
        let score = 0
        const segments = Util.segmentBoard(board)
        //const segments = Util.segmentBoardWithoutCopy(board)
//        console.log(segments)

        let playerId = ''
        if (maximizerToken != '') {
            playerId = maximizerToken
        } else {
            //TODO HERE
            playerId = 'X'   
        }

        let opponentId = (playerId == 'X') ? 'O' : 'X'
        for(let segment of segments) {
            const numPlayer = Util.getNumOccurences(segment, playerId)
            const numOpponent = Util.getNumOccurences(segment, opponentId)
            // console.log('numPlayer:' + numPlayer)
            // console.log('numOpponent:' + numOpponent)
            if (numOpponent == 0) {
                if (numPlayer > 0) {
                    if (numPlayer == 4) {
                        score = 10000
                        break
                    } else {
                        score += numPlayer * numPlayer
                    }
                }
            }

            if(numPlayer == 0) {
                if (numOpponent > 0) {
                    if(numOpponent == 4) {
                        score = -10000
                        break
                    } else {
                        score -= numOpponent * numOpponent
                    }
                }
            }
        }
        return score
    }

    // return evaluate score of the given board for the maximizerToken
    public static evaluateBoardForV2(board:string[][], maximizerToken:string) {
        //TODO
        let score = 0
        const segments = Util.segmentBoard(board)
        //const segments = Util.segmentBoardWithoutCopy(board)
//        console.log(segments)

        let playerId = ''
        if (maximizerToken != '') {
            playerId = maximizerToken
        } else {
            //TODO HERE
            playerId = 'X'   
        }

        let opponentId = (playerId == 'X') ? 'O' : 'X'
        for(let segment of segments) {
            const numPlayer = Util.getNumOccurences(segment, playerId)
            const numOpponent = Util.getNumOccurences(segment, opponentId)
            // console.log('numPlayer:' + numPlayer)
            // console.log('numOpponent:' + numOpponent)
            if (numOpponent == 0) {
                if (numPlayer > 0) {
                    if (numPlayer == 4) {
                        score = 10000
                        break
                    }
                    else if (numPlayer == 3) {
                        score += 50
                    }
                    else {
                        score += numPlayer * numPlayer
                    }
                }
            }

            if(numPlayer == 0) {
                if (numOpponent > 0) {
                    if(numOpponent == 4) {
                        score = -10000
                        break
                    } else {
                        score -= numOpponent * numOpponent
                    }
                }
            }
        }
        return score
    }

    // def segment_board(board):
    // '''
    // returns list of 4-cell segments in the given board, in horizontal, vertical and diagonally
    // '''
    // segments = []
    // # todo
    // scanlines = scan_board(board)
    // for scanline in scanlines:
    //     if len(scanline) >= 4:
    //         for i in range(len(scanline)-3):
    //             segment = []
    //             segment.append(scanline[i])
    //             segment.append(scanline[i+1])
    //             segment.append(scanline[i+2])
    //             segment.append(scanline[i+3])
    //             segments.append(segment)
    // return segments

    private static segmentBoard(board:string[][]) {
        const segments = []
        const scanLines = Util.scanBoard(board)
//        console.log(scanLines)

        for(let scanLine of scanLines) {
            if(scanLine.length >= 4) {
                for(let i = 0; i < scanLine.length - 3; i++) {
                    const segment = []
                    segment.push(scanLine[i])
                    segment.push(scanLine[i+1])
                    segment.push(scanLine[i+2])
                    segment.push(scanLine[i+3])
                    segments.push(segment)
                }
            }
        }
        return segments
    }

    // def scan_board(board):
    // scan_lines = []
    // # left to right
    // for row in range(6):
    //     scan_lines.append(scan_line(board, row, 0, 0, 1))
    
    // # top to bottom
    // for col in range(7):
    //     scan_lines.append(scan_line(board, 0, col, 1, 0))
    
    // # topleft to bottomright
    // for row in range(6):
    //     scan_lines.append(scan_line(board, row, 0, 1, 1))
    // for col in range(1, 7):
    //     scan_lines.append(scan_line(board, 0, col, 1, 1))

    // # topright to bottomleft
    // for row in range(6):
    //     scan_lines.append(scan_line(board, row, 6, 1, -1))
    // for col in range(6):
    //     scan_lines.append(scan_line(board, 0, col, 1, -1))
    // return scan_lines
    private static scanBoard(board:string[][]) {
        const scanLines = []

        // # left to right
        for(let row = 0; row < 6; row++) {
            scanLines.push(Util.scanLine(board, row, 0, 0, 1))
        }

        // # top to bottom
        for(let col = 0; col < 7; col++) {
            scanLines.push(Util.scanLine(board, 0, col, 1, 0))
        }

        // # topleft to bottomright
        for(let row = 0; row < 6; row++) {
            scanLines.push(Util.scanLine(board, row, 0, 1, 1))
        }
        for(let col = 1; col < 7; col++) {
            scanLines.push(Util.scanLine(board, 0, col, 1, 1))
        }

        // # topright to bottomleft
        for(let row = 0; row < 6; row++) {
            scanLines.push(Util.scanLine(board, row, 6, 1, -1))
        }
        for(let col = 0; col < 6; col++) {
            scanLines.push(Util.scanLine(board, 0, col, 1, -1))
        }
        return scanLines
    }
/*
    private static segmentBoardWithoutCopy(board:string[][]) {

        const scanLines = [
            // vertical scan lines
            [board[0][0], board[0][1], board[0][2], board[0][3]],
            [board[0][1], board[0][2], board[0][3], board[0][4]],
            [board[0][2], board[0][3], board[0][4], board[0][5]],

            [board[1][0], board[1][1], board[1][2], board[1][3]],
            [board[1][1], board[1][2], board[1][3], board[1][4]],
            [board[1][2], board[1][3], board[1][4], board[1][5]],

            [board[2][0], board[2][1], board[2][2], board[2][3]],
            [board[2][1], board[2][2], board[2][3], board[2][4]],
            [board[2][2], board[2][3], board[2][4], board[2][5]],

            [board[3][0], board[3][1], board[3][2], board[3][3]],
            [board[3][1], board[3][2], board[3][3], board[3][4]],
            [board[3][2], board[3][3], board[3][4], board[3][5]],

            [board[4][0], board[4][1], board[4][2], board[4][3]],
            [board[4][1], board[4][2], board[4][3], board[4][4]],
            [board[4][2], board[4][3], board[4][4], board[4][5]],

            [board[5][0], board[5][1], board[5][2], board[5][3]],
            [board[5][1], board[5][2], board[5][3], board[5][4]],
            [board[5][2], board[5][3], board[5][4], board[5][5]],

            [board[6][0], board[6][1], board[6][2], board[6][3]],
            [board[6][1], board[6][2], board[6][3], board[6][4]],
            [board[6][2], board[6][3], board[6][4], board[6][5]],

            // horizontal scan lines
            [board[0][0], board[1][0], board[2][0], board[3][0]],
            [board[1][0], board[2][0], board[3][0], board[4][0]],
            [board[2][0], board[3][0], board[4][0], board[5][0]],
            [board[3][0], board[4][0], board[5][0], board[6][0]],

            [board[0][1], board[1][1], board[2][1], board[3][1]],
            [board[1][1], board[2][1], board[3][1], board[4][1]],
            [board[2][1], board[3][1], board[4][1], board[5][1]],
            [board[3][1], board[4][1], board[5][1], board[6][1]],

            [board[0][2], board[1][2], board[2][2], board[3][2]],
            [board[1][2], board[2][2], board[3][2], board[4][2]],
            [board[2][2], board[3][2], board[4][2], board[5][2]],
            [board[3][2], board[4][2], board[5][2], board[6][2]],

            [board[0][3], board[1][3], board[2][3], board[3][3]],
            [board[1][3], board[2][3], board[3][3], board[4][3]],
            [board[2][3], board[3][3], board[4][3], board[5][3]],
            [board[3][3], board[4][3], board[5][3], board[6][3]],

            [board[0][4], board[1][4], board[2][4], board[3][4]],
            [board[1][4], board[2][4], board[3][4], board[4][4]],
            [board[2][4], board[3][4], board[4][4], board[5][4]],
            [board[3][4], board[4][4], board[5][4], board[6][4]],

            [board[0][5], board[1][5], board[2][5], board[3][5]],
            [board[1][5], board[2][5], board[3][5], board[4][5]],
            [board[2][5], board[3][5], board[4][5], board[5][5]],
            [board[3][5], board[4][5], board[5][5], board[6][5]],

            // diagonal scan lines
            //rising to right
            [board[0][0], board[1][1], board[2][2], board[3][3]],
            [board[0][1], board[1][2], board[2][3], board[3][4]],
            [board[0][2], board[1][3], board[2][4], board[3][5]],

            [board[1][0], board[2][1], board[3][2], board[4][3]],
            [board[1][1], board[2][2], board[3][3], board[5][4]],
            [board[1][2], board[2][3], board[3][4], board[6][5]],

            [board[2][0], board[3][1], board[4][2], board[5][3]],
            [board[2][1], board[3][2], board[4][3], board[5][4]],
            [board[2][2], board[3][3], board[4][4], board[5][5]],

            [board[3][0], board[4][1], board[5][2], board[6][3]],
            [board[3][1], board[4][2], board[5][3], board[6][4]],
            [board[3][2], board[4][3], board[5][4], board[6][5]],

            //falling to left
            [board[6][0], board[5][1], board[4][2], board[3][3]],
            [board[6][1], board[5][2], board[4][3], board[3][4]],
            [board[6][2], board[5][3], board[4][4], board[3][5]],

            [board[5][0], board[4][1], board[3][2], board[2][3]],
            [board[5][1], board[4][2], board[3][3], board[2][4]],
            [board[5][2], board[4][3], board[3][4], board[2][5]],

            [board[4][0], board[3][1], board[2][2], board[1][3]],
            [board[4][1], board[3][2], board[2][3], board[1][4]],
            [board[4][2], board[3][3], board[2][4], board[1][5]],

            [board[3][0], board[2][1], board[1][2], board[0][3]],
            [board[3][1], board[2][2], board[1][3], board[0][4]],
            [board[3][2], board[2][3], board[1][4], board[0][5]],
        ]
        return scanLines
    }
*/
    // def scan_line(board, startRow, startCol, deltaRow, deltaCol):
    // scan_line = []

    // scan_line.append(board.get_cell(startRow, startCol))

    // next_cell_row = startRow + deltaRow
    // next_cell_col = startCol + deltaCol

    // while next_cell_row < 6 and next_cell_row >= 0 and next_cell_col < 7 and next_cell_col >= 0:
    //     next_cell = board.get_cell(next_cell_row, next_cell_col)
    //     scan_line.append(next_cell)
    //     next_cell_row += deltaRow
    //     next_cell_col += deltaCol
    // return scan_line
    private static scanLine(board:string[][], startRow:number, startCol:number, deltaRow:number, deltaCol:number) {
        const scanLine = []
        scanLine.push(board[startCol][startRow])

        let nextCellRow = startRow + deltaRow
        let nextCellCol = startCol + deltaCol
        // console.log(board)

        while(nextCellRow < 6 && nextCellRow >= 0 && nextCellCol < 7 && nextCellCol >= 0) {
            const nextCell = board[nextCellCol][nextCellRow]
            // console.log('nextCellRow:' + nextCellRow)
            // console.log('nextCellCol:' + nextCellCol)
            // console.log(nextCell)
            // console.log('______________________')
            scanLine.push(nextCell)
            nextCellRow += deltaRow
            nextCellCol += deltaCol
        }
        return scanLine
    }

    // return array of column index for next move given the board
    public static nextMoves(board:string[][]) {
        const columnIxs = []

        for (let ix = 0; ix < 7; ix++) {
            if (board[ix].indexOf('') > -1) {
                columnIxs.push(ix)
            }
        }

        return columnIxs
    }

    // return array of column index for next move given the board
    public static nextMovesCenterFirst(board:string[][]) {
        const columnIxs = []

        for (let ix of [3,2,4,1,5,0,6]) {
            if (board[ix].indexOf('') > -1) {
                columnIxs.push(ix)
            }
        }

        return columnIxs
    }

    // return True when the game is over
    //        False otherwise
    public static isGameOver(board:string[][]) {
        // console.log('isGameOver()')
        //segment contains four in a row
        const segments = Util.segmentBoard(board)
        //const segments = Util.segmentBoardWithoutCopy(board)
        // console.log('segments:' + segments)
        for(const segment of segments) {
            // console.log('segment:' + segment)
            if(segment[0] == segment[1] && segment[1] == segment[2] &&
                segment[2] == segment[3] && segment[0] != '') {
                // console.log('  returns true with four in a row')
                // Util.dumpBoard(board, 6, 7)
                return true
            }
        }

        //board is full
        let isFull = true
        for(const column of board) {
            if(column.indexOf('') > -1) {
                isFull = false
            }
        }

        // console.log('  returns ' + isFull + ' with isFull')
        return isFull
    }

    public static deepcopyBoard(board:string[][]) {
        const newBoard = []
        for (let i = 0; i < board.length; i++) {
            newBoard[i] = Array.from(board[i])
        }
        return newBoard
    }

    // return new board with the token on the given column
    public static moveOnBoard(board:string[][], columnIx:number, token:string) {
        const newBoard = Util.deepcopyBoard(board)

        for(let rowIx = 0; rowIx < 6; rowIx++) {
            if (newBoard[columnIx][rowIx] == '') {
                newBoard[columnIx][rowIx] = token
                break
            }            
        }

        return newBoard
    }

    public static moveOnBoardWithoutCopy(board:string[][], columnIx:number, token:string) {
        //const newBoard = Util.deepcopyBoard(board)

        for(let rowIx = 0; rowIx < 6; rowIx++) {
            if (board[columnIx][rowIx] == '') {
                board[columnIx][rowIx] = token
                break
            }            
        }

        return board
    }

    public static unmoveOnBoardWithoutCopy(board:string[][], columnIx:number, token:string) {
        // TODO
        for(let rowIx = 6; rowIx >= 0; rowIx--) {
            if(board[columnIx][rowIx] == token) {
                board[columnIx][rowIx] = ''
                break
            }
        }
        return board
    }

    // function minimax(node, depth, maximizingPlayer) is
    // if depth = 0 or node is a terminal node then
    //     return the heuristic value of node
    // if maximizingPlayer then
    //     value := −∞
    //     for each child of node do
    //         value := max(value, minimax(child, depth − 1, FALSE))
    //     return value
    // else (* minimizing player *)
    //     value := +∞
    //     for each child of node do
    //         value := min(value, minimax(child, depth − 1, TRUE))
    //     return value
    public static minimax(board:string[][], depth:number, isMaximizer:Boolean, maximizerToken:string) {
//        console.log(`minimax d:${depth}, isMax:${isMaximizer} maxToken:${maximizerToken}`)
//        Util.dumpBoard(board, board[0].length, board.length)
        let value = 0

        if(depth == 0 || Util.isGameOver(board)) {
            value = Util.evaluateBoardFor(board, maximizerToken)
        }
        else {
            if (isMaximizer) {
                value = -Infinity
    
                const nextMoves = Util.nextMoves(board)
                for (let move of nextMoves) {
                    const newBoard = Util.moveOnBoard(board, move, maximizerToken)
                    const returnValue = Util.minimax(newBoard, depth-1, false, maximizerToken)
                    if (returnValue > value) {
                        value = returnValue
                    }
                }
                
            }
            else {
                value = Infinity
    
                const nextMoves = Util.nextMoves(board)
                for(let move of nextMoves) {
                    const minimizerToken = (maximizerToken == 'X') ? 'O' : 'X'
                    const newBoard = Util.moveOnBoard(board, move, minimizerToken)
                    const returnValue = Util.minimax(newBoard, depth-1, true, maximizerToken)
                    if(returnValue < value) {
                        value = returnValue
                    }
                }
            }
        }

//        console.log(`return value:${value}`)
        return value
    }

    public static minimax_search(board:string[][], depth:number, maximizerToken:string) {
//        console.log(`minimax_search(d:${depth})`)
        let value = -Infinity
        let columnIx = -1

        const nextMoves = Util.nextMoves(board)
        for (let move of nextMoves) {
            Util.moveOnBoardWithoutCopy(board, move, maximizerToken)
            const returnValue = Util.minimax(board, depth-1, false, maximizerToken)
            Util.unmoveOnBoardWithoutCopy(board, move, maximizerToken)
            if (returnValue > value) {
                value = returnValue
                columnIx = move
            }
        }
//s        console.log(`return value:${columnIx}`)
        return columnIx
    }

    public static sortListByMiddle(list:number[]):number[] {
        const newList:number[] = []
        const middleIx = Math.floor((list.length-1)/2)
        newList.push(list[middleIx])
        let leftIx = middleIx-1
        let rightIx = middleIx+1
        while(true) {
            let leftDone = false
            let rightDone = false

            if(rightIx < list.length) {
                newList.push(list[rightIx])
                rightIx++
            } else {
                rightDone = true
            }

            if(leftIx >= 0) {
                newList.push(list[leftIx])
                leftIx--
            } else {
                leftDone = true
            }

            // console.log('leftDone:' + leftDone + ' rightDone:' + rightDone)

            if(leftDone && rightDone) {
                break
            }
        }
        
        return newList
    }

    public static sortListByDistanceToColumnIndex3(list:number[]):number[] {
        // let newList:number[] = []

        // for(const index of list) {
        //     newList.push(Math.abs(index - 3))
        // }

        // newList.sort((a:number, b:number) => {
        //     return a -b
        // })

        // console.log(newList)
        // return newList
        let newList:number[] = []
        newList = Array.from(list)
        newList.sort((a:number, b:number) => {
            return Math.abs(a-3) - Math.abs(b-3)
        })

        // console.log(newList)
        return newList
    }

    public static alphabeta(board:string[][], depth:number, alpha:number, beta:number,
                            isMaximizingPlayer:Boolean, maximizerId: string, evalFn:any, nextMovesFn:any, copyBoard:boolean, stats:any) {
        // console.log(`alphabeta(depth:${depth}, alpha:${alpha}, beta:${beta}, isMax:${isMaximizingPlayer}, maxId:${maximizerId})`)
        // console.log(board)
        if(depth == 0 || Util.isGameOver(board)) {
            let value = evalFn(board, maximizerId)
            // console.log('evaluation value:' + value)
            if(value == 10000) {
                value += depth
            } else if(value == -10000) {
                value -= depth
            }
            if (stats !== null) {
                stats.numEvals++
            }
            return value
        }
        if(isMaximizingPlayer) {
            let value = -Infinity
            const nextMoves = nextMovesFn(board)
            for(const nextMove of nextMoves) {

                let boardToWorkOn = null
                if(copyBoard) {
                    boardToWorkOn = Util.moveOnBoard(board, nextMove, maximizerId)
                } else {
                    boardToWorkOn = Util.moveOnBoardWithoutCopy(board, nextMove, maximizerId)
                }

                const valueReturned = Util.alphabeta(boardToWorkOn, depth-1, alpha, beta, false, maximizerId, evalFn, nextMovesFn, copyBoard, stats)

                if(copyBoard === false) {
                    Util.unmoveOnBoardWithoutCopy(boardToWorkOn, nextMove, maximizerId)
                }

                if (valueReturned > value) {
                    value = valueReturned
                }

                alpha = Math.max(alpha, value)
                if(alpha >= beta) {
                    // console.log('pruning depth:' + depth + ' move:' + nextMove)
                    break
                }
            }
            return value
        } else {
            let value = Infinity
//            maximizerId = maximizerId == 'X' ? 'O' : 'X'
            const nextMoves = nextMovesFn(board)
            for(const nextMove of nextMoves) {
                const minimizerId = (maximizerId == 'X' ? 'O' : 'X')
                let boardToWorkOn = null
                if(copyBoard) {
                    boardToWorkOn = Util.moveOnBoard(board, nextMove, minimizerId)
                } else {
                    boardToWorkOn = Util.moveOnBoardWithoutCopy(board, nextMove, minimizerId)
                }


                // console.log('000 loop inside alphabeta')
                // Util.dumpBoard(boardToWorkOn, 6, 7)
                
                const valueReturned = Util.alphabeta(boardToWorkOn, depth-1, alpha, beta, true, maximizerId, evalFn, nextMovesFn, copyBoard, stats)

                if(copyBoard === false) {
                    Util.unmoveOnBoardWithoutCopy(boardToWorkOn, nextMove, minimizerId)
                }

                // console.log('111 loop inside alphabeta')
                // Util.dumpBoard(boardToWorkOn, 6, 7)
                
                //console.log('move:' + nextMove + ' | valueReturned:' + valueReturned + ' | value:' + value + ' | alpha:' + alpha + ' | beta:' + beta)

                if(valueReturned < value) {
                    value = valueReturned
                }

                beta = Math.min(beta, value)
                if(alpha >= beta) {
                    // console.log('pruning depth:' + depth + ' move:' + nextMove)
                    break
                }
            }
            return value
        }
    }

    public static alphabetaSearch(board:string[][], depth:number, aiToken:string, evalFn:any, nextMovesFn:any, copyBoard:boolean, stats:any) {
        // console.log('alphabetaSearch')
        let value = -Infinity
        let columnIx = -1
        let alpha = -Infinity
        let beta = Infinity

        const nextMoves = nextMovesFn(board)
        console.log('nextmoves.length:' + nextMoves.length)
        for(let move of nextMoves) {

            const progressBar:HTMLProgressElement|null = document.querySelector('.aiprogress')
            if (progressBar) {
                progressBar.value += 100/(nextMoves.length)
            }

            let boardToWorkOn = null
            if (copyBoard) {
                boardToWorkOn = Util.moveOnBoard(board, move, aiToken)
            }
            else {
                boardToWorkOn = Util.moveOnBoardWithoutCopy(board, move, aiToken)                
            }

            // console.log('000 loop inside alphabetaSearch')
            // Util.dumpBoard(boardToWorkOn, 6, 7)
            
            const returnValue = Util.alphabeta(boardToWorkOn, depth-1, alpha, beta, false, aiToken, evalFn, nextMovesFn, copyBoard, stats)
            // console.log('returnValue:' + returnValue + ' value:' + value)


            if (copyBoard === false) {
                Util.unmoveOnBoardWithoutCopy(boardToWorkOn, move, aiToken)
            }

            // console.log('111 loop inside alphabetaSearch')
            // Util.dumpBoard(boardToWorkOn, 6, 7)

            if(returnValue > value) {
                value = returnValue
                columnIx = move
            }

            // console.log('1 columnIx:' + columnIx)

            alpha = Math.max(alpha, value)
            if(alpha >= beta) {
                // console.log('pruning depth:' + depth + ' move:' + move)
                break
            }

        }
        // console.log('2 columnIx:' + columnIx)
//        const [, moveToReturn] = Util.alphabeta(board, depth, -Infinity, Infinity, true, aiToken)
        return columnIx
    }



    public static aiMove(board:string[][], depth:number, aiToken:string) {
        // console.log('aiMove()')
        // return Util.minimax_search(board, 5, aiToken)
        // console.log('aiDepth:' + depth)
        return Util.alphabetaSearch(board, depth, aiToken, Util.evaluateBoardFor, Util.nextMovesCenterFirst, false, null)
    }
}

export default Util