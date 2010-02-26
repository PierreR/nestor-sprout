// ==========================================================================
// Project:   Nestor.SearchView
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Nestor */

/** @class

  (Document Your View Here)

  @extends SC.ScrollView
*/
Nestor.SearchView = SC.SplitView.design({
	/** @scope Nestor.SearchView.prototype */ 

	hasHorizontalScroller: NO,
	// layout: { top: 36, bottom: 36, left: 0, right: 0 },
	// backgroundColor: 'white',
	defaultThickness: 0.2,
	dividerThickness: 5,
	layoutDirection: SC.LAYOUT_VERTICAL,
	topLeftView: SC.View.design({
		// backgroundColor: 'grey',
		childViews: 'nameLabelView nameFieldView'.w(),
		nameLabelView:SC.LabelView.design({
			// layout: { top: 3, bottom: 32, left: 0, right: 0 },	
			value: '_name'.loc()
		}),
		nameFieldView: SC.TextFieldView.design({
			layout: { centerY: 0, height: 24, left: 8, width: 100 },
		})
	}),
	bottomRightView: SC.TableView.design({
		columns: [
			SC.TableColumn.create({
				key:   'name',
				label: '_name'.loc(),
				width: 200
			}),
			SC.TableColumn.create({
				key:   'managerName',
				label: '_manager'.loc(),
				width: 200,
				minWidth: 150
			}),
			SC.TableColumn.create({
				key:   'grantDate',
				label: '_grantDate'.loc(),
				width: 200,
				minWidth: 150
			})
			],
			// flexibleColumn:   tableColumns.objectAt(0),
			contentBinding:   'Nestor.filesController.arrangedObjects',
			selectionBinding: 'Nestor.filesController.selection',
			canReorderContent: YES,
			exampleView: SC.TableRowView,
			recordType: Nestor.File	
		})
});
