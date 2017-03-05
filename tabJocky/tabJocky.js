(function( $ ) {
  $.fn.tabJocky = function(options) {
    var settings = $.extend({
      multitab: ''
    }, options);
    // remove active from all tab-selection
    this.siblings().removeClass('active');
    // add active to selected tab
    this.addClass('active');
    //remove active from all tab areas
    $('.tabJocky' + settings.multitab).removeClass('active');
    // add active to correlating tab
    var which = '.tabJocky.' + this.data('tab') + '.' + settings.multitab;
    $(which).addClass('active');
  };
} (jQuery));
