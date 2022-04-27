// Toggle menu 
document.querySelector('.menu-btn').addEventListener('click', function(){
   document.querySelector('.main-menu').classList.toggle('show');
});


// Like count 
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 6;

let likeCount = document.querySelector('#count-1');
let likeCount2 = document.querySelector('#count-2');
let likeCount3 = document.querySelector('#count-3');
let likeCount4 = document.querySelector('#count-4');
let likeCount5 = document.querySelector('#count-5');
let likeCount6 = document.querySelector('#count-6');


document.querySelector('#heart-1').addEventListener('click', function(){
  count1 += 1;
  likeCount.textContent = count1;
})

document.querySelector('#heart-2').addEventListener('click', function(){
   count2 += 1
   likeCount2.textContent = count2;
})

document.querySelector('#heart-3').addEventListener('click', function(){
   count3 += 1
   likeCount3.textContent = count3;
})

document.querySelector('#heart-4').addEventListener('click', function(){
   count4 += 1
   likeCount4.textContent = count4;
})

document.querySelector('#heart-5').addEventListener('click', function(){
   count5 += 1
   likeCount5.textContent = count5;
})

document.querySelector('#heart-6').addEventListener('click', function(){
   count6 += 1
   likeCount6.textContent = count6;
})

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

// // albums
let num1Count = 0;
let num2Count = 0;
let num3Count = 0;
let num4Count = 0;
let num5Count = 0;
let num6Count = 0;

let like1Count = document.querySelector('#count1');
let like2Count = document.querySelector('#count2');
let like3Count = document.querySelector('#count3');
let like4Count = document.querySelector('#count4');
let like5Count = document.querySelector('#count5');
let like6Count = document.querySelector('#count6');



