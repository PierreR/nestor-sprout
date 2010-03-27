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
  // Instantiate mainPage
  Nestor.getPath('mainPage.mainPane').append() ;
  // Populate the left tree with static data
  Nestor.sourceProjectsController.refreshSources();
  // GO into the search state
  Nestor.makeFirstResponder(Nestor.SEARCH);
} ;

function main() { Nestor.main(); }
