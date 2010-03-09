// ==========================================================================
// Project:   Nestor.ContextMenu
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Nestor */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Nestor.ContextMenu = SC.Record.extend( SC.TreeItemContent,
/** @scope Nestor.ContextMenu.prototype */ {
	 
	name: SC.Record.attr(String),

	displayName: function() {
		var name = this.get('name');
		return name.loc();
	}.property('name').cacheable(),

	treeItemIsExpanded: SC.Record.attr(Boolean, {defaultValue: NO}),
	
	treeItemChildren: SC.Record.toMany('Nestor.ContextMenuItem')	
	
}) ;
