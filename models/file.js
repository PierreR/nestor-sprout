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
  contractType: SC.Record.attr(String),
  
  reference: function() {
    var ct, 
        type = this.get('contractType'),
        id = "3843 3124"; //TODO fake id for now
    //TODO insert all cases, this might go in a separate model anyway
    if (type === "_districtContract") {
      ct = "CQ";
    }
    return "%@%@".fmt(ct, id);
  }.property('contractType').cacheable(),

  townShip: SC.Record.attr(String),
	managerName: SC.Record.attr(String),
	grantDate: SC.Record.attr(SC.DateTime)
}) ;
