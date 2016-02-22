import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitLibrary: function(library, message, score) {
      this.libraryToggle.toggleProperty("value");
      if(library === "library") {
        var newScore = score.right + 1;
        score.set("right", newScore);
        message.set("text", "That is correct!");
        message.set("divClass", "alert alert-dismissible alert-success");

      } else if(library === "fakeLibrary"){
        var newScore = score.wrong + 1;
        score.set("wrong", newScore);
        message.set("text", "Nope!");
        message.set("divClass", "alert alert-dismissible alert-danger")
      } else {
        message.set("text", "Winter is coming.");
      }
    }
  }
});
