$(document).ready(function () {
    /*menu*/
    $('[data-menu-open]').click(function (e) {
        var targeted_menu_class = $(this).attr('data-menu-open');
        $(this).toggleClass("collapsed");
        if ($(this).hasClass("collapsed")) {
            $('html, body').addClass("overflow");
            $('[data-menu="' + targeted_menu_class + '"]').addClass('open');
        } else {
            $('html, body').removeClass("overflow");
            $('[data-menu="' + targeted_menu_class + '"]').removeClass('open');
        }
        e.preventDefault();
    });
    $('.close-menu').click(function () {
        $('.icon-menu').trigger('click');
    });
    /*end menu*/
    
    /* section about */
    (function () {
        $('.btn-tab-prev').on('click', function (e) {
            e.preventDefault()
            $('#' + $('.nav-item > .active').parent().prev().find('a').attr('id')).tab('show')
        })
        $('.btn-tab-next').on('click', function (e) {
            e.preventDefault()
            $('#' + $('.nav-item > .active').parent().next().find('a').attr('id')).tab('show')
        })
    })();
    /* end section about */

    // animation
    var doAnimations = function() {
      // Calc current offset and get all animatables
      var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $(".animatable");

      // Unbind scroll handler if we have no animatables
      if ($animatables.length == 0) {
        $(window).off("scroll", doAnimations);
      }

      // Check all animatables and animate them if necessary
      $animatables.each(function(i) {
        var $animatable = $(this)
        if ($animatable.offset().top + 20 < offset) {
          $animatable.removeClass("animatable").addClass("animated");
        }
      });
    };

    // Hook doAnimations on scroll, and trigger a scroll
    $(window).on("scroll", doAnimations);
    $(window).trigger("scroll");
    // end animation
    
});