var onumber = document.getElementById('num');
var oleft = document.getElementById('left');
var oright = document.getElementById('right');
var ogo = document.getElementById('goup');
var speed =-2;
oleft.onclick = function () {
    speed=-2;
};
oright.onclick = function () {
    speed=2;
};
    setInterval(function () {
        var leftdis = onumber.offsetLeft;
        onumber.style.left= leftdis + speed + 'px';
        if(leftdis < -onumber.offsetWidth/2){
            onumber.style.left = 0;
        }
        if(leftdis>0){
            onumber.style.left=-onumber.offsetWidth/2 + 'px'
        }
    },30);
    ogo.onclick = function(){
    var top = document.documentElement.scrollTop;
    goup.style.backgroundPosition = '-180px';
    var timer = setInterval(function () {
     scrollTo(0,top*=0.5);
     if(top<1){
         clearInterval(timer);
         scrollTo(0,0);
     }
  },50)
};
