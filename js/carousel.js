const slides = document.getElementsByClassName('carousel-item');

let slidePosition = 0;

const totalSlides = slides.length;

const nav = document.getElementsByClassName('dot');

// const carouselButtonNext = document.getElementById('carousel-button-next');

// const carouselButtonPrev = document.getElementById('carousel-button-prev');

// carouselButtonNext.addEventListener('click', moveToNextSlide);

// carouselButtonPrev.addEventListener('click', moveToPrevSlide);



function hideAllSlides(){
   // for (let slide of slides){
   //   slide.classList.remove('carousel-item-visible');
   //   slide.classList.add('carousel-item-hidden');      
   // }

   for(let i = 0; i < slides.length; i++){
      slides[i].classList.remove('carousel-item-visible');
      slides[i].classList.add('carousel-item-hidden');
   }
}

moveToNextSlide();

function moveToNextSlide(){
   hideAllSlides();

 if(slidePosition === totalSlides - 1){
    slidePosition = 0;
 }else{
    slidePosition++;
 }

 for(let i = 0; i < nav.length; i++){
   nav[i].className = nav[i].className.replace("active", "");
}

slides[slidePosition].classList.add("carousel-item-visible");

nav[slidePosition].classList.add("active");


 setTimeout(moveToNextSlide, 2000);


}

// function moveToPrevSlide(){
//    hideAllSlides();
   
//    if (slidePosition === 0){
//      slidePosition = totalSlides - 1; 
//    }else{
//       slidePosition--;
//    }

//    slides[slidePosition].classList.add("carousel-item-visible");
// }


   for(let i = 0; i < nav.length; i++){
       nav[i].className = nav[i].className.replace("active", "");
      
   }


  





