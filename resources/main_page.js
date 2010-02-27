// ==========================================================================
// Project:   Todos - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Todos */

// This page describes the main user interface for your application.  
Nestor.mainPage = SC.Page.design({

	// The main pane is made visible on screen as soon as your app is loaded.
	// Add childViews to this pane for views to display immediately on page 
	// load.
	mainPane: SC.MainPane.design({

		childViews: 'middleView topView bottomView'.w(),

		topView: SC.ToolbarView.design({
			layout: { top: 0, left: 0, right: 0, height: 36 },
			childViews: 'leftActions titleView userView rightActions'.w(),
			anchorLocation: SC.ANCHOR_TOP,
			// TODO: Replace with a SelectView whenever that works ...
			leftActions: SC.SegmentedView.design({
				layout: { centerY: 0,  height: 24, width: 300, left: 1 },
				itemTitleKey: 'title', itemValueKey: 'value',
				items: [
					{ title: '_search'.loc(), value: 'searchContainer' }, 
					{ title: '_create'.loc(), value: 'createContainer' },
					{ title: '_accounting'.loc(), value: 'accountingContainer' }
			 	]
			}),
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
	  
		middleView: SC.ContainerView.design({
			// nowShowingBinding: 'Nestor.middleContainerController.nowShowing',
			nowShowingBinding: 'Nestor.mainPage.mainPane.topView.leftActions.value',
			layout: { left: 0, top: 36, bottom: 36, right: 0 }
		}),

		bottomView: SC.ToolbarView.design({
			layout: { bottom: 0, left: 0, right: 0, height: 36 },
			anchorLocation: SC.ANCHOR_BOTTOM
		})
	}),  
	
	searchContainer: Nestor.SearchView,
	createFileContainer: SC.View.design({
		backgroundColor: 'white'
		
	})

});
