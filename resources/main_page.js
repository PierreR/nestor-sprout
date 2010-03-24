// ==========================================================================
// Project:   Nestor - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Nestor */

// sc_require('resources/search_page') ;

Nestor.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  // TODO: Find a way to get rid of height 24 for every label and field ...
  mainPane: SC.MainPane.design({
    
    /** we might put a ScrollView here to allow horizontal scrolling at lower resolution */
    childViews: 'topBarView indicatorView middleView bottomBarView'.w(),

    topBarView: SC.ToolbarView.design(SC.Border, {
      borderStyle: SC.BORDER_BOTTOM,
      childViews: 'appNameView appVersionView middleView rightView'.w(),
      anchorLocation: SC.ANCHOR_TOP,
      appNameView: SC.LabelView.design({
        layout: { left: 10, centerY: 0, width: 60, height: 24 },
        fontWeight: SC.BOLD_WEIGHT,
        value: Nestor.NAMESPACE.toUpperCase()
      }),
      appVersionView: SC.LabelView.design({
        layout: { left: 75, centerY: 8, width: 40, height: 24 },
        value: 'v%@'.fmt(Nestor.VERSION)
      }),
      middleView: SC.LabelView.design({
        layout: { centerY: 0, centerX:0, width: 220, height: 24 },
        icon: 'sc-icon-user-16',
        value: "Pierre Radermecker"
      }),

      rightView: SC.SegmentedView.design({
        layout: { centerY: 0, width: 170, height: 24, right: 1 },
        items: 'NL Aide Quitter'.w()
      })
    }),

    indicatorView: SC.View.design({
      layout: { top: 32, left: 0, right: 0, height: 30 },
      childViews: [
        Nestor.IndicatorView.design({
          params: [
            {label: '_reference', labelWidth: 75, fieldBinding: 'reference'}, 
            {label: '_type', fieldBinding: 'contractType', fieldWidth:150 },
            {label: '_name', fieldBinding: 'name'},
            {label: '_townShip', labelWidth: 80, fieldBinding: 'townShip'},
            {label: '_manager', labelWidth: 90, fieldBinding: 'managerName'}
          ]
        }),
        SC.ButtonView.design({
          layout: {right: 10, width: 120, height:24, centerY:0 }, // buttons are not displayed without an height and width
          displayTitle: "_search".loc(),
          isEnabledBinding: SC.Binding.from('Nestor.fileController*hasContent').oneWay().not(),
          icon: static_url('images/search-32.png')
        })
      ]
    }),
    
    middleView: SC.SplitView.design({
      layout: { left: 0, top: 64, bottom: 35, right: 0 },
      defaultThickness: 0.1, 
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
      bottomRightView: SC.ContainerView.design({
        nowShowingBinding: SC.Binding.from('Nestor.middleContainerController*nowShowing').oneWay(),
        canCollapse: YES
    })
    }),

    bottomBarView: SC.ToolbarView.design({
      anchorLocation: SC.ANCHOR_BOTTOM
    })

  })

});
