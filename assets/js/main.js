jQuery(function ($) {
    function fixDiv() {
        var $cache = $('#getFixed');
        if ($(window).scrollTop() > 100)
            $cache.show();
        else
            $cache.hide();
    }
    $(window).scroll(fixDiv);
    fixDiv();
});