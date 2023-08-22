     document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
     });
     
     var images = document.getElementsByTagName('img');
     for (var i = 0; i < images.length; i++) {
         images[i].addEventListener('dragstart', function(e) {
             e.preventDefault();
         });
     }
     