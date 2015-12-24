  $(function(){
      var seconds = 0, minutes = 0, hours = 0, t, append;
      function add() {
          seconds++;
          if (seconds >= 60) {
              seconds = 0;
              minutes++;
              if (minutes >= 60) {
                  minutes = 0;
                  hours++;
              }
          }

          append = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
          $('#timer').html( append );
          timer();
      }
      function timer() {
          t = setTimeout(add, 1000);
      }
      timer();
});