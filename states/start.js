// ==========================================================================
// Project:   Nestor.START
// Copyright: ©2010 CIRB/CIBG
// ==========================================================================
/*globals Nestor */

/** @class

  Initial state of the application:
    - the user is searching for a specific file.

  @extends SC.Responder
  @version 0.1
*/
Nestor.START = SC.Responder.create(
/** @scope Nestor.START.prototype */ {

  /**
    The next state to check if this state does not implement the action.
  */
  nextResponder: null,
  
  didBecomeFirstResponder: function() {
    this._setMiddleView();
    this._searchController.set('content', Nestor.store.find(Nestor.File)); 
    this._searchController.reset();
  },
  
  willLoseFirstResponder: function() {    
    this._searchController.setCriteriaFields();
  },
  
  // ..........................................................
  // EVENTS
  //
  openSelectedItem: function() {
    if (this._searchController.hasSelection()) {
      Nestor.makeFirstResponder(Nestor.FILE);
    }
  },
  
  searchFiles: function() {
    this._searchController.search();
  },

  _setMiddleView: function() {
    Nestor.mainPage.mainPane.middleView.set("nowShowing", 'Nestor.searchFilePage.mainView');
  },

  // Managed controller
  _searchController: Nestor.searchFilesController

}) ;
