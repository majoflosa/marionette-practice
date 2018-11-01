require.config({
    baseUrl: "/js",
    paths: {
        'jquery': 'lib/jquery.min',
        'underscore': 'lib/underscore-min',
        'backbone': 'lib/backbone-min',
        'radio': 'lib/backbone.radio',
        'marionette': 'lib/backbone.marionette.min',
        'text': 'lib/text'
    },
    shims: {
        underscore: {
            exports: '_'
          },
          backbone: {
            exports: 'Backbone',
            deps: ['jquery', 'underscore']
          },
          marionette: {
            exports: 'Backbone.Marionette',
            deps: ['backbone']
          }
    }
});

require( ['App'], function( App ) {

    App.start();

});