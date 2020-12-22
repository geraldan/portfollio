/*declenchement a la fin de la lecture du css sino le js ce lance tout de suite et il fait une erreur */
window.onload = function() {

//creation variables
var nav = document.getElementById("nav");
var nav1 = document.getElementById("nav1");
var nav2 = document.getElementById("nav2");
var nav3 = document.getElementById("nav3");
var competence = document.getElementById("comptence");
var contact = document.getElementById("contact");


//donne lemplacement ou il doit scroller pour accueil
function accueil(){
    window.scrollTo({top: 0, behavior: 'smooth'});
}

//donne lemplacement ou il doit scroller pour projet
function projet(){
    window.scrollTo({top: 0, behavior: 'smooth'});
}

//donne lemplacement ou il doit scroller pour competences
function competences(){
    competence.scrollIntoView({behavior: 'smooth'});
}

//donne lemplacement ou il doit scroller pour contact
function contacts(){
    contact.scrollIntoView({behavior: 'smooth'});
}
// commande du clic
nav.addEventListener("click" , accueil);
nav1.addEventListener("click" , projet);
nav2.addEventListener("click" , competences);
nav3.addEventListener("click" , contacts);
}