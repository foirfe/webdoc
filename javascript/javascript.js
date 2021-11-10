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



//her kan man scrolle i stedet for slideshow
let scroll1 = document.querySelector('.scroll1');
let scroll2 = document.querySelector('.scroll2');
let scroll3 = document.querySelector('.scroll3');
let scroll4 = document.querySelector('.scroll4');
let scroll5 = document.querySelector('.scroll5');
let scroll6 = document.querySelector('.scroll6');
let scroll7 = document.querySelector('.scroll7');

window.onscroll = () =>{
  let pos1 = window.scrollY -3300;
  let pos2 = window.scrollY -4800;
  let pos3 = window.scrollY -6300;
  let pos4 = window.scrollY -7800;
  let pos5 = window.scrollY -9300;
  let pos6 = window.scrollY -10800;
  let pos7 = window.scrollY -12300;
  scroll1.style.left = `${pos1}px`;
  scroll2.style.left = `${pos2}px`;
  scroll3.style.left = `${pos3}px`;
  scroll4.style.left = `${pos4}px`;
  scroll5.style.left = `${pos5}px`;
  scroll6.style.left = `${pos6}px`;
  scroll7.style.left = `${pos7}px`;
}



