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
  var files, contextMenu, menuRoot;
  // Step 1: Instantiate Your Views
  // The default code here will make the mainPane for your application visible
  // on screen.  If you app gets any level of complexity, you will probably 
  // create multiple pages and panes.  
  Nestor.getPath('mainPage.mainPane').append() ;

  // Step 2. Set the content property on your primary controller.
  // This will make your app come alive!

  files = Nestor.store.find(Nestor.File);
  Nestor.filesController.set('content', files);  

  // init static data
  Nestor.sourceProjectsController.refreshSources();
  // contextMenu = Nestor.store.find(Nestor.ContextMenu).toArray();
  // menuRoot = SC.Object.create(SC.TreeItemContent, {
  //   treeItemIsGrouped: YES,
  //   treeItemChildren: contextMenu
  // }); 
  // console.info(contextMenu);
  // Nestor.contextMenuController.set('content', menuRoot) ;
  //TODO a bit hacky
  Nestor.mainPage.mainPane.middleView.dividerView.doubleClick();


} ;

function main() { Nestor.main(); }
