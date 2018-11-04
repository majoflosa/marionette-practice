define([
    'underscore',
    // 'backbone',
    'marionette', 
    'router/AppRouter',
    // 'views/TaskView',
    'views/TaskListView',
    'views/TaskDetailsView',
    'models/TaskModel',
    'collections/TaskCollection',
    'text!templates/body.html'
], 

function(_, Mn, AppRouter, TaskListView, TaskDetailsView, TaskModel, TaskCollection, bodyTemplate) {

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
        
        toDetails: function( taskId ) {
            this.detachChildView('taskList');
            this.taskDetails = new TaskDetailsView({ model: this.tasks.get( taskId ) });
            this.showChildView('taskList', this.taskDetails );
            console.log( 'Now showing task details: ', taskId );
        },

        toHome: function() {
            this.detachChildView('taskList');

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