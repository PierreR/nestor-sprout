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
  openSelectedItem: function() { //TODO: Change this and use a Responder chain instead
    var sourceController, firstTreeItem;

    sourceController = Nestor.sourceProjectsController;
    firstTreeItem = sourceController.get('arrangedObjects').objectAt(0);
    sourceController.selectObject(firstTreeItem);
    Nestor.mainPage.mainPane.middleView.dividerView.doubleClick();
  }

}) ;
