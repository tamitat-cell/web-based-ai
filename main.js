const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    })
}
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    })
}
const navLink = document.querySelectorAll('.nav__link');
const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));
const typedHome = new Typed('#home-typed',{
    strings:['Web Developer','Programmer','Freelancer'],//insert other professions
    typeSpeed:50,
    backspeed:40,
    backdelay:2000,
    loop:true,
    cursorChar:'_',
})
const shadowHeader = () =>{
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                        : header.classList.remove('shadow-header');
}
window.addEventListener('scroll', shadowHeader);

const contactForm = document.getElementById('contact-form'),
     contactMessage=document.getElementById('contact-message');
const sendEmail = (e) =>{
    e.preventDefault()
    /*
    the code for sending email is a sample test 
    create an account in emailjs.com and 
    and follow instruction in the video and images
     to send emails with your account*/

     //serviceId ~ templateId ~ publicKey
       emailjs.sendForm('service_j57m1us','template_l11stzm','#contact-form','zUV29kRvV-6SQx3mz')
.then(() => {
    contactMessage.textContent = ' Message not sent (service error) ❌';

    setTimeout(() =>{
        contactForm.contactMessage.textContent=''
    },5000)
    contactForm.reset()
}, ()=>{
    contactMessage.textContent='Message not sent (service error)'

})
.catch((error) => {
    console.log("FULL ERROR:", error);
    contactMessage.textContent = 'Failed to send message';
});

}
contactForm.addEventListener('submit', sendEmail);
const scrollUp = ()=>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY>= 350 ? scrollUp.classList.add('show-scroll')
                       : scrollUp.classList.remove('show-scroll')

}
window.addEventListener('scroll',scrollUp)

const sections =document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'), // You defined it here correctly
              // Fixed the typo below (sectonId -> sectionId)
              sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(sectionClass){
            if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
                sectionClass.classList.add('active-link')
            }else{
                sectionClass.classList.remove('active-link')
            }
        }
    })
}
window.addEventListener('scroll', scrollActive)

const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2000,

})
sr.reveal('.home__content .resume__content:nth-child(1) ,.footer__container')
sr.reveal('.home__data, .resume__content:nth-child(2)' , {delay:300, origin:'bottom'})

sr.reveal('.about__content , .contact__content' , { origin:'bottom'})
sr.reveal('.about__image .contact__form' , {delay:300})

sr.reveal('.project__card' , {interval:100})
//last update