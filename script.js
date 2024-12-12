/*         CONSEGNA
Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)
*/


// DOM elements
const imgLampElm = document.getElementById("lampOff");
const buttonElm = document.getElementById("btn");
let spenta = false
// DOM events
/* 
buttonElm.addEventListener("click",function() {
    imgLampElm.src = 'img/yellow_lamp.png'
}); 
*/

buttonElm.addEventListener("click", function()  {
    if(spenta === true) {
        imgLampElm.src = 'img/yellow_lamp.png';
        spenta = false
    } else {
        imgLampElm.src = 'img/white_lamp.png';
        spenta = true 
    }
})