define([
    // 'jquery',
    // 'underscore',
    // 'backbone',
    'marionette', 
    'views/HeaderView', 
    'views/BodyView',
    'text!templates/root.html'
],
    
function(Mn, HeaderView, BodyView, rootTemplate) {

    var RootView = Mn.View.extend({
        className: 'container',

        regions: {
            header: '#header',
            body: '#body',
            footer: '#footer'
        },

        initialize: function( options, arg2, arg3 ) {
            // console.log( 'RootView options: ', options );
            console.log( 'option foo: ', this.getOption('foo') );
            // console.log( 'RootView arg2: ', arg2 );
            // console.log( 'RootView arg3: ', arg3 );
            var headerView = new HeaderView();
            
            this.listenTo( headerView, 'initHeader', function(arg) {
                console.log( 'headerView was initialized: ', arg );
            });
        },
        
        template: _.template( rootTemplate ),

        onRender: function() {
            // console.log( 'RootView has rendered' );

            this.showChildView( 'header', new HeaderView() );
            this.showChildView( 'body', new BodyView() );
        }
    });

    return RootView;

});