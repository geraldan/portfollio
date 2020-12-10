function toto() {
    var fig = document.getElementById("toto")[0];
    var posImg = fig.offsetTop;
    function effet(){
      var posCurseur = this.pageYOffset;
      if(posImg-posCurseur<600){
        fig.style.left = 0;
        fig.style.opacity = 1;
      }else{
        fig.style.left = "160%";
        fig.style.opacity = 0;
      }
    }
    window.addEventListener("scroll", effet);
  };

  toto();