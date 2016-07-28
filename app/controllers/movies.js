import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['page', 'size'],
  page: 1,
  actions: {
    toggleSelected () {
      console.log("controller: ", this.page)

      // console.log("boo: ", this)
      this.toggleProperty('selected');
    },
    navForward () {

      let nextPage = this.page + 1
      this.set('page', nextPage)
      // model({page: nextPage})
    }
  }
});
