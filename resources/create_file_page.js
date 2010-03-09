
// ==========================================================================
// SampleControls
// copyright 2008 Sprout Systems, Inc.
// ==========================================================================
/*global SampleControls tile */

// require('views/control_sample');


Nestor.createFilePage = SC.Page.create({
  
  mainView: SC.ScrollView.design({
    contentView: SC.View.design({
    layout: {top: 15, centerX:0, width: 600 },
      childViews: 'formView buttonView'.w(),
      formView: Nestor.FileView.design({ 
		  }),
      buttonView: SC.SegmentedView.design({
      layout: {bottom: 15, height: 30},
        items: [ '_save'.loc(), '_reset'.loc()]  
      })
    })
  })
}); 
