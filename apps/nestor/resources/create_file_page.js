
// ==========================================================================
// SampleControls
// copyright 2008 Sprout Systems, Inc.
// ==========================================================================
/*global SampleControls tile */

Nestor.createFilePage = SC.Page.create({
  
  mainView: SC.ScrollView.design({
    contentView: SC.View.design({
    layout: {top: 15, centerX:0, width: 600, height: 400 },
      childViews: 'formView buttonView'.w(),
      formView: Nestor.FileView.design({ 
        contentBinding: 'Nestor.fileController.content'
		  }),
      buttonView: SC.SegmentedView.design({
      layout: {bottom: 15, height: 30},
        items: [ '_save'.loc(), '_reset'.loc()]  
      })
    })
  })
}); 
