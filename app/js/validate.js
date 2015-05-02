var validateForm = (function () {

    var $form;
    var errorClass = 'inp-field-error';

    function _setUpListeners() {
        $form.on('keydown', '.' + errorClass, _removeError)
            .on('change', '.' + errorClass, _removeError)
            .on('reset', _clearForm);
    }

    _clearForm = function () {
        $form.find('input, textarea').trigger('hideTooltip');
        $form.find('.' + errorClass).removeClass(errorClass);
        $form.find('.input-file span').text('Загрузите изображение');
        $form.find('.success-mes').css({display:'none'});
        //$form.find('.fail-mes, .success-mes').hide();
    }

    function _removeError() {
        $this = $(this);
        $this.removeClass(errorClass);
        if ('file' == $this.attr('type')) {
            $this.siblings('.' + errorClass).removeClass(errorClass);
        }
    }


    function _createQtip(elem, pos) {
        if ('right' === pos) {
            pos = {
                'my': 'left center',
                'at': 'right center'
            };
        } else {
            pos = {
                'my': 'right center',
                'at': 'left center',
                adjust: {
                    method: 'shift none'
                }
            };
        }

        elem.qtip({
            content: {
                text: function () {
                    return $(this).attr('qtip-content');
                }
            },
            show: {
                event: 'show'
            },
            hide: {
                event: 'keydown change hideTooltip'
            },
            position: pos,
            style: {
                classes: 'qtip-style qtip-rounded',
                tip: {
                    height: 10,
                    width: 10
                }
            }
        }).trigger('show');

    }

    return {
        init: function (form_id) {
            if ($(form_id).length) {
                $form = $(form_id);
                _setUpListeners();
            }
            /*else{
             console.log('validate - form not found');
             }*/
        },

        validate: function () {

            // simple check
            var elems = $form.find('input, textarea').not('input[type=file], input[type=hidden]'),
                valid = true;

            $.each(elems, function (index, item) {
                var $elem = $(item);
                var val = $elem.val();
                var pos = $elem.attr('qtip-pisition');

                if (0 === val.length) {
                    $elem.addClass(errorClass);
                    _createQtip($elem, pos);
                    valid = false;
                }
            });


            // input img file chk
            var elemsFile = $form.find('input[type=file]');
            $.each(elemsFile, function (index, item) {

                var $elem = $(item);
                var val = $elem.val();
                var pos = $elem.attr('qtip-pisition');
                var fileType = $elem.data('file-type');
                var chkElem = false;

                if (fileType && 'img' == fileType) {
                    var img_regexp = /\.jpeg$|\.jpg|\.png|\.gif/gi;
                    chkElem = img_regexp.test(val);
                } else {
                    chkElem = val;
                }

                if (!chkElem) {
                    $elem.addClass(errorClass).siblings('.input-file').addClass(errorClass);
                    _createQtip($elem, pos);
                    valid = false;
                }

            });

            return valid;

        }
    }
})();


