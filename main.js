// ==========================================================================
// Project:   Nestor
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Nestor */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
Nestor.main = function main() {
  var files; 
  // Step 1: Instantiate Your Views
  Nestor.getPath('mainPage.mainPane').append() ;
  // Step 2. Set the content property on your primary controller.
  files = Nestor.store.find(Nestor.File);
  Nestor.filesController.set('content', files);  

  // populate the left tree with data
  Nestor.sourceProjectsController.refreshSources();
  //TODO a bit hacky; we should use Responder to handle this
  Nestor.mainPage.mainPane.middleView.dividerView.doubleClick();


} ;

function main() { Nestor.main(); }
