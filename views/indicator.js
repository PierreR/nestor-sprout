// ==========================================================================
// Project:   Nestor.IndicatorView
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Nestor */

/** @class

  This is an attempt to use a generic view to layout horizontally a set of label/field.
  You pass an array of objects that will understand the following properties:
    label (labelView value), field (textFieldView value), labelWidth and fieldWidth 

  @extends SC.View
*/
Nestor.IndicatorView = SC.View.extend(
/** @scope Nestor.IndicatorView.prototype */ {
  params: [],
  isEnabled: NO,
  separationSpace: 60,

  createChildViews: function() {
    var value, valueBinding, labelWidth, fieldWidth,
        item, labelView, fieldView,
        i = 0, left = 5,
        childViews = [],
        params = this.get('params'),
        length = params.length,
        isEnabled = this.get('isEnabled');


    for(i; i< length; i++) {
      item = params[i];
      labelWidth = item.labelWidth || 40;
      value = item.label;
      labelView = this.createChildView(
        SC.LabelView.design({
          layout: {left: left, centerY:0, width: labelWidth, height: 20},
          value: value,
          localize: YES
        })
      );
      childViews.push(labelView);
      
      valueBinding = item.fieldBinding;
      left += labelWidth + 5;
      fieldWidth = item.fieldWidth || 100;
      fieldView = this.createChildView(
        SC.TextFieldView.design({
          layout: {left: left, centerY:0, width: fieldWidth, height: 20},
          isEnabled: isEnabled,
          valueBinding: SC.Binding.from('Nestor.fileController*content.firstObject.%@'.fmt(valueBinding))
                          .oneWay().toLocale()        
        })
      );
      childViews.push(fieldView);
      left = left + fieldWidth + this.get('separationSpace');
    }
    
    this.set('childViews', childViews);

  }
});