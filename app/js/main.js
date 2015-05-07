$(function(){
// Avoid `console` errors in browsers that lack a console.
    (function() {
        var method;
        var noop = function () {};
        var methods = [
            'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
            'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
            'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
            'timeStamp', 'trace', 'warn'
        ];
        var length = methods.length;
        var console = (window.console = window.console || {});

        while (length--) {
            method = methods[length];

            // Only stub undefined methods.
            if (!console[method]) {
                console[method] = noop;
            }
        }
    }());
    if(window.Modernizr){
        Modernizr.load({
            test: Modernizr.input.placeholder,
            nope: ['/bower/jquery-placeholder/jquery.placeholder.min.js'],
            complete: function(){
                console.log('modernizr load complete');
                $('.inp-field').placeholder();
            }
        });
    }
    

    if($('.lt-ie9').length){
        
        $('.left-col-menu-item:last-child').css('border-bottom', 'none');
        //$('.left-col-menu-item:last-child').addClass('lstchild'); // не срабатывает
    }
    

});