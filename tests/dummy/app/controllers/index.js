import Ember from 'ember';

export default Ember.Controller.extend({
  testParam1: 'Simple string',
  testParam2: 23,
  testParam3: {debug: true},
  testParam4: [1,3],
  testParam5: null,
  testParam6: undefined
});
