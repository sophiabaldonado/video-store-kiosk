import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return $.getJSON("http://localhost:3000")
  }
});
