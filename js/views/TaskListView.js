define([
    // 'jquery',
    // 'underscore',
    // 'backbone',
    'marionette',
    // 'collections/TaskCollection',
    // 'models/TaskModel',
    'views/TaskView'
],

function(Mn, TaskView) {

    var TaskListView = Mn.CollectionView.extend({
        // el: '#task-list',
        className: 'task-list-view',

        childView: TaskView,

        onRender: function() {
            // console.log( 'Rendering TaskListVIew' );
        }
    });

    return TaskListView;

});