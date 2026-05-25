// MENU

function toggleMenu(){

  document
  .getElementById("menu")
  .classList
  .toggle("active");

}

// DARK MODE

function modoOscuro(){

  document.body.classList.toggle("dark");

}

// BOTON ARRIBA

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

  if(window.scrollY > 300){

    topBtn.style.display = "block";

  }else{

    topBtn.style.display = "none";

  }

});

// SUBIR

function subir(){

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

}

// ANIMACIONES

const cards =
document.querySelectorAll(".card");

function mostrarCards(){

  const trigger =
  window.innerHeight / 1.2;

  cards.forEach(card=>{

    const top =
    card.getBoundingClientRect().top;

    if(top < trigger){

      card.classList.add("show");

    }

  });

}

window.addEventListener(
  "scroll",
  mostrarCards
);

mostrarCards();
// CERRAR MENU

function cerrarMenu(){

  document
  .getElementById("menu")
  .classList
  .remove("active");

}
// CERRAR MENU AL DAR CLICK

const links =
document.querySelectorAll("nav a");

links.forEach(link=>{

  link.addEventListener("click",()=>{

    cerrarMenu();

  });

});