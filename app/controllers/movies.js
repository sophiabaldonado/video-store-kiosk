import Ember from 'ember';

export default Ember.Controller.extend({
  page: 1,
  id: 1,
  selectedMovie: Ember.computed('id', function () {
    // return model
  }),
  selectedId: null,
  thisId: null,
  checkId: Ember.computed('selectedId', 'thisId', function () {
    if (this.get('selectedId') == this.get('thisId')) {
      return true
    } else {
      return false
    }
  }),
  selectedTitle: null,
  selectedOverview: null,
  selected: null,
  queued: new Set(),
  actions: {
    toggleSelected (title, overview, id, thisMovie) {
      // var movie = this.get('store').findRecord('movie', id)
      // console.log('beep: ', movie)
      if (id === this.selectedId) {
        this.toggleProperty('isSelected')
      }
      this.set('selectedOverview', overview)
      this.set('selectedTitle', title)
      this.set('selectedId', id)
      console.log($(thisMovie))
      $(thisMovie).classList.toggle("flip")
    },
    addToQueue (id) {
      console.log('bip: ', this.queued)
      this.get('queued').add(id)
    },
    navForward () {
      let nextPage = this.page + 1
      if (this.selected) {
        this.toggleProperty('selected')
      }
      this.set('page', nextPage)
    },
    navBack () {
      let prevPage
      if (this.page === 1) {
        prevPage = 1
      } else {
        prevPage = this.page - 1
      }
      if (this.selected) {
        this.toggleProperty('selected')
      }
      this.set('page', prevPage)
    }
  }
})
