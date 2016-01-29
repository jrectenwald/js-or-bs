import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitLibrary: function(library, message) {
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
