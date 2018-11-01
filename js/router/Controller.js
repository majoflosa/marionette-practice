define([], function() {

    var Controller = {
        taskDetails: function( taskid ) {
            console.log( 'taskid: ', taskid );
        },

        home: function() {
            console.log( 'going home' );
        }
    };

    return Controller;

});