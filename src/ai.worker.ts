import Util from './Util'

// console.log('ai.worker.ts !!!')

// Post data to parent thread
//postMessage({ foo: 'foo' });

// Respond to message from parent thread
addEventListener('message', (event) => {
    // console.log('worker received message from main thread')
    // console.log(event.data)
    const aiColumn = Util.aiMove(event.data.board, event.data.depth, event.data.aiMark)
    postMessage({colIx: aiColumn})
});