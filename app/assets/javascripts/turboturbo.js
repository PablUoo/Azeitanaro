// This library fixes common problems with turbolinks
// - Overwrite setTimeout and setInterval to intercept generated ID's
// - Keep track of Ajax requests
//
// When turbolinks' unload event is called, we:
// - Cancel all setTimeouts and setIntervals
// - Abort all still running Ajax requests

Turbolinks.ProgressBar.disable();

$.turboTurbo = {
  xhrPool: [],
  setTimeoutPool: [],
  setIntervalPool: [],
  setup: function() {
    window.turboTurboSetTimeout = window.setTimeout;
    window.turboTurboSetInterval = window.setInterval;
    window.setTimeout = function(func, delay) {
      var timeoutId;
      timeoutId = window.turboTurboSetTimeout(func, delay);
      $.turboTurbo.setTimeoutPool.push(timeoutId);
      return timeoutId;
    };
    window.setInterval = function(func, interval) {
      var intervalId;
      intervalId = window.turboTurboSetInterval(func, interval);
      $.turboTurbo.setIntervalPool.push(intervalId);
      return intervalId;
    };
    $.ajaxSetup({
      beforeSend: function(jqXHR) {
        return $.turboTurbo.xhrPool.push(jqXHR);
      },
      complete: function(jqXHR) {
        return $.turboTurbo.xhrPool.splice($.inArray(jqXHR, $.turboTurbo.xhrPool), 1);
      }
    });
    return $(document).on("page:before-unload", function() {
      return $.turboTurbo.unload();
    });
  },
  unload: function() {
    var intervalId, results, timeoutId, xhr;
    while (xhr = $.turboTurbo.xhrPool.pop()) {
      xhr.abort();
    }
    while (timeoutId = $.turboTurbo.setTimeoutPool.pop()) {
      clearTimeout(timeoutId);
    }
    results = [];
    while (intervalId = $.turboTurbo.setIntervalPool.pop()) {
      results.push(clearInterval(intervalId));
    }
    return results;
  }
};

$.turboTurbo.setup();
