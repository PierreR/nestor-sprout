// ==========================================================================
// Project:   Nestor.projectCPage
// Copyright: ©2010 CIRB/CIBG
// ==========================================================================
/*globals Nestor */

/** @class

  Page displayed in the Context area when a project is selected in the tree.
  Contains two part a fixed North with operations list and a South container

  @extends SC.Page
*/
Nestor.projectCPage = SC.Page.create({
  /** @scope Nestor.projectCPage.prototype */ 
  mainView: SC.View.design({
      // layout: {height: 300},
      childViews: "topView bottomView".w(),

      topView: SC.View.design({
        layout: {left: 10, top: 10},
        childViews: [
          SC.LabelView.design({
            layout: {height: 24, width: 400},
            localize: YES,
            value: "_operationListLabel"
            
          }),
          SC.ScrollView.design({
            borderStyle: SC.BORDER_NONE,
            /**
            * You need to specify the top here outside of contentView to have the scroll aligned with the table
            * Worse if you specify the height or width in there, it is not going to work, 
            * height and width need to be inside the content view
            */
            layout: {top: 25 }, 
            contentView: SC.TableView.design({
              layout: {width: 811, height: 350},
              columns: [
                SC.TableColumn.create({
                key:   'number',
                label: '_number'.loc(),
                width: 30
              }),
              SC.TableColumn.create({
                key:   'name',
                label: '_name'.loc(),
                width: 200
              }),
              SC.TableColumn.create({
                key:   'description',
                label: '_description'.loc(),
                minWidth: 400
              })           
              ],
              contentBinding: "Nestor.operationsController.arrangedObjects",
              selectionBinding: 'Nestor.operationsController.selection',
              recordType: Nestor.Operation,
              action: 'openSelectedItem'
            }) 
          })
        ]
      }),
      bottomView: SC.ContainerView.design(SC.Border, {
        layout: {left: 10, top : 400 },
        borderStyle: SC.BORDER_TOP,
        // backgroundColor: 'blue',
      // nowShowingBinding: SC.Binding.from('Nestor.middleContainerController*nowShowing').oneWay(),
        canCollapse: NO   
      })
    })  
});
