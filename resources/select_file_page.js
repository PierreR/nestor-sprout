
// ==========================================================================
// Project:   Nestor.SearchView
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Nestor */

/** @class

  (Document Your View Here)

  @extends SC.Page
*/
Nestor.selectFilePage = SC.Page.create({
  /** @scope Nestor.selectFilePage.prototype */ 
  mainView: SC.SplitView.design({
    defaultThickness: 0.2, 
    dividerThickness: 5,
    topLeftView: SC.ScrollView.design({
      contentView: SC.SourceListView.design({
        contentBinding: "Nestor.sourceProjectsController.arrangedObjects",
        selectionBinding: "Nestor.sourceProjectsController.selection",
        contentValueKey: 'displayName',
        canReorderContent: NO,
        canDeleteContent: NO,
        canEditContent: NO,
        hasContentIcon: NO,
        contentUnreadCountKey: 'count',
        canCollapse: NO
        // contentIconKey:  'icon'
        // action: 'selectTarget'
      })
    }),
    bottomRightView: SC.View.design({
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
              contentBinding: "Nestor.selectFileController.operations",
              recordType: Nestor.Operation
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
  })
});
