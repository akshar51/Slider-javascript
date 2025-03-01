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

// AUTO SLIDE
// setInterval(()=>{
//     currSlide(1);
// },2000)

let btn = document.querySelectorAll(".dot")
// PAGINATION BUTTON
let slides = (n)=>{
    sliderItem.forEach((val)=>{
        val.classList.remove("active")
    })
    sliderItem[n].classList.add("active")
    dot[n].style.color = "red"   
}   