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

   mainView:  SC.TableView.design({
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
         formatter: function(value) {return value.toFormattedString('%d/%m/%Y');},
         width: 200,
         minWidth: 150
       })
       ],
       // flexibleColumn:   tableColumns.objectAt(0),
       showAlternatingRows: YES,
       contentBinding:   'Nestor.filesController.arrangedObjects',
       selectionBinding: 'Nestor.filesController.selection',
       canReorderContent: NO,
       exampleView: SC.TableRowView,
       recordType: Nestor.File,
       localize: YES,
       target: 'Nestor.filesController',
       action: 'openSelectedItem'
   })
});
