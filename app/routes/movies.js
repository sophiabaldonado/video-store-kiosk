import Ember from 'ember'
// import Model from '../models/movies'

export default Ember.Route.extend({
  model(params) {
      // let page = params.page
      // let pageNumber = page || 1
      // console.log("halp: ", this.model)
      // return $.getJSON("http://localhost:3000/?page=" + pageNumber + "&size=10")
      return this.store.query('movie', {
        page: params.page || 1
      })
  },
  queryParams: {
    page: {
      refreshModel: true
    },
    selected: {
      refreshModel: true
    },
    queued: {
      refreshModel: true
    }
  }
})
//
// this.store.query('movie', { page: 1 })
// .then(function (model) {
//   return { movies: movies }
// })
