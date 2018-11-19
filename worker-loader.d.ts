declare module 'worker-loader!*' {
    class WebpackWorker extends Worker {
      constructor();
    }
  
    // noinspection JSUnusedGlobalSymbols
    export default WebpackWorker;
  }
  
  // noinspection TsLint
  declare function postMessage(message: any, transfer?: any[]): void;