// ==========================================================================
// Project:   Nestor.File Fixtures
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Nestor */

sc_require('models/file');

Nestor.File.FIXTURES = [
	{
		guid: 1,
		name: "File-1",
		managerName: "Michael",
		grantDate: SC.DateTime.create()
	},

	{ 
		guid: 2,
		name: "File-2",
		managerName: "Dwight",
		grantDate: SC.DateTime.create()
	},

	{ 
		guid: 3,
		name: "File-3",
		managerName: "Jim",
		grantDate: SC.DateTime.create()
	}

	];
