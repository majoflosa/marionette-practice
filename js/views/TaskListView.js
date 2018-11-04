define([
    // 'jquery',
    // 'underscore',
    // 'backbone',
    'marionette',
    'collections/TaskCollection',
    // 'models/TaskModel',
    'views/TaskView'
],

function(Mn, TaskCollection, TaskView) {

    var TaskListView = Mn.CollectionView.extend({
        // el: '#task-list',
        className: 'task-list-view',

        childView: TaskView,

        initialize: function() {
            this.listenTo(this.collection, 'add', this.handleAddModel );
        },

        onRender: function() {
            // console.log( 'Rendering TaskListVIew' );
            console.log( 'this collection: ', this.collection );
        },

        handleAddModel: function( model ) {
            console.log('model is being added now: ', model);
        }
    });

    return TaskListView;

});