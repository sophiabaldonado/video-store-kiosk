import DS from 'ember-data'

export default DS.Adapter.extend({
  host: 'http://localhost:3000/',
  query: function (store, type, query) {
    var url = this.host
    return new Ember.RSVP.Promise(function (resolve, reject) {
      Ember.$.getJSON(url, query).then(function (data) {
        Ember.run(null, resolve, data)
      }, function (jqXHR) {
        jqXHR.then = null
        Ember.run(null, reject, jqXHR)
      })
    })
  },
  // findRecord: function (store, type, query) {
  //   var url = this.host
  //   return new Ember.RSVP.Promise(function (resolve, reject) {
  //     Ember.$.getJSON(url, query).then(function (data) {
  //       let movie
  //       for (let i of data) {
  //         if (movie.id === query) {
  //           movie = i
  //         }
  //       }
  //       Ember.run(null, resolve, movie)
  //     }, function (jqXHR) {
  //       jqXHR.then = null
  //       Ember.run(null, reject, jqXHR)
  //     })
  //   })
  // }
})
