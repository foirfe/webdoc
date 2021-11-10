//Her finder javascript filen de forskellige elementer fra htmlen
const meatfree = document.getElementById("meatfree");
const kodfri = document.getElementById("kodfri");
const allergies = document.getElementById("allergies");
const allergier = document.getElementById("allergier");
const religion = document.getElementById("religion");
const religionoutput = document.getElementById("religionoutput");
const storkniv = document.getElementById("storkniv");
const mainheading = document.getElementById("mainheading");

//Loader til siden
var nowLoading;

function myLoader() {
  nowLoading = setTimeout(showPage, 2500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("insidebody").style.display = "block";
}

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



//Gør således at sidebaren får en active class når den bliver trykket på
const allItems = document.querySelectorAll(".sidebar ul li a");

allItems.forEach(item => {
    item.addEventListener( "click", function(e){

for(var i=0; i < allItems.length; i ++) {
    allItems[i].classList.remove("active");
}
        this.classList.add("active");
    });
});

//Gør således at sidebaren får en active class hvis den section id i vinduet passer med classen i sidebaren
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".sidebar ul li a");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((a) => {
    a.classList.remove("active");
    if (a.classList.contains(current)) {
      a.classList.add("active");
    }
  });
};


//Øje der følger en efter hvor musen er på den sektion
var eyeball = document.getElementById("eyeball");
const eyesection = document.getElementById("eyesection");
const body = document.querySelector("body")

body.onmousemove = function(event){
    var x = event.clientX * 10 / window.innerWidth + "%";
    var y = event.clientY * 10 / window.innerHeight + "%";

for(var i=0;i<2;i++){
    eyeball.style.left = x;
    eyeball.style.top = y;
}
}

