//heart color
const Heart = document.getElementById('heart')

Heart.addEventListener("click", changeColor)

function changeColor() {
   Heart.style.color = 'red';
}


//comment
let coms = document.querySelector("#comms")
const input1 = document.getElementById("comment");


function showHidepost2() {
   coms.classList.toggle("hide");
}

let commms = document.querySelector("#postingss")


function showHidepost3() {


   texts = document.getElementById("comment").value;
   document.getElementById("poshings").textContent = "@username : " + texts;
   let x = document.getElementById("comms");

   commms.classList.toggle("hide");
}





//Following
const buttons = document.getElementById("Follow");

buttons.addEventListener("click", change)


function change() {
   document.querySelector("#Follow").textContent = "Following"
   buttons.style.backgroundColor = 'Transparent';

}