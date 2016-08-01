import Ember from 'ember';

export function ifCond(params/*, hash*/) {
  console.log("moop: ", params)
}

export default Ember.Helper.helper(ifCond);
