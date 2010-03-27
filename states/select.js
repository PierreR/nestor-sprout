// ==========================================================================
// Project:   Nestor.SELECT
// Copyright: ©2010 CIRB/CIBG
// ==========================================================================
/*globals Nestor */

/** @class
  
  A file has been selected by the user.

  @extends SC.Responder
  @version 0.1
*/
Nestor.SELECT = SC.Responder.create(
/** @scope Nestor.SELECT.prototype */ {

  /**
    The next state to check if this state does not implement the action.
  */
  nextResponder: null,
  
  didBecomeFirstResponder: function() {
    Nestor.searchFilesController.set('searchMode', NO);
  },
  
  willLoseFirstResponder: function() {
  },
  
  // ..........................................................
  // EVENTS
  //
  
  // add event handlers here
  searchFiles: function() {
    Nestor.makeFirstResponder(Nestor.SEARCH);
  }

}) ;
