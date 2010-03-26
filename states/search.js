// ==========================================================================
// Project:   Nestor.SEARCH
// Copyright: ©2010 CIRB/CIBG
// ==========================================================================
/*globals Nestor */

/** @class

  The user is searching for a specific file.

  @extends SC.Responder
  @version 0.1
*/
Nestor.SEARCH = SC.Responder.create(
/** @scope Nestor.SEARCH.prototype */ {

  openSelectedItem: function() {
    var sourceController, firstTreeItem;

    sourceController = Nestor.sourceProjectsController;
    firstTreeItem = sourceController.get('arrangedObjects').objectAt(0);
    sourceController.selectObject(firstTreeItem);
    
    Nestor.mainPage.mainPane.middleView.dividerView.doubleClick();
  },
  
  /**
    The next state to check if this state does not implement the action.
  */
  nextResponder: null,
  
  didBecomeFirstResponder: function() {
    var controller = Nestor.searchFilesController,
        result;

    result = Nestor.store.find(Nestor.File);
    controller.set('content', result); 
  },
  
  willLoseFirstResponder: function() {
    // Called when this state loses first responder
  },
  
  // ..........................................................
  // EVENTS
  //
  
  // add event handlers here
  someAction: function() {
    
  }
  
}) ;
