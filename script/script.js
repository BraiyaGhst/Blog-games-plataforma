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


window.onload = function() {
    let elementBody = document.querySelector('body');
    let elementBtnIncreaseFont = document.getElementById('increase-font');
    let elementBtnDecreaseFont = document.getElementById('decrease-font');
    // Padrão de tamanho, equivale a 100% do valor definido no Body
    let fontSize = 100;
    
    let increaseDecrease = 10;

   
    elementBtnIncreaseFont.addEventListener('click', function(event) {
        fontSize = fontSize + increaseDecrease;
        elementBody.style.fontSize = fontSize + '%';
    });

   
    elementBtnDecreaseFont.addEventListener('click', function(event) {
        fontSize = fontSize - increaseDecrease;
        elementBody.style.fontSize = fontSize + '%';
    });
}
