import Ember from 'ember';

export default Ember.Controller.extend({
  randomLibrary: Ember.computed('libraryToggle', function(){
     var libraries = this.model.libraries.toArray();
     var randomLibraryIndex = Math.floor(Math.random() * (libraries.length - 1) + 1);
     return libraries[randomLibraryIndex];
  }).property(),
  randomFakeLibrary: Ember.computed('libraryToggle', function(){
    var fakeLibraries = this.model.fakeLibraries.toArray();
    var randomdFakeLibraryIndex = Math.floor(Math.random() * (fakeLibraries.length - 1) + 1);
    return fakeLibraries[randomdFakeLibraryIndex];
  }).property()
  // actions: {

  // }
});