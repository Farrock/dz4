$(function(){
    $('.add-project').fancybox({
        scrolling: 'no',
        modal: true,
        padding: 0
    });

    $('.add-project-close').on('click', function(){$.fancybox.close();});

    $(document).on('change', '.file input', function(){
        $(this).parents('.file').find('.input-file span').text($(this).val());
    })
});