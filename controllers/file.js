// ==========================================================================
// Project:   Nestor.fileController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Nestor */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Nestor.fileController = SC.ObjectController.create(
/** @scope Nestor.fileController.prototype */ {
  contentBinding: 'Nestor.filesController.selection',
  name: null,
  contractType: null,
  managerName: null,
  townShip: null,

  hasContentDidChange: function() {
    if (this.hasContent()) {
      this.set('name', this.getPath('content.name'));
      this.set('contractType', this.getPath('content.contractType'));
      this.set('managerName', this.getPath('content.managerName'));
      this.set('townShip', this.getPath('content.townShip'));
    }
  }.observes('hasContent')
  
  

}) ;
