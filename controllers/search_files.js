// ==========================================================================
// Project:   Nestor.searchFileController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Nestor */

/** @class

  Manages the data displayed by the 5 fields found in the IndicatorView.
  The binding is a bit wicket because:
    - on Search state, the view is interested in binding TO the controller fields
    - on Selection state, the view needs a binding FROM the selection of this controller.

  The way it is managed here is by using a bidirectionnal binding for each search fields in the view to/from this controller.
  The 5 fields will be set by the observer function as soon as a selection is made by the user.

  @extends SC.ArrayController
*/
Nestor.searchFilesController = SC.ArrayController.create(
/** @scope Nestor.searchFilesController.prototype */ {

  content: null, // will contain the filtered files displayed (by a TableView)
  
  reference: null,
  name: null,
  contractType: null,
  managerName: null,
  townShip: null,

  selectionDidChange: function() {
    var sel = this.get('selection').get('firstObject');
    this.set('reference', sel.get('reference'));
    this.set('name', sel.get('name'));
    this.set('contractType', sel.get('contractType'));
    this.set('managerName', sel.get('managerName'));
    this.set('townShip', sel.get('townShip'));
  }.observes('selection')


}) ;
