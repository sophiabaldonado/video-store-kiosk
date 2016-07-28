import Ember from 'ember'
// import Model from '../models/movies'

export default Ember.Route.extend({

  model(params) {
    // console.log("beep: ", params.page)
    // return this.store.fetchMovies()
    // return $.getJSON("http://localhost:3000")
    // fetchMovies (page) {
      let page = params.page
      let pageNumber = page || 1
      // let movies = $.getJSON("http://localhost:3000/?page=" + pageNumber + "&size=10")
      // return movies
      return $.getJSON("http://localhost:3000/?page=" + pageNumber + "&size=10")
    // }
  },
  queryParams: {
    page: {
      refreshModel: true
    }
  }
})
