
// artiste 
const openText = document.getElementById("open-text")
const readMore = document.getElementById("read-more")

openText.addEventListener('click', showText)

function showText(e){

   readMore.style.display = "block"

   e.preventDefault()
}

// Modal 
var modal = document.getElementById('simpleModal');
var modalBtn = document.getElementById('modalBtn');
var closeBtn = document.getElementById('closeBtn');

modalBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

// Listen for outside click 
window.addEventListener('click', clickOutside);

function openModal(){
  modal.style.display = 'block';
}

function closeModal(){
   modal.style.display = 'none';
}

function clickOutside(e){
   if(e.target == modal){
   modal.style.display = 'none';
   }
}