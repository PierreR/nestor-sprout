// ==========================================================================
// Project:   Nestor.ContextMenuItem
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Nestor */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Nestor.ContextMenuItem = SC.Record.extend( SC.TreeItemContent,
/** @scope Nestor.ContextMenuItem.prototype */ {

  parent: SC.Record.toOne('Nestor.ContextMenu'),
	name : SC.Record.attr(String),
	displayName: function() {
		var name = this.get('name');
		return name.loc();
	}.property('name').cacheable(),

	container: SC.Record.attr(String)

}) ;
