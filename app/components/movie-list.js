import Ember from 'ember';

export default Ember.Component.extend({
  selected: false,
  actions: {
    toggleSelected (){
      this.toggleProperty('selected')
    }
  }
});