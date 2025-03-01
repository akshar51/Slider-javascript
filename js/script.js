let sliderItem = document.querySelectorAll(".slider-item")
let slideIndex = 0;

let currSlide= (n)=>{
    slideIndex+=n;
    displaySlide(slideIndex)
    slides(slideIndex)
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

// AUTO SLIDE
// setInterval(()=>{
//     currSlide(1);
// },2000)


//---------------- PAGINATION BUTTON --------------------//
let btn = document.querySelectorAll(".dot")
let btnbox = document.querySelectorAll(".btn-box")

let slides = (n)=>{
    sliderItem.forEach((val)=>{
        val.classList.remove("active")
    })
    sliderItem[n].classList.add("active");

    btn.forEach((btns)=>{
        btns.classList.remove("red")
    })
    btn[n].classList.add("red")

} 

