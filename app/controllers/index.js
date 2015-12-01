import Ember from 'ember';

export default Ember.Controller.extend({
  randomLibrary: Ember.computed('libraryToggle', 'libraries', function(){
     var libraries = this.model.libraries;
    debugger
     var randLibraryIndex = Math.floor(Math.random() * (this.libraries.length - 1) + 1);
     return libraries[randLibraryIndex];
  }).property(),
  randomFakeLibrary: Ember.computed('libraryToggle', 'fakeLibraries', function(){
    var fakeLibraries = this.model.fakeLibraries;
    var randomdFakeLibraryIndex = Math.floor(Math.random() * (this.fakeLibraries.length - 1) + 1);
    return randomFakeLibrary = fakeLibraries[randFakeLibraryIndex];
  }).property()
  // actions: {

  // }
});
