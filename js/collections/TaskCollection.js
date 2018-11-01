define(['backbone', 'models/TaskModel'], function(Backbone, TaskModel) {

    var TaskCollection = Backbone.Collection.extend({ 
        url: '/api/tasks',
        model: TaskModel,

        initialize: function() { 
            this.fetch();

            this.on('add', function( model ) {
                // fired when a model is added to the collection; when fetch request returns, a model is
                // added, and this callback will fire
                console.log('add was triggered on this collection: ', model);
            });

            this.on('createNewTask', function( attrs ) {
                console.log( 'createNewTask was triggered: ', attrs );
                this.create( attrs, {
                    wait: true,
                    success: function( response ) {
                        console.log( 'A new task was created: ', response );
                        // this.add( response );
                    },
                    error: function( response ) {
                        console.log( 'Task creation failed: ', response );
                    }
                });
            });
        }
    });

    return TaskCollection;

});