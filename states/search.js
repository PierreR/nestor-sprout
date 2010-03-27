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
    this._setView("Nestor.searchFilePage.mainView");
    this._controller.set('content', Nestor.store.find(Nestor.File)); 
    this._controller.reset();
  },
  
  willLoseFirstResponder: function() {    
    this._setView("Nestor.selectFilePage.mainView");
  },
  
  // ..........................................................
  // EVENTS
  //
  openSelectedItem: function() {
    Nestor.makeFirstResponder(Nestor.SELECT);
  },
  
  searchFiles: function() {
    this._controller.searchFiles();
  },

  _setView: function(value) {
    Nestor.mainPage.mainPane.middleView.set("nowShowing", value);
  },

  // Managed controller
  _controller: Nestor.searchFilesController
}) ;
