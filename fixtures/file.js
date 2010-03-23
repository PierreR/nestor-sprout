// ==========================================================================
// Project:   Nestor.File Fixtures
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Nestor */

sc_require('models/file');
/**
 * Fixture values will be sent translated by the backend
 */
Nestor.File.FIXTURES = [
	{
		guid: 1,
		name: "Brabant-Verte",
    reference: "CQ 212 221",
    contractType: "Contract de quartier",
    townShip: "Ixelles",
		managerName: "John Doe",
		grantDate: SC.DateTime.create()
	},

	{ 
		guid: 2,
		name: "Eureka",
    reference: "DR 323 786",
    contractType: "Immeuble isolé",
    townShip: "Bruxelles",
		managerName: "Jim Dwight",
		grantDate: SC.DateTime.create()
	},

	{ 
		guid: 3,
		name: "Redpoison",
    reference: "IA 293 392",
    contractType: "Immeuble à l'abandon",
    townShip: "Saint-Gille",
		managerName: "Michel Caron",
		grantDate: SC.DateTime.create()
	}

	];
