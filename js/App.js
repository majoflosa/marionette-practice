define([
    'backbone',
    'marionette', 
    'router/AppRouter',
    'views/RootView'
], 

function(Backbone, Mn, AppRouter, RootView) {

    var Application = Mn.Application.extend({
        region: '#app',

        onBeforeStart: function() {
            // console.log( 'Application is about to start' );
        },
        
        onStart: function() {
            // console.log( 'Application has started' );
            var router = new AppRouter();
            router.on('route:taskDetails', function() {
                console.log( 'route:taskDetails was triggered' );
            });

            Backbone.history.start();

            this.showView( new RootView({foo: 'bar'}, [1, 2, 3], 'test') );
        }
    });

    var App = new Application();

    return App;

});