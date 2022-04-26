document.querySelector('.menu-btn').addEventListener('click', function(){
   document.querySelector('.main-menu').classList.toggle('show');
});

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;

let likeCount = document.querySelector('#count-1');
let likeCount2 = document.querySelector('#count-2');
let likeCount3 = document.querySelector('#count-3');
let likeCount4 = document.querySelector('#count-4');
let likeCount5 = document.querySelector('#count-5');


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