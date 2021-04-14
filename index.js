const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const slides = document.querySelectorAll('.slide')

var slideIndex = 0
prev.addEventListener('click',handlePrev)
next.addEventListener('click',handleNext)

function handlePrev(){
   
    slides[slideIndex].classList.remove('current')       // remove('.current') 错误
    console.log(slides[slideIndex].classList)
     slideIndex--
     if(slideIndex<0){
         slideIndex =slides.length-1
     }
    slides[slideIndex].classList.add('current')          //
   
}
function handleNext(){
   
    slides[slideIndex].classList.remove('current')       // remove('.current') 错误
    console.log(slides[slideIndex].classList)
     slideIndex++
     if(slideIndex>=slides.length){
         slideIndex = 0
     }
    slides[slideIndex].classList.add('current')          //
   
}