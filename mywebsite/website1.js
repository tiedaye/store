var aimg = document.getElementsByTagName('img');
var ocontainer = document.getElementById('container');
var ali = ocontainer.getElementsByTagName('li')
var zIndex = 4;
var nowindex =0;
setInterval(function () {

    aimg[nowindex].style.zIndex = ++zIndex;
    aimg[nowindex].style.opacity = 0;
    animate(aimg[nowindex], {opacity: 100});
    for(var j=0;j<ali.length;j++){
        ali[j].style.background = ""
    }
    ali[nowindex].style.background = "hotpink";
    nowindex++;
    if(nowindex ==ali.length){
        nowindex = 0;

    }

},1000);