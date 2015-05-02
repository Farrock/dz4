$(function(){
    validateForm.init('#contacts-form');

    $('#contacts-form').on('submit', function(e){

        e.preventDefault();
        $('.js-popup.success-mes').hide();
        if(validateForm.validate()){
            // todo send

        }else{
        }

    });
});