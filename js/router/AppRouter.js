define(['backbone', 'marionette', 'router/Controller'], function(Backbone, Mn, Controller) {

    var Router = Mn.AppRouter.extend({
        appRoutes: {
            '': 'home',
            'details/:taskid': 'taskDetails'
        },

        controller: Controller
    });

    return Router;

});