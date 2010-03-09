// ==========================================================================
// Project:   Nestor.SearchView
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Nestor */

/** @class

  (Document Your View Here)

  @extends SC.ScrollView
*/
Nestor.searchFilePage = SC.Page.create({
  /** @scope Nestor.SearchView.prototype */ 

   mainView:  SC.SplitView.design({
     hasHorizontalScroller: NO,
     defaultThickness: 0.2,
     dividerThickness: 5,
     layoutDirection: SC.LAYOUT_VERTICAL,
     topLeftView: SC.View.design({
       childViews: 'nameLabelView nameFieldView'.w(),
       nameLabelView:SC.LabelView.design({
         value: '_name'.loc()
       }),
       nameFieldView: SC.TextFieldView.design({
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
     })
});
