define([
    'underscore', 
    'marionette', 
    'models/TestModel', 
    'text!templates/header.html'
], 

function(_, Mn, TestModel, headerTemplate) {

    var HeaderView = Mn.View.extend({
        tagName: 'h1',
        id: 'view-title',
        template: _.template( headerTemplate )
    });

    return HeaderView;

});