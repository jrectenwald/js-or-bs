import Ember from 'ember';

export default Ember.Controller.extend({
  libraryToggle: Ember.Object.create({value: false}),
  randomLibrary: function(){
     var libraries = this.model.libraries.toArray();
     var randomLibraryIndex = Math.floor(Math.random() * (libraries.length - 1) + 1);
     return libraries[randomLibraryIndex];
  }.property("libraryToggle.value"),
  randomFakeLibrary: function(){
    var fakeLibraries = this.model.fakeLibraries.toArray();
    var randomdFakeLibraryIndex = Math.floor(Math.random() * (fakeLibraries.length - 1) + 1);
    return fakeLibraries[randomdFakeLibraryIndex];
  }.property("libraryToggle.value"),

  actions: {
    submitLibrary(library, message) {
      this.libraryToggle.toggleProperty("value");
      if(library == "library") {
        message.set("text", "That is correct!");
      } else if(library == "fakeLibrary"){
        message.set("text", "Nope!");
      } else {
        message.set("text", "Winter is coming.");
      }
    }
  }
  
});