import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    var libraries = this.store.findAll('library')
    var fakeLibraries = this.store.findAll('fakeLibrary')
    var message = Ember.Object.create({text: "Pick a library"});
    return Ember.RSVP.hash({ libraries: libraries, fakeLibraries: fakeLibraries, libraryToggle: false, message: message})
   },
  actions: {
    submitLibrary(library, message) {
      debugger;
      if(library == "library") {
        this.model.message = "test";
      }
    }
  }
});



  // library: function() {
  //   var randLibraryIndex = Math.floor(Math.random() * (this.libraries.length - 1) + 1);
  //   return libraries[randLibraryIndex];
  // },
  // fakeLibrary: function() {
  //   var randFakeLibraryIndex = Math.floor(Math.random() * (this.fakeLibraries.length - 1) + 1);
  //   return fakeLibraries[randFakeLibraryIndex];
  // }


  //  var randomdLibraryIndex = null;
  //   var randomLibrary = null;
  //   var libraries = this.store.findAll('library').then(function() {
  //     debugger
  //     randomdLibraryIndex = Math.floor(Math.random() * (this.libraries.length - 1) + 1);
  //     randomLibrary = libraries[randLibraryIndex];
  //   })

  //   var randFakeLibraryIndex = null;
  //   var randomFakeLibrary = null;
  //   var fakeLibraries = this.store.findAll('fakeLibrary').then(function() {
  //     randFakeLibraryIndex = Math.floor(Math.random() * (this.fakeLibraries.length - 1) + 1);
  //     randomFakeLibrary = fakeLibraries[randFakeLibraryIndex];
  //   })

  //   return {libraries: libraries, fakeLibraries: fakeLibraries, randomLibrary: randomLibrary, randomFakeLibrary: randomFakeLibrary}
  // 