define([
    'underscore',
    // 'backbone',
    'marionette', 
    'router/AppRouter',
    // 'views/TaskView',
    'views/TaskListView',
    // 'models/TaskModel',
    'collections/TaskCollection',
    'text!templates/body.html'
], 

function(_, Mn, AppRouter, TaskListView, TaskCollection, bodyTemplate) {

    var BodyView = Mn.View.extend({
        regions: {
            taskList: '#task-list'
        },

        initialize: function() {
            this.router = new AppRouter();
            this.listenTo( this.router, 'route:taskDetails', this.toDetails );
            this.listenTo( this.router, 'route:home', this.toHome );
        },
        
        template: _.template( bodyTemplate ),

        onRender: function() {
            // console.log( 'BodyView has rendered' );
            var tasks = new TaskCollection();

            this.showChildView( 'taskList', new TaskListView({ collection: tasks }) );
        },

        toDetails: function() {
            this.detachChildView('taskList');
            console.log( 'Now showing task details' );
        },

        toHome: function() {
            this.render();
        }
    });

    return BodyView;

});