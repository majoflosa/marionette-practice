define( ['backbone'], function(Backbone) {

    var TestModel = Backbone.Model.extend({
        defaults: {
            foo: 'bar'
        }
    });

    return TestModel;

});