import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  title: attr(),
  overview: attr(),
  poster_filename: attr(),
  release_date: attr(),
  inventory: attr(),
  selected: attr('boolean', { defaultValue: false })
});
