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

			this.managerNameLabel = this.createChildView(SC.LabelView.extend({
				layout: { top: 40, left: 0, width: 85, height: 18 },
				textAlign: SC.ALIGN_RIGHT,
				value: "_manager".loc() 
			}));

			childViews.push(this.managerNameLabel);
			this.managerNameField = this.createChildView(SC.TextFieldView.extend({
				layout: { top: 40, left: 110, height: 18, width: 300 }
				// valueBinding: SC.binding('*content.name', this).toLocale()
			}));
			childViews.push(this.managerNameField);

			this.grantDateLabel = this.createChildView(SC.LabelView.extend({
				layout: { top: 70, left: 0, width: 85, height: 18 },
				textAlign: SC.ALIGN_RIGHT,
				value: "_grantDate".loc()
			}));
			childViews.push(this.grantDateLabel);

			this.grantDateField = this.createChildView(SC.TextFieldView.extend({
				layout: { top: 70, left: 110, height: 18, width: 300 }
				// valueBinding: SC.binding('*content.loginName', this).toLocale()
			}));
			childViews.push(this.grantDateField);

			this.set('childViews', childViews);

		}
});
