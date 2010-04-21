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
    
    defaultResponder: 'Nestor.firstResponder', 
    /** we might put a ScrollView here to allow horizontal scrolling at lower resolution */
    childViews: 'topBarView indicatorView middleView bottomBarView'.w(),

    topBarView: SC.ToolbarView.design(SC.Border, {
      borderStyle: SC.BORDER_BOTTOM,
      childViews: 'logoView fileButton middleView rightView'.w(),
      anchorLocation: SC.ANCHOR_TOP,
      logoView: SC.ImageView.design(SCUI.SimpleButton, {
        layout: { left: 5, centerY: 0, width: 156, height: 32 },
        value: static_url('images/logo.png'),
        action: 'showHomeScreen',
        localize: YES,
        toolTip: '_showHomeScreen'
      }),
      fileButton: SC.LabelView.design(SCUI.SimpleButton, {
        layout: {left: 170, width: 20, height:17, centerY:0 }, // buttons are not displayed without an height and width
        icon: static_url('images/file-invert-32.png'),
        hasHover: YES,
        action: 'showFileScreen',
        isVisibleBinding: SC.Binding.from("Nestor.OPERATION.isFirstResponder").oneWay(),
        toolTip: '_showFileScreen'.loc()
      }),
      middleView: SC.LabelView.design({
        layout: { centerY: 0, centerX:0, width: 220, height: 24 },
        icon: 'sc-icon-user-16',
        value: "Pierre Radermecker"
      }),

      rightView: SC.SegmentedView.design({
        layout: { centerY: 0, width: 165, height: 24, right: 5 },
        items: 'NL Aide Quitter'.w()
      })
    }),

    indicatorView: SC.View.design({
      layout: { top: 32, left: 0, right: 0, height: 30 },
      childViews: [
        Nestor.IndicatorView.design({
          params: [
            {label: '_reference', labelWidth: 75, fieldBinding: 'reference'}, 
            {label: '_name', fieldBinding: 'name'},
            {label: '_type', fieldBinding: 'contractType', fieldWidth:150 },
            {label: '_townShip', labelWidth: 80, fieldBinding: 'townShip'},
            {label: '_manager', labelWidth: 90, fieldBinding: 'managerName'}
          ]
        }),
        SC.LabelView.design(SCUI.SimpleButton, {
          layout: {right: 60, width: 20, height:16, centerY:0 }, // buttons are not displayed without an height and width
          icon: static_url('images/search-invert-32.png'),
          hasHover: YES,
          action: 'searchFiles',
          isVisibleBinding: SC.Binding.from("Nestor.START.isFirstResponder").oneWay(),
          toolTip: '_search'.loc()
        }),
        SC.LabelView.design(SCUI.SimpleButton, {
          layout: {right: 20, width: 20, height:16, centerY:0 }, // buttons are not displayed without an height and width
          icon: static_url('images/plus-invert-32.png'),
          action: 'createFile',
          toolTip: '_create'.loc()
        })
      ]
    }),
    
    middleView: SC.ContainerView.design({
      layout: { left: 0, top: 64, bottom: 35, right: 0 }
    }),

    bottomBarView: SC.ToolbarView.design({
      anchorLocation: SC.ANCHOR_BOTTOM,
      childViews: [
        SC.LabelView.design({
          layout: {centerX: 0, width: 40, height: 24 },
          value: 'v%@'.fmt(Nestor.VERSION)
        })
      ]
    })

  })

});
