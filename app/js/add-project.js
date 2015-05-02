$(function(){
    $('.add-project').fancybox({
        scrolling: 'no',
        modal: true,
        padding: 0
    });

    $('.add-project-close').on('click', function(){
        $.fancybox.close();
        $(this).parents('.add-project-wp').find('form').trigger('reset');
    });

    $(document).on('change', '.file input', function(){
        $(this).parents('.file').find('.input-file span').text($(this).val());
    });

    $('.js-popup-close').on('click', function(){
        $(this).parents('.js-popup').hide();
    });


    validateForm.init('#add-project-form');

    $('#add-project-form').on('submit', function(e){


        e.preventDefault();
        $('.js-popup.success-mes').hide();
        if(validateForm.validate()){
            // todo send
            if(true){
                $('.js-popup.success-mes').show();
            }else{
                $('.js-popup.fail-mes').show();
            }
        }else{
        }
        
    });

});