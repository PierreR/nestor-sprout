// ==========================================================================
// Project:   Nestor.FinancialDataView
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Nestor */

/** @class

  TODO: Draw a border around the financial data

  @extends SC.View
*/
Nestor.FinancialDataView = SC.View.extend(
/** @scope Nestor.FinancialDataView.prototype */ {

  createChildViews: function() {
      var labelWidth = 110, fieldWidth = 85,
          height = 18, left = 0, top = 0, topInterval = 20, leftInterval = 8,
          labels = "_regionalPart _townShipPart _total".w(),
          title = "_financialData",
          childViews = [], i = 0, 
          label, field, fieldLeft;


      label = this.createChildView(SC.LabelView.extend({
        layout: {height: height, width: 200},
        value: title.loc()
      }));
      childViews.push(label);
      top = top + topInterval + 5;
      left += leftInterval;

      labels.forEach(function(item) {
        label = this.createChildView(SC.LabelView.extend({
          layout: { top: top, left: left, width: labelWidth, height: height },
          // textAlign: SC.ALIGN_RIGHT,
          value: item.loc() 
        }));
        childViews.push(label);

        fieldLeft = left + labelWidth + leftInterval;
        field = this.createChildView(SC.TextFieldView.extend({
          layout: { top: top, left: fieldLeft, width: fieldWidth, height: height}
          // valueBinding: SC.binding('*content.name', this).toLocale()
        }));
        childViews.push(field);

        label = this.createChildView(SC.LabelView.extend({
          layout: { top: top, left: (fieldLeft + fieldWidth + 8), width: 8, height: height },
          // textAlign: SC.ALIGN_RIGHT,
          value: '€' 
        }));
        childViews.push(label);

        top += topInterval;
      }, this);
      
      this.set('childViews', childViews);

    }
});
