var Shortcurts = (function($, window) {
    var goToNext = function () {
      var link = $('.pagination a[rel=next]').get(0);
      if (link) link.click();
    };
  
    var goToPrevious = function () {
      var link = $('.pagination a[rel=prev]').get(0);
      if (link) link.click();
    };
  
    var showFilter = function () {
      $('.bt-filtrar').click();
      return false;
    };
  
    var clearFilter = function () {
      var btn = $('.bt-limpar-filtro').get(0);
      if (btn) btn.click();
    }
  
    var showHelp = function () {
      $('#shortcuts').modal();
    };
  
    var goToNew = function () {
      // TODO
    };
  
    var goToEdit = function () {
      // TODO
    };
  
    var goBack = function () {
      // TODO
    };
  
    return {
      goToPrevious: goToPrevious,
      goToNext: goToNext,
      showFilter: showFilter,
      clearFilter: clearFilter,
      showHelp: showHelp
    }
  })(jQuery, window);
  