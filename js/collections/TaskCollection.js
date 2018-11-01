define(['backbone', 'models/TaskModel'], function(Backbone, TaskModel) {

    var TaskCollection = Backbone.Collection.extend({ 
        url: '/api/tasks',
        model: TaskModel,
        initialize: function() { 
            this.fetch();
        }
    });

    return TaskCollection;

});