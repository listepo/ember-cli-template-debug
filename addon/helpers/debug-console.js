import Ember from 'ember';

export function debugConsole(params) {
  if(params.length > 0) {
    console.debug(`debugConsole: params: ${params.length}`);
    console.debug('debugConsole: ----------------------');
    params.forEach((param, index) => {
      console.debug(`debugConsole: param: ${index}`);
      console.debug(`debugConsole: type: ${typeof param}`);
      if (param !== null && param !== undefined) {
        console.debug(`debugConsole: toString: ${param.toString()}`);
      }
      console.debug(`debugConsole: source: `, param);
      console.debug('debugConsole: ----------------------');
    });
  } else {
    console.warn("debugConsole: Empty params!");
  }
}

export default Ember.Helper.helper(debugConsole);
