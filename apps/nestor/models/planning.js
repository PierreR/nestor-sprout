// ==========================================================================
// Project:   Nestor.Planning
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Nestor */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Nestor.Planning = SC.Record.extend(
/** @scope Nestor.Planning.prototype */ {
	description: SC.Record.attr(String),
  date: SC.Record.attr(SC.DateTime)
}) ;
