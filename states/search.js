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

  /**
    The next state to check if this state does not implement the action.
  */
  nextResponder: null,
  
  didBecomeFirstResponder: function() {
    var allFiles = Nestor.store.find(Nestor.File);
    Nestor.filesController.set('content', allFiles); 
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
