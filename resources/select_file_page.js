
// ==========================================================================
// Project:   Nestor.SearchView
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Nestor */

/** @class

  (Document Your View Here)

  @extends SC.Page
*/
Nestor.selectFilePage = SC.Page.create({
  /** @scope Nestor.selectFilePage.prototype */ 
  mainView: SC.SplitView.design({
    // layout: { left: 0, top: 64, bottom: 35, right: 0 },
    defaultThickness: 0.2, 
    dividerThickness: 5,
    topLeftView: SC.ScrollView.design({
      contentView: SC.SourceListView.design({
        contentBinding: "Nestor.sourceProjectsController.arrangedObjects",
        selectionBinding: "Nestor.sourceProjectsController.selection",
        contentValueKey: 'displayName',
        canReorderContent: NO,
        canDeleteContent: NO,
        canEditContent: NO,
        hasContentIcon: NO,
        contentUnreadCountKey: 'count',
        canCollapse: NO
        // contentIconKey:  'icon'
        // action: 'selectTarget'
      })
    }),
    bottomRightView: SC.ContainerView.design({
      // nowShowingBinding: SC.Binding.from('Nestor.middleContainerController*nowShowing').oneWay(),
      canCollapse: YES
    })
  })
});
