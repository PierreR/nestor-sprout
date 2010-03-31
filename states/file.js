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
Nestor.FILE = SC.Responder.create(
/** @scope Nestor.FILE.prototype */ {

  /**
    The next state to check if this state does not implement the action.
  */
  nextResponder: null,
  
  didBecomeFirstResponder: function() {
    Nestor.searchFilesController.setCriteriaFields();
  },
  
  willLoseFirstResponder: function() {
  },
  
  // ..........................................................
  // EVENTS
  //
  openSelectedItem: function() {
    if (this._searchController.hasSelection()) {
      Nestor.makeFirstResponder(Nestor.OPERATION);
    }
  },
  searchFiles: function() {
    Nestor.makeFirstResponder(Nestor.START);
  }

}) ;
