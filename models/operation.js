// ==========================================================================
// Project:   Nestor.Operation
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Nestor */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Nestor.Operation = SC.Record.extend(
/** @scope Nestor.Operation.prototype */ {
  number: SC.Record.attr(Number),
  name: SC.Record.attr(String),
  description: SC.Record.attr(String)
  // project: SC.Record.toOne(Nestor.File)
}) ;
