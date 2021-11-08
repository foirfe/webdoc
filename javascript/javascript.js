//Her finder javascript filen de forskellige elementer fra htmlen
const meatfree = document.getElementById("meatfree");
const kodfri = document.getElementById("kodfri");
const allergies = document.getElementById("allergies");
const allergier = document.getElementById("allergier");
const religion = document.getElementById("religion");
const religionoutput = document.getElementById("religionoutput");
const storkniv = document.getElementById("storkniv");
const mainheading = document.getElementById("mainheading");

//Her skifter det specialkost div alt efter hvilken knap der bliver trykket på.
meatfree.addEventListener("click", function(){
    if (kodfri.style.display === "none") {
    meatfree.classList.add("specialkostmarked");
        kodfri.style.display = "block";
        allergier.style.display = "none";
        religionoutput.style.display = "none";
        allergies.classList.remove("specialkostmarked");
        religion.classList.remove("specialkostmarked");
      }
    })

allergies.addEventListener("click", function(){
        allergier.style.display = "block";
        kodfri.style.display = "none";
        religionoutput.style.display = "none";
        allergies.classList.add("specialkostmarked");
        meatfree.classList.remove("specialkostmarked");
        religion.classList.remove("specialkostmarked")
})
religion.addEventListener("click", function(){
    religionoutput.style.display = "block";
    kodfri.style.display = "none";
    allergier.style.display = "none";
    allergies.classList.remove("specialkostmarked");
    religion.classList.add("specialkostmarked");
    meatfree.classList.remove("specialkostmarked");
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