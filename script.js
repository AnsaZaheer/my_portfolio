
const elements = document.querySelectorAll('.fade-in');

function showOnScroll(){

elements.forEach(el=>{

const rect = el.getBoundingClientRect();

if(rect.top < window.innerHeight - 100){

el.classList.add('show');

}

});

}

window.addEventListener('scroll', showOnScroll);
showOnScroll();
