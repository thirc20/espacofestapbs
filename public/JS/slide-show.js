let currentSlide;
let num = 1

function showslide(obj){
    let slides = document.querySelectorAll('.slide')

    if(obj.f == 1){
        slides[0].classList.add('slide-enter')
        slides[0].style.display = 'block'
        
        setTimeout(() => {
            slides[0].classList.remove('slide-enter')
        }, 950);
    }
    
    if(obj.f == 2){
        
        for (let i = 0; i < slides.length; i++) {
            if(slides[i].style.display == 'block'){
                if(i < 3){
                    slides[i].classList.add('next-slide')
                    
                    setTimeout(() => {
                        slides[i].style.display = 'none'
                        slides[i].classList.remove('next-slide')
                        
                        slides[i + 1].classList.add('slide-enter')
                        slides[i + 1].style.display = 'block'
                        
                        setTimeout(() => {
                            slides[i + 1].classList.remove('slide-enter')
                            
                        }, 425);
                    }, 425);
                }else {
                    slides[i].classList.add('next-slide')
                    
                    setTimeout(() => {
                        slides[i].style.display = 'none'
                        slides[i].classList.remove('next-slide')
                        
                        slides[0].classList.add('slide-enter')
                        slides[0].style.display = 'block'
                        
                        setTimeout(() => {
                            slides[0].classList.remove('slide-enter')
                            
                            setTimeout(() => {
                                slides[0].classList.remove('slide-enter')
                            }, 425);
                        }, 425);
                    }, 425);
                }
            }           
        }
    }
    
    if(obj.f == 0){
        
        for (let i = 0; i < slides.length; i++) {
            if(slides[i].style.display == 'block'){
                if(i > 0){
                    slides[i].classList.add('prev-slide')
                    
                    setTimeout(() => {
                        slides[i].style.display = 'none'
                        slides[i].classList.remove('prev-slide')
                        
                        slides[i - 1].classList.add('slide-exit')
                        slides[i - 1].style.display = 'block'
                        
                        setTimeout(() => {
                            slides[i - 1].classList.remove('slide-exit')
                            
                        }, 425);
                    }, 425);
                }else {
                    slides[i].classList.add('prev-slide')
                    
                    setTimeout(() => {
                        slides[i].style.display = 'none'
                        slides[i].classList.remove('prev-slide')
                        
                        slides[slides.length - 1].classList.add('slide-exit')
                        slides[slides.length - 1].style.display = 'block'
                        
                        setTimeout(() => {
                            slides[slides.length - 1].classList.remove('slide-exit')
                            
                            setTimeout(() => {
                                slides[slides.length - 1].classList.remove('slide-exit')
                            }, 425);
                        }, 425);
                    }, 425);
                }
            }
        }
    }

}

function changeSlide(n) {
    const slides = document.getElementsByClassName('slide');
    
    if(n == -1){
        const num = {
            n: currentSlide += n,
            f: 0
        }
        showslide(num);
    }else{
        const num = {
            n: currentSlide += n,
            f: 2
        }
        showslide(num);
    }
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

const nume = {
    n: currentSlide + 1,
    f: 1
}

document.addEventListener('DOMContentLoaded', showslide(nume));
