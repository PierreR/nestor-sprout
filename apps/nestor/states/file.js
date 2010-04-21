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
    this._setMiddleView();
  },
  
  willLoseFirstResponder: function() {
  },
  
  // ..........................................................
  // EVENTS
  //
  showHomeScreen: function() {
    Nestor.makeFirstResponder(Nestor.START);
  },
  
  openSelectedItem: function() {
    if (this._operationsController.hasSelection()) {
      Nestor.makeFirstResponder(Nestor.OPERATION);
    }
  },

  searchFiles: function() {
    Nestor.makeFirstResponder(Nestor.START);
  },

  // Private attributes
  _setMiddleView: function() {
    Nestor.mainPage.mainPane.middleView.set("nowShowing", 'Nestor.fileMPage.mainView');
  },

  // Managed controllers
  _operationsController: Nestor.operationsController

}) ;
