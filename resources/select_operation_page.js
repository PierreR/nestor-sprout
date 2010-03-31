// ==========================================================================
// Project:   Nestor.selectOperationPage
// Copyright: ©2010 CIRB/CIGB
// ==========================================================================
/*globals Nestor */

/** @class

  This page displays all the information about a specific operation 

  @extends SC.Page
*/
Nestor.selectOperationPage = SC.Page.create({
  /** @scope Nestor.selectOperationPage.prototype */ 
  mainView: SC.ScrollView.design({
      backgroundColor: '#747E92',
    borderStyle: SC.BORDER_NONE,
    contentView: SC.View.design({
      layout: { width: 1280, height: 780},
      childViews: "financialData1".w(),
      financialData1: SC.WellView.design({
        nowShowing: YES,
        layout: {top: 5, left: 5, height: 200, width: 280} ,
        contentView: Nestor.FinancialDataView.design({
        })
      })
    }) 
  })
});
