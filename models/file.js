// ==========================================================================
// Project:   Nestor.File
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Nestor */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Nestor.File = SC.Record.extend(
/** @scope Nestor.File.prototype */ {
	name: SC.Record.attr(String),
	managerName: SC.Record.attr(String),
	grantDate: SC.Record.attr(SC.DateTime)
}) ;
