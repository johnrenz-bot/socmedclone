// Comment!
let texts;
let posh = document.querySelector("#poss")


function showHidepost() {
 posh.classList.toggle("hide");
 texts = document.getElementById("texts").value;
   document.getElementById("poshing").textContent = texts;
     let x = document.getElementById("poss");
 }



let coms = document.querySelector("#comms")

function showHidepost2() {
   coms.classList.toggle("hide");
}

const commms = document.querySelector("#postingss")

function showHidepost3() {
   document.getElementById("poshingss").textContent = "@username : " +  texts; 



   texts = document.getElementById("comment").value;
   document.getElementById("poshings").textContent = "@username : " +  texts;
     let x = document.getElementById("comms");
      
     commms.classList.toggle("hide");
}


//button posting
const submitbutton = document.getElementById("posting");
const input = document.getElementById("texts");

input.addEventListener("keyup", (e) => {
   const value = e.currentTarget.value;
   submitbutton.disabled = false;
   e
   if (value === "") {
      submitbutton.disabled = true;
   }
});


//heart react color
const Heart = document.getElementById('heart')

Heart.addEventListener("click", changeColor) 

function changeColor(){
   Heart.style.color = 'red';
}



//settings
const  sheesh = document.querySelector("#settings")
const Dotss = document.getElementById('dots')

Dotss.addEventListener("click",  DoSomething)

function DoSomething(){
 sheesh.classList.toggle("hide");
}
   


const deletee = document.getElementById('delete')
const set = document.querySelector("#settings")

deletee.addEventListener("click",  remove)

function remove() {

   const element = document.getElementById('poss');
   element.remove();

   set.classList.toggle("hide");
}

// 
const Editing = document.getElementById('Edit')
let Text;

editing.addEventListener('click', edit)

function edit() {
   alert('X')
}





//  const file = document.querySelector('#file');
//  const uploadbtn = document.querySelector('#uploadbtn');

//  file.addEventListener( 'upload' , function() {
   

//    })