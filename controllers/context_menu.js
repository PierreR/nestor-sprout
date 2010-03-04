// ==========================================================================
// Project:   Nestor.contextMenuController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Nestor */

/** @class

  (Document Your Controller Here)

  @extends SC.TreeController
*/
Nestor.contextMenuController = SC.TreeController.create(
/** @scope Nestor.contextMenuController.prototype */ {

	 content: null,
  // TODO: Add your own code here. 
	// content: SC.Object.create({
	// 	isExpanded: YES, 
	// 	children:  [
	// 		SC.Object.create({
	// 			title: "Dossier", 
	// 			isEspanded: YES,
	// 			children: [
	// 				SC.Object.create({
	// 					title: "Create"
	// 				})
	// 			]
	// 		}),
	// 	SC.Object.create({title: "Projet"})
	// ]
	// }),

	// treeItemChildrenKey: "children",
  // treeItemIsExpandedKey: "isExpanded",
  treeItemIsGrouped: YES,
  
  allowsMultipleSelection: NO,
  allowsEmptySelection: NO,
  
  // used to set the thickness of the sidebar.  bound here.
  sidebarThickness: 200  // set default thickness in pixels
}) ;