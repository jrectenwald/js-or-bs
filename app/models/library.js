import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  libType: DS.attr('string', { defaultValue: 'library' })
});
