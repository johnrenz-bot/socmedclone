const imgDiv = document.querySelector('.user-img');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');



file.addEventListener('change', function () {
    const chosedfile = this.files[0];
    if (chosedfile) {
        const reader = new FileReader();

        reader.addEventListener('load', function () {
            img.setAttribute('src', reader.result);
        })
        reader.readAsDataURL(chosedfile); 
    }
});






//follow function number
const button = document.getElementById('Follow')
const counterDisplay = document.getElementById('fol1')
const counterDisplay1 = document.getElementById('fol2')
let cookieCounter = 0

button.addEventListener("click", increaseCounter)

function increaseCounter() {
    cookieCounter++
    counterDisplay.innerText = cookieCounter
    counterDisplay1.innerText = cookieCounter
}