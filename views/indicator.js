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
  separationSpace: 50, // ideally this should depends on the user resolution. The default value will work on 1280x1024 and above

  createChildViews: function() {
    var value, valueBinding, textFieldView, labelWidth, fieldWidth,
        item, labelView, fieldView,
        i = 0, left = 5,
        childViews = [],
        params = this.get('params'),
        length = params.length,
        controller = 'Nestor.searchFilesController';


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
      textFieldView = SC.TextFieldView.design({
          layout: {left: left, centerY:0, width: fieldWidth, height: 20},
          isEnabled: item.isFieldEnabled,
          valueBinding: SC.Binding.from('%@*%@'.fmt(controller, valueBinding))
      });
      if (SC.none(item.isFieldEnabled)) {
        textFieldView.bind('isEnabled', SC.Binding.from('%@.hasSelection'.fmt(controller)).oneWay().not()); 
      }
      
      fieldView = this.createChildView(textFieldView);
      childViews.push(fieldView);
      left = left + fieldWidth + this.get('separationSpace');
    }
    
    this.set('childViews', childViews);

  }

});
