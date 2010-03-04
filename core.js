// ==========================================================================
// Project:   Nestor
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Nestor */

/** @namespace

  My cool new app.  Describe your application.
  
  @extends SC.Object
*/
Nestor = SC.Application.create(
  /** @scope Nestor.prototype */ {

  NAMESPACE: 'Nestor',
  VERSION: '0.1.0',

  // This is your application store.  You will use this store to access all
  // of your model data.  You can also set a data source on this store to
  // connect to a backend server.  The default setup below connects the store
  // to any fixtures you define.
  store: SC.Store.create().from(SC.Record.fixtures),


	/**
    An array of all the chained stores that current rely on the receiver 
    store.
    @param {Array|String} 
		@returns 
			one SC.Object that can serve as the content of a SC.TreeController
			or as a member of TreeItemChildren
  */
	contextMenu: function(node, title) {
		var i, head, tail, children, ret, isExpanded;

		// if no title is passed, you are on the root node: isExpanded needs to be true
		isExpanded = title ? NO: YES;
		// Use a dummy title for the root to insuring you can savely call .loc 
		title = title || "ROOT";
		if (SC.isArray(node)) {
			children = [];
			for (i=0; i< node.length; i = i+1) {
				head = node[i];
				tail = node[i+1];
				if (SC.isArray(tail)) {
					children.push(this.contextMenu(tail, head));
					i = i + 1;
				} else  {
					children.push(this.contextMenu(null, head));
				}
			}
		}		
		ret = SC.Object.create({
			treeItemIsExpanded: isExpanded,				
			title: title.loc(),
			treeItemChildren: children
		});

		return ret;
	}
});
