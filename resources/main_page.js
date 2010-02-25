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

			leftActions:SC.SelectButtonView.design({
				layout: { centerY: 0, width: 220, height: 24, left: 1 },
				value: 'search',
				nameKey: 'title',
				valueKey: 'value',
				sortKey: 'pos',
				theme: 'square',
				objects: [
					{title:'Rechercher un dossier', value: 'search', pos: 1},
					{title:'Nouveau dossier', value: 'create', pos: 2},
					{title:'Comptabilité', value: 'accounting', pos: 3}
				]
			}),

			titleView: SC.LabelView.design({
				layout: { centerY: 0, centerX: 0, width: 100, height: 24 },
				fontWeight: SC.BOLD_WEIGHT,
				value: "NESTOR"
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
	  
		middleView: Nestor.SearchView,
	
		bottomView: SC.ToolbarView.design({
			layout: { bottom: 0, left: 0, right: 0, height: 32 },
			anchorLocation: SC.ANCHOR_BOTTOM
		})
	})  
});
