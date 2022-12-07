const menuLinks = document.querySelectorAll('.menu a[href^="#"]'); 

function getDistanceFromTheTop(element) {
const id = element.getAttribute("href");
return document.querySelector(id).offsetTop
}

function nativeScroll(DistanceFromTheTop){
    window.scroll({
        top: DistanceFromTheTop,
        behavior:"smooth",

    });
}

function scrollToSection(event) {
    event.preventDefault();
   const DistanceFromTheTop = getDistanceFromTheTop(event.target) - 90;
   nativeScroll(DistanceFromTheTop) 
}

menuLinks.forEach((link) => {
    link.addEventListener ("click", scrollToSection);
})