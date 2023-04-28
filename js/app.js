console.log("Hello World !");
// Here are the rules !
/* ************************************************* */
// HEADER
/* ************************************************* */
// select the header and change its display to grid
const header = document.querySelector("header");
header.style.display="grid";

// use place-items to center the <h1></h1>
const h1 = document.querySelector("h1")
h1.style.display="grid";
h1.style.placeItems="center";

// add a background image. It should be set to cover
header.style.backgroundImage="url('img/jack.png')"
header.style.backgroundRepeat="no-repeat";

/* ************************************************* */
// SECTIONS
/* ************************************************* */
// add a 1.5rem padding, a pink 1px border and a 5px border-radius to ALL sections
const section = document.querySelector("section")
section.style.padding="1.5rem";
section.style.border="1px solid pink";
section.style.borderRadius="15px";
/* ************************************************* */
// TEXT PLAYGROUND
/* ************************************************* */
// select the first and last paragraph of the text-playground  section and set their text color to pink
const first = document.querySelector("#text-playgroung p")
const last = document.querySelector("#text-playgroung p:last-child")
first.style.color = "pink"
last.style.color = "pink"
// select all paragraphs in this section and turn their first letter into a <span></span>
const allp = document.querySelectorAll("#text-playgroung p")
// on parcours la liste des éléments p
for(p  of allp) {
    // pour chaque élément on récupère son contenu texte
    let content = p.innerText

    // on récupère la première lettre de chaque texte
     let firstletter =content.substring(0,1).toUpperCase()
     //console.log(firstletter)
let rest = content.substring(1)
    // on transforme la lettre en l'insérant dans un span
firstletter = "<span>" + firstletter + "</span>"

    // on crée une nouvelle chaîne de caractères en concanténant le span et le reste de la string initiale
let newString = firstletter + rest

    // on remplace le contenu textuel du paragraphe par la nouvelle chaîne de carcatères
    p.innerHTML = newString
// set the <span></span> font size to 2.5rem
    p.querySelector("span").style.fontSize = "2.5rem"
}
/* ************************************************* */
// DISPLAY PLAYGROUND
/* ************************************************* */
// select the div with ID display-playground and change its display to flex
const dp = document.querySelector("#display-playground ")
dp.style.display ="flex";

// in that div, look for the articles and set their flex property to 1
const dps = document.querySelector("#display-playground  article")
dps.style.flex="1";
/* ************************************************* */
// INPUTS PLAYGROUND
/* ************************************************* */
// set the text content of text-display to the value of text-input
//sélectionner la balise HTML de text-input
  let contentElemnt = document.querySelector("#text-input");
//utiliser innerHTML pour récupérer le contenu de text-input 
   let sourceContent = contentElemnt.value; 
//selctionner la div dans laquelle nous souhaitons ajouter le contenu
     let contentDisplay = document.querySelector(".text-display");
// ajouter le contenu récupéré à la div  
    contentDisplay.innerHTML = sourceContent;

// set Option 1 and Option 2 to checked
const checkboxes = document.querySelectorAll("[type=checkbox]")
checkboxes[0].checked = true;
checkboxes[1].checked = true;

// display the values of checked options in checkbox-display
z
// display the value of the selected option for radio inputs in radio-display
let radio = document.querySelectorAll('input[type="radio"]')
let valueRadio = document.querySelector('.radio-display')

radio.forEach(function (radios) {
  if (radios.checked) {
    valueRadio.innerHTML += '<p>' + radios.value + '</p>'
  }
})


// display the result of the numbers computation in number-display


/* ************************************************* */
// COLOR PLAYGROUND
/* ************************************************* */
// select the box-color element
let colorbox = document.querySelector(".color-box");
// get its background-color
let printbackground = window.getComputedStyle(colorbox);
let backgroundcolor = printbackground.getPropertyValue("background");
console.log(backgroundcolor)
// create a p element
let createp =document.createElement("p");

console.log(createp)
// set its text-content to the background-color value
createp =document.createTextNode(backgroundcolor);

// append the p element to the box-color element
colorbox.append(createp)

// change the box-color display to grid and set its place-items property to center
colorbox.style.display = "grid";
colorbox.style.placeItems = "center";

/* ************************************************* */
// POSITION PLAYGROUND
/* ************************************************* */
// change the position and color of the divs inside position-box
const divs =document.querySelector(".position-box")
// change the color of position-box
divs.style.background="red";
// change the position
divs.style.display="flex";
//changement de couleur de la div 1 de la div position-box
const div1 = document.querySelector(".one")
div1.style.background="blue"
//changement de couleur de la div 2 de la div position-box
const div2 = document.querySelector(".two")
div2.style.background="white"

//changement de couleur de la div 3 de la div position-box
const div3 = document.querySelector(".three")
div3.style.background="green"



/*déclaration de la fonction avec pour paramètres array et callback  
*/




