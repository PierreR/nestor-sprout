// ==========================================================================
// Project:   Nestor.File
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Nestor */

/** @class

  Custom view with all file fields  
  @extends SC.View
*/
Nestor.FileView = SC.View.extend(
/** @scope Nestor.FileCustomView.prototype */ {
   
   /*
    * This Combo is static for now 
    */ 
    _listTypes: function() {
     var ret = [];
     ret.push({ name: '_districtContract'.loc(), value: 1});
     ret.push({ name: '_isolatedBuilding'.loc(), value: 2});
     ret.push({ name: '_abandonedBuilding'.loc(), value: 3});
     return ret;
  },

  createChildViews: function() {
      var childViews = [];

      this.nameLabel = this.createChildView(SC.LabelView.extend({
        layout: { top: 10, left: 0, width: 85, height: 18 },
        textAlign: SC.ALIGN_RIGHT,
        value: "_name".loc() 
      }));
      childViews.push(this.nameLabel);

      this.nameField = this.createChildView(SC.TextFieldView.extend({
        layout: { top: 10, left: 110, height: 18, width: 300 }
        // valueBinding: SC.binding('*content.name', this).toLocale()
      }));
      childViews.push(this.nameField);

      this.typeLabel = this.createChildView(SC.LabelView.extend({
        layout: { top: 40, left: 0, width: 85, height: 18 },
        textAlign: SC.ALIGN_RIGHT,
        value: "_type".loc() 
      }));
      childViews.push(this.typeLabel);

      this.typeField = this.createChildView(SC.SelectFieldView.extend({
        layout: { top: 40, left: 110, height: 20, width: 300 },
        localize: YES,
        nameKey: 'name',
        valueKey: 'value',
        objects: this._listTypes(),
        valueBinding: SC.binding('*content.type', this)
      // isEnabledBinding: 'CoreTasks.permissions.canUpdateUsertype'
      }));

      childViews.push(this.typeField);
      this.managerNameLabel = this.createChildView(SC.LabelView.extend({
        layout: { top: 70, left: 0, width: 85, height: 18 },
        textAlign: SC.ALIGN_RIGHT,
        value: "_manager".loc() 
      }));

      childViews.push(this.managerNameLabel);
       
      this.managerNameField = this.createChildView(SC.TextFieldView.extend({
        layout: { top: 70, left: 110, height: 18, width: 300 }
        // valueBinding: SC.binding('*content.name', this).toLocale()
      }));
      childViews.push(this.managerNameField);

      this.grantDateLabel = this.createChildView(SC.LabelView.extend({
        layout: { top: 100, left: 0, width: 85, height: 18 },
        textAlign: SC.ALIGN_RIGHT,
        value: "_grantDate".loc()
      }));
      childViews.push(this.grantDateLabel);

      this.grantDateField = this.createChildView(SC.TextFieldView.extend({
        layout: { top: 100, left: 110, height: 18, width: 300 }
        // valueBinding: SC.binding('*content.loginName', this).toLocale()
      }));
      childViews.push(this.grantDateField);

      this.set('childViews', childViews);

    }
});
