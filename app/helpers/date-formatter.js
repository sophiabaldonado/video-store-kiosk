import Ember from 'ember'
import moment from 'moment'

export function dateFormatter(params/*, hash*/) {
  let date = params[0]
  let format
  if (typeof(format) !== 'string') {
    format = 'MMMM DD, YYYY';
  }
  return moment(date).format(format);
}

export default Ember.Helper.helper(dateFormatter);
