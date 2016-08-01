import Ember from 'ember';

export default Ember.Controller.extend({
  page: 1,
  selected: null,
  queued: [],
  actions: {
    toggleSelected (id) {
      // console.log('beep: ', id)
      // console.log('boop: ', this.selected)
      this.set('selected', id)
    },
    addToQueue (id) {
      console.log('beep: ', id)
      console.log('boop: ', this.queued)
      this.get('queued').push(id)
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
