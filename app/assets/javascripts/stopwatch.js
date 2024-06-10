var Stopwatch = function(el, options) {
    var offset, clock, interval, elem = el;
  
    // default options
    options = options || {};
    options.delay = options.delay || 1000;
    options.format = options.format || 'minutos';
    options.reverse = options.reverse === true;
    // initialize
    reset();
  
    // private functions
    function start() {
      if (!interval) {
        offset   = Date.now();
        interval = setInterval(update, options.delay);
      }
      return this;
    }
  
    function stop() {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
      return this;
    }
  
    function reset() {
      clock = 0;
      render();
      return this;
    }
  
    function set(value) {
      clock = value
      render();
      return this;
    }
  
    function update() {
      if(clock != null) clock += delta();
      return render();
    }
  
    function render() {
      var times = [],
          seconds = clock / 1000;
      if(clock == null || isNaN(seconds)){
        elem.innerHTML = '--:--';
        return;
      }
      if(options.format == 'minutos'){
        times[0] = Math.floor(seconds / 60);
        times[1] = Math.floor(seconds % 60);
        elem.innerHTML = pad0(times[0], 2) + ':' + pad0(times[1], 2);
      }else if(options.format == 'hora-minuto'){
        min = seconds / 60
        times[0] = Math.floor(min / 60);
        times[1] = Math.floor(min % 60);
        elem.innerHTML = pad0(times[0], 2) + ':' + pad0(times[1], 2);
      }else{
        elem.innerHTML = ''+(seconds / 3600).toFixed(2) + ' hrs';
      }
      return this;
    }
  
    function pad0(value, count) {
      var result = value.toString();
      for (; result.length < count; --count) {
        result = '0' + result;
      }
      return result;
    }
  
    function delta() {
      var now = Date.now(),
          d   = now - offset;
  
      offset = now;
      return options.reverse ? -d : d;
    }
  
    function changeElTo(el){
      elem = el;
      return this;
    }
  
    // public API
    this.start      = start;
    this.stop       = stop;
    this.reset      = reset;
    this.set        = set;
    this.changeElTo = changeElTo;
  };
  