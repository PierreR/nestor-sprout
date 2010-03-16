// ==========================================================================
// Project:   Nestor.middleContainerController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Nestor */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Nestor.middleContainerController = SC.ObjectController.create(
/** @scope Nestor.middleContainerController.prototype */ {
  contentBinding: 'Nestor.sourceProjectsController*selection',
  nowShowing: function() {
    var content = this.get('content');
    var page = content.getPath('firstObject.page');
    if (page) {
      return 'Nestor.%@.mainView'.fmt(content.getPath('firstObject.page'));
    } else { 
      return  'Nestor.searchFilePage.mainView';
    }
  }.property('content').cacheable()

}) ;
