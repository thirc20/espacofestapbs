let currentSlide = 1;
let num = 1

function showSlide(n) {
    const slides = document.getElementsByClassName('slide');
    
    if (n > slides.length) {
        currentSlide = 1;
    } else if (n < 1) {
        currentSlide = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[currentSlide - 1].style.opacity = '100%';
    slides[currentSlide - 1].style.display = 'block';
}

function changeSlide(n) {
    showSlide(currentSlide += n);
}

function automaticSlide(){
    if(num == 1){
        changeSlide(1)
    }
}

document.querySelector('.next').addEventListener('click', ()=> {
    num = 2 
})

document.querySelector('.prev').addEventListener('click', ()=> {
    num = 2 
})

setInterval(() => {
    if(num == 1)
    automaticSlide()
}, 3000);

document.addEventListener('DOMContentLoaded', showSlide(currentSlide));
