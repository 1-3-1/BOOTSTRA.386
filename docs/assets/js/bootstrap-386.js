function sequentialLoad() {
  var 
    character = {
      height: 20,
      width: 12.4
    },
    wrap = document.body.appendChild(document.createElement('div')),
    bar = wrap.appendChild(document.createElement('div')),
    height = parseInt(window.innerHeight, 10),
    width = parseInt(window.innerWidth, 10),
    column = width, row = height - character.height;

  wrap.setAttribute('style', 'z-index:9999999;background:#000084;position:fixed;bottom:0;right:0;height:100%;width:100%');
  bar.setAttribute('style', 'color:#fff;font-weight:bold;float:right;background:#000084;height:20px;margin-top:-20px;width:100%');

  bar.innerHTML = '_';
  document.body.style.visibility='visible';
  var i = setInterval(function(){
  //approx. 9600b
    for(var m = 0; m < 4; m++) {
      column -= character.width;

      console.log(row, height);
      if(column <= 0) {
        column = width;
        row -= character.height, 
      }
      if(row <= 0) {
        wrap.parentNode.removeChild(wrap);
        clearInterval(i);
      }
      bar.style.width = column + "px";
      wrap.style.height = row + "px";
    }
  }, 1);
}
window.onload = function(){
  sequentialLoad();
}

