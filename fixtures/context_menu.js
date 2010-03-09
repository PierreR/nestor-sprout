// ==========================================================================
// Project:   Nestor.ContextMenu Fixtures
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Nestor */

sc_require('models/context_menu');

Nestor.ContextMenu.FIXTURES = [

  { guid: 1,
    name: '_file',
		treeItemIsExpanded: YES,
		treeItemChildren: [1, 2] },
  
  { guid: 2,
    name: '_project',
		treeItemChildren: [3, 4, 5] },
	
	{ guid: 3,
    name: '_accounting',
    treeItemChildren: [] }

];
