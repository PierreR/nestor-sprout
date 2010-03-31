// ==========================================================================
// Project:   Nestor.OPERATION
// Copyright: ©2010 CIRB/CIBG
// ==========================================================================
/*globals Nestor */

/** @class

  An Operation has been selected.

  @extends SC.Responder
  @version 0.1
*/
Nestor.OPERATION = SC.Responder.create(
/** @scope Nestor.OPERATION.prototype */ {

  /**
    The next state to check if this state does not implement the action.
  */
  nextResponder: null,
  
  didBecomeFirstResponder: function() {
    console.log('Operation is now the first responder');
    this._setMiddleView();
  },
  
  willLoseFirstResponder: function() {
    // Called when this state loses first responder
  },
  
  // ..........................................................
  // EVENTS
  //
  // add event handlers here
  someAction: function() {
    
  },
   
  // Private attributes
  _setMiddleView: function() {
    Nestor.mainPage.mainPane.middleView.set("nowShowing", 'Nestor.selectOperationPage.mainView');
  }
  
}) ;
