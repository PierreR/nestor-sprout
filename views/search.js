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

	 // TODO: Add your own code here.
	hasHorizontalScroller: NO,
	layout: { top: 36, bottom: 32, left: 0, right: 0 },
	backgroundColor: 'white',
	defaultThickness: 0.2,
	layoutDirection: SC.LAYOUT_VERTICAL,
	bottomRightView: SC.TableView.design({
		columns: [
			SC.TableColumn.create({
				key:   'name',
				label: 'Nom',
				width: 500
			}),
			SC.TableColumn.create({
				key:   'managerName',
				label: 'Gestionnaire',
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
