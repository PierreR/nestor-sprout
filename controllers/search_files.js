// ==========================================================================
// Project:   Nestor.searchFileController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Nestor */

/** @class

  Manages the data found in the TextFieldView of Indicator
  The binding is a bit wicket because on Search state:
    - on Search state, the view is interested by a binding TO the controller fields
    - on Selection state, the view needs a binding FROM the selection of the filesController

  The way it is managed here is by using a bidirectionnal binding for each search fields in the view to/from this controller.
  The 5 fields will be set only after selection in the filesController.

  We are not using the content property in this controller which might indicate it is not the right solution ...
  On the other, using a responder and binding a view to a responder does not look like a better idea.

  Using the selection of the filesController as content is not better because we will need to override content.binding on search state for each search  field anyway.Document Your Controller Here)

  @extends SC.ArrayController
*/
Nestor.searchFilesController = SC.ArrayController.create(
/** @scope Nestor.searchFilesController.prototype */ {

  content: null,
  
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
