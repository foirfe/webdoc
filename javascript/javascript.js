const meatfree = document.getElementById("meatfree");
const kodfri = document.getElementById("kodfri");
const allergies = document.getElementById("allergies");
const allergier = document.getElementById("allergier")
const religion = document.getElementById("religion")
const religionoutput = document.getElementById("religionoutput")

meatfree.addEventListener("click", function(){
    if (kodfri.style.display === "none" && allergier.style.display === "block" || religionoutput.style.display === "block") {
meatfree.classList.add("specialkostmarked")
        kodfri.style.display = "block";
      } 
}) 

allergies.addEventListener("click", function(){
    if (allergier.style.display === "none" && kodfri.style.display === "block" || religionoutput.style.display === "block") {
allergies.classList.add("specialkostmarked")
        allergier.style.display = "block";
        kodfri.style.display = "none";
        religionoutput.style.display === "none"
      } 
}) 



//Slideshow functionen, med hjælp fra W3Schools
var slideIndex = 1;
showSlides(slideIndex);

//Functionen som gør at man kan skifte frem og tilbage i slideshowet
function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}