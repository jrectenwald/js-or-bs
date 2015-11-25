import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    var libraries = this.store.findAll('library');
    var fakeLibraries = this.store.findAll('fakeLibrary');
    return {libraries: libraries, fakeLibraries: fakeLibraries}
  }
});