let sliderItem = document.querySelectorAll(".slider-item")
let slideIndex = 0;

let currSlide= (n)=>{
    slideIndex+=n;
    displaySlide(slideIndex)
}

let displaySlide = (n)=>{
    
    if(n >= sliderItem.length){
        slideIndex = 0
    }
    
    if(n < 0){
        slideIndex =  sliderItem.length - 1;
    }

    for(let i=0;i<sliderItem.length;i++){
        sliderItem[i].classList.remove("active")
    }
    sliderItem[slideIndex].classList.add("active")
}

displaySlide(slideIndex)

