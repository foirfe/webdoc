//Her finder javascript filen de forskellige elementer fra htmlen
const meatfree = document.getElementById("meatfree");
const kodfri = document.getElementById("kodfri");
const allergies = document.getElementById("allergies");
const allergier = document.getElementById("allergier");
const religion = document.getElementById("religion");
const religionoutput = document.getElementById("religionoutput");
const storkniv = document.getElementById("storkniv");
const mainheading = document.getElementById("mainheading");
const forkcursor = document.getElementById("gaffelcursor");
const knifecursor = document.getElementById("knifecursor");

//Loader til siden
var nowLoading;

function myLoader() {
  nowLoading = setTimeout(showPage, 2300);//2300 normal
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("insidebody").style.display = "block";
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

//Bruges til functionen aktivNavBar
const sections = document.querySelectorAll("section:not(.mobil)");
const navLi = document.querySelectorAll(".sidebar ul li a");



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
//Skifter cursor hvis man klikker på de to connectede billeder
forkcursor.addEventListener("click", function(){
  if(body.classList.contains("kniv")){
    const body = document.getElementById("wholebody");
    body.classList.remove("kniv")
    body.classList.add("gaffel")
    forkcursor.classList.add("slide-out-right")
    knifecursor.classList.remove("slide-out-right")
  }})

  
knifecursor.addEventListener("click", function(){
  if(body.classList.contains("gaffel")){
    const body = document.getElementById("wholebody");
    body.classList.remove("gaffel")
    body.classList.add("kniv")
    forkcursor.classList.remove("slide-out-right")
    knifecursor.classList.add("slide-out-right")
  }})


  