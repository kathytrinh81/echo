    function echo() {
      
      var args = Array.prototype.slice.call(arguments);
      if (typeof args[0] === 'undefined') {
            document.write("<br/>");
          } else{
      		args.forEach(function(arg) {
           
            document.write(arg + "<br/>");
          
      });}
      }

      echo();
      echo('bla');
      echo('foo', 'bar', 'baz');
