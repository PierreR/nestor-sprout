// ==========================================================================
// Project:   Nestor.operationMPage
// Copyright: ©2010 CIRB/CIGB
// ==========================================================================
/*globals Nestor */

/** @class

  Page displayed in the Main area at operation state.
  Details about a specific operation.

  @extends SC.Page
*/

sc_require('views/financial_data');

Nestor.operationMPage = SC.Page.create({
  /** @scope Nestor.operationMPage.prototype */ 
  mainView: SC.ScrollView.design({
      backgroundColor: '#747E92',
    borderStyle: SC.BORDER_NONE,
    contentView: SC.View.design({
      layout: { width: 1280, height: 700},
      childViews: "financialData1 financialData2".w(),
      financialData1: SC.WellView.design({
        nowShowing: YES,
        layout: {top: 100, right: 5, height: 225, width: 280} ,
        contentView: Nestor.FinancialDataView.design({
        })
      }),
      financialData2: SC.WellView.design({
        nowShowing: YES,
        layout: {bottom: 5, right: 5, height: 225, width: 280} ,
        contentView: Nestor.FinancialDataView.design({
        })
      })
    }) 
  })
});
