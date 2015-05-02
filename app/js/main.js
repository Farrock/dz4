$(function(){

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