function blinkText(){
    var f = document.getElementById("testElement");
    setInterval(function(){
        f.style.visibility = (f.style.visibility == 'hidden'?'':'hidden');
    },1000);
}
