;(function($) {
    $.fn.localStorageField = function() {
        $(this).each(function() {
            $(this).val(window.localStorage[$(this).attr('name')]);
        });
        
        $(this).bind('change keyup blur', function() {
            window.localStorage[$(this).attr('name')] = $(this).val();
        });
    };
})(jQuery);