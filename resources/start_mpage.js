// ==========================================================================
// Project:   Nestor.startMPage
// Copyright: ©2010 CIRB/CIBG
// ==========================================================================
/*globals Nestor */

/** @class

  Page displayed in the Main area at the start state.
  Search result page. 

  @extends SC.ScrollView
*/
Nestor.startMPage = SC.Page.create({
  /** @scope Nestor.startMPage.prototype */ 
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
