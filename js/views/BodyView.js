define([
    'underscore',
    // 'backbone',
    'marionette', 
    'router/AppRouter',
    // 'views/TaskView',
    'views/TaskListView',
    'models/TaskModel',
    'collections/TaskCollection',
    'text!templates/body.html'
], 

function(_, Mn, AppRouter, TaskListView, TaskModel, TaskCollection, bodyTemplate) {

    var BodyView = Mn.View.extend({
        regions: {
            taskList: '#task-list'
        },

        ui: {
            taskInput: '#task-input',
            addTask: '#add-task'
        },

        events: {
            'click @ui.addTask': 'handleClickAddTask'
        },

        initialize: function() {
            this.tasks = new TaskCollection();
            this.taskList = new TaskListView({ collection: this.tasks });

            this.router = new AppRouter();
            this.listenTo( this.router, 'route:taskDetails', this.toDetails );
            this.listenTo( this.router, 'route:home', this.toHome );
        },
        
        template: _.template( bodyTemplate ),

        onRender: function() {
            // console.log( 'BodyView has rendered' );

            this.showChildView( 'taskList', this.taskList );
        },

        toDetails: function() {
            this.detachChildView('taskList');
            console.log( 'Now showing task details' );
        },

        toHome: function() {
            this.render();
        },

        handleClickAddTask: function() {
            var newTaskTitle = this.ui.taskInput.val();
            var attrs = {
                // id: 22, 
                title: newTaskTitle, 
                status: 'ongoing', 
                description: 'This task was added by the user.'
            };

            this.tasks.trigger('createNewTask', attrs);

            this.ui.taskInput.val('');
        }
    });

    return BodyView;

});