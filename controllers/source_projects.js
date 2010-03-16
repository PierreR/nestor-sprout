// ==========================================================================
// Project:   Nestor.sourceProjectsController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Nestor */

/** @class

  Root controller for the left source menu

  @extends SC.TreeController
*/
Nestor.sourceProjectsController = SC.TreeController.create(
/** @scope Nestor.sourceProjectsController.prototype */ {

	content: null,
  // treeItemIsGrouped: YES, // if you put this to YES you will need to implement a custom GroupItemView so we can select the group
  
  allowsMultipleSelection: NO,
  allowsEmptySelection: YES, // initially nothing is selected when the search view is on
  
  // firstSelectableObject: function() {
  //   var objects = this.get('arrangedObjects');
  //   return objects && objects.objectAt(0); 
  // }.property(),

  refreshSources: function() {
    var projectSources = SC.Object.create({
      treeItemIsExpanded: YES,
      displayName: '_project'.loc('s'),
      page: 'projectPage',
      treeItemChildren: [
        SC.Object.create({
          treeItemIsExpanded: YES,
          displayName: '_publicOperation'.loc('s','s'),
          treeItemChildren: [
            SC.Object.create({
              count:5,
              displayName: '_preliminaryPlan'.loc(),
              items: function() {
                var q = SC.Query.local(Nestor.Project);
                return Nestor.store.find(q);
              }.property().cacheable()
            }),
            SC.Object.create({
              displayName: '_award'.loc(),
              items: function() {
                var q = SC.Query.local(Nestor.Project);
                return Nestor.store.find(q);
              }.property().cacheable()
            }),
            SC.Object.create({
              displayName: '_acquisition'.loc(),
              items: function() {
                var q = SC.Query.local(Nestor.Project);
                return Nestor.store.find(q);
              }.property().cacheable()
            })
          ]     
        }),
        SC.Object.create({
          treeItemIsExpanded:YES,
          displayName: 'PPP',
          treeItemChildren: [
            SC.Object.create({
              displayName: '_acquisition'.loc(),
              items: function() {
                var q = SC.Query.local(Nestor.Project);
                return Nestor.store.find(q);
              }.property().cacheable()
            })
          ]
        })
      ]
    });
    
    var accountingSources = SC.Object.create({
      treeItemIsExpanded: YES,
      displayName: '_accounting'.loc(),
      treeItemChildren: [
        SC.Object.create({
          treeItemIsExpanded: YES,
          displayName: '_elaboration'.loc(),
          treeItemChildren: [
            SC.Object.create({
              displayName: '_commitment'.loc(),
              items: function() {
                var q = SC.Query.local(Nestor.Project);
                return Nestor.store.find(q);
              }.property().cacheable()
            }),
            SC.Object.create({
              displayName: '_liquidation'.loc(),
              items: function() {
                var q = SC.Query.local(Nestor.Project);
                return Nestor.store.find(q);
              }.property().cacheable()
            }),
            SC.Object.create({
              displayName: '_acquisition'.loc(),
              items: function() {
                var q = SC.Query.local(Nestor.Project);
                return Nestor.store.find(q);
              }.property().cacheable()
            })
          ]     
        }),
        SC.Object.create({
          treeItemIsExpanded:YES,
          displayName: '_fulfillment'.loc(),
          treeItemChildren: [
            SC.Object.create({
              displayName: '_commitment'.loc(),
              items: function() {
                var q = SC.Query.local(Nestor.Project);
                return Nestor.store.find(q);
              }.property().cacheable()
            }),
            SC.Object.create({
              displayName: '_liquidation'.loc(),
              items: function() {
                var q = SC.Query.local(Nestor.Project);
                return Nestor.store.find(q);
              }.property().cacheable()
            })
          ]
        })
      ]
    });

    var fileDataSources = SC.Object.create({
      treeItemIsExpanded: NO,
      displayName: '_administrativeData'.loc(),
      treeItemChildren: []
    });

    var rootTree = SC.Object.create({
      treeItemIsExpanded: YES,
      treeItemChildren: [projectSources, accountingSources, fileDataSources]
    });

    this.set('content', rootTree);
    // this.set('selection', SC.SelectionSet.create());
  }


}) ;
