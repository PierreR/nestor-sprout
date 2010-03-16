// ==========================================================================
// Project:   Nestor.filesController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Nestor */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayController
*/
Nestor.filesController = SC.ArrayController.create(
/** @scope Nestor.filesController.prototype */ {
  position: 0,
  openSelectedItem: function() {
    console.log("coco");
    Nestor.mainPage.mainPane.middleView.dividerView.doubleClick();
  }

}) ;
