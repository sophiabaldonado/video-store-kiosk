import Ember from 'ember';

export default Ember.Controller.extend({
  page: 1,
  selectedMovie: 1,
  queued: [],
  actions: {
    toggleSelected (id) {
      // console.log('robot: ', model)

      // this.store.findRecord('movie', this.selectedMovie).then(function(mov) {
      //   mov.set('selected', false);
      // })
      // this.store.findRecord('movie', id).then(function(mov) {
      //   mov.set('selected', true);
      // })
      this.toggleProperty('selected')
      this.set('selectedMovie', id)
    },
    addToQueue (movie) {
      this.get('queued').pushObject(movie)
    },
    removeFromQueue (movie) {
      this.get('queued').removeObject(movie)
    },
    clearQueue () {
      this.set('queued', [])
    },
    navForward () {
      let nextPage = this.page + 1
      this.set('page', nextPage)
    },
    navBack () {
      let prevPage
      if (this.page === 1) {
        prevPage = 1
      } else {
        prevPage = this.page - 1
      }
      this.set('page', prevPage)
    }
  }
})
