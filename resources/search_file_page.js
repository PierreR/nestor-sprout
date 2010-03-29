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
         key:   'reference',
         label: '_reference'.loc(),
         width: 120
       }),
       SC.TableColumn.create({
         key:   'name',
         label: '_name'.loc(),
         width: 200
       }),
       SC.TableColumn.create({
         key:   'contractType',
         label: '_contractType'.loc(),
         width: 200
       }),
       SC.TableColumn.create({
         key:   'townShip',
         label: '_townShip'.loc(),
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
       // actOnSelect: YES,
       contentBinding:   'Nestor.searchFilesController.arrangedObjects',
       selectionBinding: 'Nestor.searchFilesController.selection',
       canReorderContent: NO,
       exampleView: SC.TableRowView,
       recordType: Nestor.File,
       allowsEmptySelection: YES,
       action: 'openSelectedItem'
   })
});
