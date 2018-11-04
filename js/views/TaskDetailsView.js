define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'text!templates/details.html'
],

function($, _, Backbone, Mn, detailsTemplate) {

    var TaskDetails = Mn.View.extend({
        tagName: 'div',
        className: 'task-details-wrap',
        template: _.template( detailsTemplate )
    });

    return TaskDetails;

});