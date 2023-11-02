
//Aanmaken variablen
var imgs = document.querySelectorAll('.slider_container .slider img');
var dots = document.querySelectorAll('.dot');
var currentImg = 0;
const interval = 3000;

//Change slide functie
function ChangeSlide(n){
    for(var i = 0; i < imgs.length; i++){
        imgs[i].style.opacity = 0;
        dots[i].className = dots[i].className.replace(' active', '');
    }
    currentImg = (currentImg + 1) % imgs.length;
//Reset timer en n var naar current img
if (n != undefined) {
    clearInterval(timer);
    timer = setInterval(ChangeSlide, interval);
    currentImg = n;
}
    //bij img gekozen
    imgs[currentImg].style.opacity = 1;
    dots[currentImg].className += ' active';
}
//timer
var timer = setInterval(ChangeSlide, interval);




//modal afbeeldingen (vergroting van img)
document.addEventListener("DOMContentLoaded", function () {
  //aanmaken van de vars
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");
  var closeBtn = document.querySelector(".close");
  var images = document.querySelectorAll(".myImg");

  //loop voor aanpassen img gekozen naar modalimg
  images.forEach(function (img) {
    img.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.src;
      console.log("Successfully showing image");
    });
  });

  //sluiten van afbeelding
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });
});