
// ==========================================================================
// SampleControls
// copyright 2008 Sprout Systems, Inc.
// ==========================================================================
/*global SampleControls tile */

// require('views/control_sample');


Nestor.createFilePage = SC.Page.create({
  
  mainView: SC.ScrollView.design({
		contentView: Nestor.FileView.design({ 
			layout: {top: 15, left: 10}
		})    


  })
}); 
