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
	mainPane: SC.MainPane.design({

		childViews: 'topBarView middleView bottomBarView'.w(),

		topBarView: SC.ToolbarView.design({
			layout: { top: 0, left: 0, right: 0, height: 36 },
			childViews: 'titleView userView rightActions'.w(),
			anchorLocation: SC.ANCHOR_TOP,
			titleView: SC.LabelView.design({
				layout: { centerY: 0, centerX: 0, width: 100, height: 24 },
				fontWeight: SC.BOLD_WEIGHT,
				value: "_appTitle".loc()
			}),

			userView: SC.LabelView.design({
				layout: { centerY: 0, width: 220, height: 24, right: 200 },
				icon: 'sc-icon-user-16',
				value: "Pierre Radermecker"
			}),

			rightActions: SC.SegmentedView.design({
				layout: { centerY: 0, width: 180, height: 24, right: 1 },
				items: 'NL Aide Quitter'.w()
			})
		}),
	  
		middleView: SC.SplitView.design({
			layout: { left: 0, top: 36, bottom: 36, right: 0 },
			defaultThickness: 0.2,
			topLeftView: SC.View.design({
				childViews: 'fileMenu'.w(),
				fileMenu: SC.SourceListView.design({
          contentBinding: "Nestor.contextMenuController.arrangedObjects",
          selectionBinding: "Nestor.contextMenuController.selection",
          contentValueKey: 'displayName',
          canReorderContent: NO,
          canDeleteContent: NO,
					canEditContent: NO,
          hasContentIcon: NO
          // contentIconKey:  'icon'
					// action: 'selectTarget'
				})
			}),
			bottomRightView: SC.ContainerView.design({
				nowShowingBinding: SC.Binding.from('Nestor.contextMenuController.selection.firstObject*container').oneWay()
			})
		}),

		bottomBarView: SC.ToolbarView.design({
			layout: { bottom: 0, left: 0, right: 0, height: 36 }
		}),

	}),

});
