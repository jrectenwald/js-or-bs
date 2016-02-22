import Ember from 'ember';

export default Ember.Controller.extend({
  libraryToggle: Ember.Object.create({value: false}),
  randomNum: Ember.Object.create({
    value: Math.random()
  }),
  score: Ember.Object.create({right:0, wrong:0}),

  libraryObject1: function() {
    var num = this.get("randomNum.value");
    if (num > 0.5){
      return this.get("randomLibrary");
    }else{
      return this.get("randomFakeLibrary");
    }
  }.property("libraryToggle.value"),

  libraryObject2: function(){
    var num = this.get("randomNum.value");
    if (num > 0.5){
      return this.get("randomFakeLibrary");
    }else{
      return this.get("randomLibrary");
    }
  }.property("libraryToggle.value"),

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

  getRandomNumber: function(){
    var random = Math.random();
    this.set("randomNum.value", random);
    return this.get("randomNum.value");
  }.property("libraryToggle.value")


});
