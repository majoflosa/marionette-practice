define(['backbone'], function(Backbone) {

    var TaskModel = Backbone.Model.extend({
        defaults: {
            title: 'No title',
            status: 'ongoing',
            description: 'No description'
        }
    });

    return TaskModel;

});