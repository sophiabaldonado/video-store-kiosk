import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['page', 'size'],
  page: 1,
  actions: {
    toggleSelected () {
      this.toggleProperty('selected');
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
        this.set('page', prevPage)
      }
    }
  }
});
