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

document.querySelector('#single-1').addEventListener('click', function(){
   num1Count += 1;
   like1Count.textContent = num1Count;
 })
 
 document.querySelector('#single-2').addEventListener('click', function(){
    num2Count += 1
    like2Count.textContent = num2Count;
 })
 
 document.querySelector('#single-3').addEventListener('click', function(){
    num3Count += 1
    like3Count.textContent = num3Count;
 })
 
 document.querySelector('#single-4').addEventListener('click', function(){
    num4Count += 1
    like4Count.textContent = num4Count;
 })
 
 document.querySelector('#single-5').addEventListener('click', function(){
    num5Count += 1
    like5Count.textContent = num5Count;
 })
 
 document.querySelector('#single-6').addEventListener('click', function(){
    num6Count += 1
    like6Count.textContent = num6Count;
 })



