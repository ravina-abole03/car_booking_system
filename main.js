let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}
window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove('active');
}

const sr = ScrollReveal ({
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: true
})

sr.reveal('.text',{delay: 5, origin: 'top'})
sr.reveal('.form-container form',{delay: 500, origin: 'left'})
sr.reveal('.heading',{delay: 800, origin: 'top'})
sr.reveal('.ride-container .box',{delay: 300, origin: 'top'})
sr.reveal('.services-container .box',{delay: 400, origin: 'top'})
sr.reveal('.about-container .box',{delay: 400, origin: 'top'})
sr.reveal('.reviews-container',{delay: 400, origin: 'top'})
sr.reveal('.newsletter .box',{delay: 100, origin: 'bottom'})

// function summit()
// {
//     alert("Thank You for Contact with parth Travels \n We are contact with in 24 hourse ")
// }
