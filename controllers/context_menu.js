// ==========================================================================
// Project:   Nestor.contextMenuController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Nestor */

/** @class

 This is the root controller 

  @extends SC.TreeController
*/
Nestor.contextMenuController = SC.TreeController.create(
/** @scope Nestor.contextMenuController.prototype */ {
  containerView: 'Nestor.searchFilePage.mainView',
	content: null,
  treeItemIsGrouped: YES,
  
  allowsMultipleSelection: NO,
  allowsEmptySelection: NO
  
  
  // used to set the thickness of the sidebar.  bound here.
  // sidebarThickness: 200  // set default thickness in pixels
}) ;
