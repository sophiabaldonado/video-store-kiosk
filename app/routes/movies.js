import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    let movies = ['movie1', 'movie2']
    // console.log($.getJSON("http://localhost:3000"))
    return $.getJSON("http://localhost:3000")
    // return movies
  }
});
