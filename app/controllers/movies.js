import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    toggleSelected() {
      console.log(this)
      this.toggleProperty('selected');
    }
  }
});
