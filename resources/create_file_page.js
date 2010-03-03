
// ==========================================================================
// SampleControls
// copyright 2008 Sprout Systems, Inc.
// ==========================================================================
/*global SampleControls tile */

// require('views/control_sample');


Nestor.createFilePage = SC.Page.create({
  
  mainView: SC.View.design({
		// backgroundColor: 'grey',
		// layout: { top: 36, bottom: 36, left: 0, right: 0 },	
		childViews: 'nameLabelView'.w(),
		nameLabelView: Nestor.FileView.design({})    
  })
}); 
