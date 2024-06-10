var Timer = (function(){
    var timeout;
    var timeleft;
    var start;
    var functionOnEnd = 1;
  
    function Timer(tempo = null, onEnd = null, userOptions = {}){
      if(tempo && onEnd){
        this.startTimer();
      }
      start = Date.now();
      timeleft = tempo;
      this.setFunctionOnEnd(onEnd);
    }
  
    Timer.prototype.tempoRestante = function(){
      if(!timeleft) return "Timer não está rodando!";
      var s = ((start + timeleft) - Date.now) / 1000;
      return `${s} segundos`;
    }
  
    Timer.prototype.setFunctionOnEnd = function(onEnd = null){
      if(onEnd == null) return functionOnEnd;
      functionOnEnd = onEnd;
      this.stopTimer();
      timeleft = this.getTimeleft();
      if(!timeout) return false
      this.startTimer();
    }
  
    Timer.prototype.startTimer = function(){
      timeout = setTimeout(()=>{
        timeout = null;
        functionOnEnd();
      }, timeleft);
    }
  
    Timer.prototype.getTimeleft = function(){ // retorna em ms
      if(!timeleft) return -1;
      return (start + timeleft) - Date.now();
    }
  
    Timer.prototype.resetTimer = function(){
      if(!timeout) return false
      start = Date.now();
      this.stopTimer();
      this.startTimer();
      return true;
    }
  
    Timer.prototype.stopTimer = function(){
      if(!timeout) return false
      var ret = clearTimeout(timeout);
      return true;
    }
  
    Timer.prototype.tempoRestante = function(){
      if(!timeleft || !timeout) return "Timer não está rodando!";
      return `${this.getTimeleft() / 1000} segundos`;
    }
  
    return Timer;
  })();
  
  var TimerRedirecionador = (function(){
    var url;
    var blacklistUrls = ['testes_controle_qualidade', 'tpms', 'registros_maquina_parada'];
    var options = {};
  
    function TimerRedirecionador(tempo, userUrl, userOptions = {}){
      Timer.call(this, tempo);
      if(tempo && userUrl && location.href != userUrl){ // So redireciona se não está na url
        this.setFunctionOnEnd(function(){redirecionar()});
      }
      this.startTimer();
      url = userUrl;
      options = userOptions;
    }
    TimerRedirecionador.prototype = Object.create(Timer.prototype);
  
    function redirecionar(){
      if(url.includes(location.pathname) || !!blacklistUrls.find((url) =>{return location.pathname.includes(url); })){
       return false;
      }
      $("#aguarde").show();
      $("#aguarde .msg").html(options.redirectMsg || 'Redirecionando para nova página...');
      location.href = url;
    }
    return TimerRedirecionador;
  })();
  