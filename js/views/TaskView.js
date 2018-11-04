define([
    'underscore',
    'marionette',
    // 'collections/TaskCollection',
    // 'views/BodyView',
    // 'models/TaskModel',
    'text!templates/task.html'
],

function(_, Mn, taskTemplate) {

    var TaskView = Mn.View.extend({
        tagName: 'article',
        className: 'task-wrap',

        template: _.template( taskTemplate ),

        initialize: function() {
            this.listenTo(this.model, 'change:status', this.handleModelChange );
        },

        ui: {
            markDone: '.mark-done',
            deleteTask: '.delete-task'
        },

        events: {
            'click @ui.markDone': 'handleCompleteTask',
            'click @ui.deleteTask': 'handleDeleteTask'
        },

        handleCompleteTask: function() {
            var _this = this;

            this.model.save( {status: 'done'}, {
                success: function(model, response) { 
                    console.log('model saved successfully; response: ', response);
                    _this.$el.find('.task-title').addClass('done-task');
                    _this.$el.find('.task-status').text( response.status );
                },
                error: function(model, response) { console.log('model update failed. response: ', response)}
            });
        },

        handleDeleteTask: function() {
            this.model.destroy({
                success: function(model, response) {
                    console.log('model deleted successfully');
                },
                error: function(model, response) {
                    console.log('Model could not be deleted.');
                }
            });
        },

        handleModelChange: function( e ) {
            console.log( 'change:status was triggered: ', e );
        },

        onRender: function() {
            // console.log( 'Rendering TaskView' );
            // console.log( 'task view model: ', this.model );
        }
    });

    return TaskView;

});