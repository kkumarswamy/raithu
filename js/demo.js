$(function () {
    $(document).scroll(function () {
        var $nav = $("#scrol-nav");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
  });

  /* menu coade */

  