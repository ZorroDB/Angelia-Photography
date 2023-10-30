var imgs = document.querySelectorAll('.slider_container .slider img');
var dots = document.querySelectorAll('.dot');
var currentImg = 0;
const interval = 3000;

function ChangeSlide(n){
    for(var i = 0; i < imgs.length; i++){
        imgs[i].style.opacity = 0;
        dots[i].className = dots[i].className.replace(' active', '');
    }
    currentImg = (currentImg + 1) % imgs.length;

if (n != undefined) {
    clearInterval(timer);
    timer = setInterval(ChangeSlide, interval);
    currentImg = n;
}

    imgs[currentImg].style.opacity = 1;
    dots[currentImg].className += ' active';
}

var timer = setInterval(ChangeSlide, interval);


var modal = document.getElementById("myModal");

var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  console.log("successfully showing image");
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}