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
    contractType: "_districtContract",
    townShip: "Ixelles",
		managerName: "John Doe",
		grantDate: SC.DateTime.create()
	},

	{ 
		guid: 2,
		name: "File-2",
    contractType: "_districtContract",
    townShip: "Bruxelles",
		managerName: "Jim Dwight",
		grantDate: SC.DateTime.create()
	},

	{ 
		guid: 3,
		name: "File-3",
    contractType: "_districtContract",
    townShip: "Saint-Gille",
		managerName: "Michel Caron",
		grantDate: SC.DateTime.create()
	}

	];
