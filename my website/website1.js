var aimg = document.getElementsByTagName('img');
var ocontainer = document.getElementById('container');
var ali = ocontainer.getElementsByTagName('li')
var zIndex = 4;
var nowindex =0;
setInterval(function () {
    if(nowindex ==aimg.length - 1){
        nowindex = 0;
    }
    aimg[nowindex].style.zIndex = ++zIndex;
    aimg[nowindex].style.opacity = 0;
    animate(aimg[nowindex], {opacity: 100})
    ali[nowindex].className = 'selected';
    aimg[nowindex].className = 'selected';
    nowindex++;
},1000);