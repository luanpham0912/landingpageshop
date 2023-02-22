
var widthChange = function(){
    var widthBrowser = window.innerWidth;
    if(widthBrowser <= 768){
        document.getElementById('navbarMassive').classList.replace('nav-normal','navbar-scroll');
        window.removeEventListener("scroll",function(){});
    }
    else{
        document.getElementById('navbarMassive').classList.replace('navbar-scroll','nav-normal');
        var trangthai="duoi300";
        window.addEventListener("scroll", function(){
            var menu = document.querySelectorAll('div.nav-normal');
            var menu = menu[0];          
            var x =  window.pageYOffset;
            if(x > 0.1){
                if(trangthai == "duoi300")
                {
                    trangthai="tren300";
                    menu.classList.add('navbar-scroll');
                }
            }
            else{
                if(trangthai=="tren300"){
                menu.classList.remove('navbar-scroll');
                trangthai="duoi300";}
            }
        });
    }
}


    
const progressAnimate = function(){    
        let element = document.getElementsByClassName('skill__massive');
        for(let i = 0 ; i < element.length ; i++){
            element[i].classList.replace('animate__fadeOut', 'animate__fadeInLeft');
        }

}

window.onload = function(){
    widthChange();
}
window.onresize = function(){
    widthChange();
    
}

var buttonBackToTop = document.querySelector('#backtotop'); 

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ( document.documentElement.scrollTop > 100) {
    buttonBackToTop.style.opacity = "1";
  } else {
    buttonBackToTop.style.opacity = "0";
  }
}
function toTop(){
    document.documentElement.scrollTop = 0;
}







