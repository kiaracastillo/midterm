/* Kiara Castillo Magallanes
10/13/2022
Midterm 
Nav H


'Make an application with six divs on the screen, each with a different word.
When any of the divs is clicked,highlight that div by changing its background 
color and making the text bold.
remove the bold/background highlight from any other divs.
add the clicked div's text into a seperate div at the top of the screen.'
*/


let topBox = document.getElementById("topBox");
let contact = document.getElementById("contact");
let menu = document.getElementById("menu");
let us = document.getElementById("us");
let services = document.getElementById("services");
let donate = document.getElementById("donate");
let home = document.getElementById("home");

// top box
topBox.style.height = "40px";
topBox.style.width = "100px";
topBox.style.border = "solid #f5dbbc";
topBox.style.float = "left";
topBox.style.marginBottom = "10px";

//style contact div 
contact.style.height ="40px";
contact.style.width = "100px";
contact.style.border = "solid #f5dbbc";
contact.style.float = "left";
contact.style.marginBottom = "10px";

//style menu div 
menu.style.height = "40px";
menu.style.width = "100px";
menu.style.border = "solid #f5dbbc";
menu.style.float = "left";
menu.style.marginBottom = "10px";

//style us div 
us.style.height = "40px";
us.style.width = "100px";
us.style.border = "solid #f5dbbc";
us.style.float = "left";
us.style.marginBottom = "10px";

//style services div 
services.style.height = "40px";
services.style.width = "100px";
services.style.border = "solid #f5dbbc";
services.style.float = "left";
services.style.marginBottom = "10px";

//style donate div 
donate.style.height = "40px";
donate.style.width = "100px";
donate.style.border = "solid #f5dbbc";
donate.style.float = "left";
donate.style.marginBottom = "10px";

//style home div 
home.style.height = "40px";
home.style.width = "100px";
home.style.border = "solid #f5dbbc";
home.style.float = "left";
home.style.marginBottom = "10px";

 
//highlights box 
function highlight(id) {
   
    this.unHighlight();
    id.style.backgroundColor = "#fae79d";
    topBox.innerHTML = id.innerHTML;
    if(id.style.backgroundColor = "#fae79d"){
        id.style.fontWeight = "bold";
    }
}

//unhighlights box
function unHighlight() {
    let selected = document.getElementsByClassName("selected");

    
for(let i=0; i < selected.length; i++)
    {
    let id = selected[i];
    id.style.backgroundColor = "#ffbfb5";
        if(id.style.backgroundColor = "#ffbfb5"){
        id.style.fontWeight = "normal";
        }
    }
}




















































/*
// create variable dv, pull the element by the class name, "dvWord"
var dv =  document.getElementsByClassName("dvWord"); 


// create a for loop
for(let i = 0; i < dv.length; i++) {
    // initial style for [i] 
    dv[i].style.height = "100px";
    dv[i].style.width = "100px";
    dv[i].style.backgroundColor = "#94eb9f"; 
}

 
// highlight function
function highlight() {
    // create a for loop 
    for(let i = 0; i < dv.length; i++) {
        // this styles [i] again 
        dv[i].style.height = "100px";
        dv[i].style.width = "100px";
        dv[i].style.backgroundColor = "#94eb9f"; 
        dv[i].style.margin = "0 0"; 
    } 

    // targets the div to set the styles
    event.target.style.backgroundColor = "red";
    event.target.style.fontWeight = 'bold';
    event.target.style.margin = '0 auto';
}
<div class="dvWord" onclick="highlight()">Coke</div>

    <div class="dvWord" onclick="highlight()">Pepsi</div>

    <div class="dvWord" onclick="highlight()">Fanta</div>

    <div class="dvWord" onclick="highlight()">Water</div>

    <div class="dvWord" onclick="highlight()">Mug</div>

    <div class="dvWord" onclick="highlight()">Crush</div>
*/