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
		grantDate: SC.DateTime.create(),
    operations: [1, 2, 3],
    planning: {description: "Conseil Communal-ROI de la CLDI", date: SC.DateTime.create()}
	},

	{ 
		guid: 2,
		name: "Eureka",
    reference: "DR 323 786",
    contractType: "Immeuble isolé",
    townShip: "Bruxelles",
		managerName: "Jim Dwight",
		grantDate: SC.DateTime.create(),
    operations: [4, 5]
	},

	{ 
		guid: 3,
		name: "Redpoison",
    reference: "IA 293 392",
    contractType: "Immeuble à l'abandon",
    townShip: "Saint-Gilles",
		managerName: "Michel Caron",
		grantDate: SC.DateTime.create(),
    operations: [6]
	},

	{ 
		guid: 4,
		name: "ProLux",
    reference: "DR 293 392",
    contractType: "Immeuble isolé",
    townShip: "Eterbeek",
		managerName: "François Cotillard",
		grantDate: SC.DateTime.create(),
    operations: [7]
	},

	{ 
		guid: 5,
		name: "Primavera",
    reference: "IA 293 392",
    contractType: "Immeuble à l'abandon",
    townShip: "Anderlecht",
		managerName: "Paul VanHimps",
		grantDate: SC.DateTime.create(),
    operations: [8]
	},

  { 
		guid: 6,
		name: "ElSolo",
    reference: "CQ 251 392",
    contractType: "Contract de quartier",
    townShip: "Bruxelles",
		managerName: "Kim Toenig",
		grantDate: SC.DateTime.create(),
    operations: []
	}

	];
