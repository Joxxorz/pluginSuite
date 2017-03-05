(function( $ ) {
  $.fn.modalJocky = function(options) {
    var settings = $.extend({
      closeBtn: 'X'
    }, options);

    var topT = document.body.scrollTop;
    var which = '.modalJocky.' + this.data('modal');
    $(which).append('<a onClick="$(this).stopItJocky();" id="stopItJocky">' + settings.closeBtn + '</a>');
    $(which).css('top', topT);
    $(which).css('display', 'block');
    $('body').addClass('stop-scrolling')
  };
  $.fn.stopItJocky = function() {
      var close = document.getElementById('stopItJocky');
      $(close).parent().css('display', 'none');
      close.parentNode.removeChild(close);
      $('body').removeClass('stop-scrolling');
  };
} (jQuery));
