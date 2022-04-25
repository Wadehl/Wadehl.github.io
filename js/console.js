if (window.console) {
    Function.prototype.makeMulti = function () {
      let l = new String(this);
      l = l.substring(l.indexOf("/*") + 3, l.lastIndexOf("*/"));
      return l;
    };
    let string = function () {
      /*
____   ____             __   .__    ____     ____  __.          .__        
\   \ /   /____   ____ |  | _|__|  /  _ \   |    |/ _|_______  _|__| ____  
 \   Y   // __ \ /    \|  |/ /  |  >  _ </\ |      <_/ __ \  \/ /  |/    \ 
  \     /\  ___/|   |  \    <|  | /  <_\ \/ |    |  \  ___/\   /|  |   |  \
   \___/  \___  >___|  /__|_ \__| \_____\ \ |____|__ \___  >\_/ |__|___|  /
              \/     \/     \/           \/         \/   \/             \/  
      */
    };
    console.log(string.makeMulti());
    console.log("Made by Kevin!!");
  }