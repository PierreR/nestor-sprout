
// ==========================================================================
// Project:   Nestor.fileMPage
// Copyright: ©2010 CIRB/CIBG
// ==========================================================================
/*globals Nestor */

/** @class

  Page displayed in the Main area at file state.
  Tree/Context
  @extends SC.Page
*/
Nestor.fileMPage = SC.Page.create({
  /** @scope Nestor.fileMPage.prototype */ 
  mainView: SC.SplitView.design({
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
        layout: {left: 10, top : 400 },
        // nowShowing: 'Nestor.selectProjectPage.mainView',
        // backgroundColor: 'blue',
        nowShowingBinding: SC.Binding.from('Nestor.middleContainerController*nowShowing').oneWay(),
        canCollapse: NO   
    })
  })
});
