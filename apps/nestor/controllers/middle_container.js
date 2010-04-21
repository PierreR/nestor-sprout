// ==========================================================================
// Project:   Nestor.middleContainerController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Nestor */

/** @class
  
  Proxy to the selected item in the project tree. 

  @extends SC.Object
*/
Nestor.middleContainerController = SC.ObjectController.create(
/** @scope Nestor.middleContainerController.prototype */ {
  contentBinding: 'Nestor.sourceProjectsController*selection',
  nowShowing: function() {
    var page = this.get('page');
    if (page) {
      return 'Nestor.%@.mainView'.fmt(page);
    } else { 
      return  'Nestor.projectCPage.mainView';
    }
  }.property('page').cacheable()

}) ;
