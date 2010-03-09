// ==========================================================================
// Project:   Nestor.ContextMenuItem Fixtures
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Nestor */

sc_require('models/context_menu_item');

Nestor.ContextMenuItem.FIXTURES = [

  { guid: 1,
    name: '_search',
		container: 'Nestor.searchFilePage.mainView',
		parent: 1 },
  
  { guid: 2,
		name: '_create',
		container: 'Nestor.createFilePage.mainView',
    parent: 1 },
  
  { guid: 3,
    name: '_publicOperation',
    parent: 2 },
  
  { guid: 4,
    name: 'PPP',
    parent: 2 },
  
  { guid: 5,
    name: '_nextOne',
    parent: 2 }

];
