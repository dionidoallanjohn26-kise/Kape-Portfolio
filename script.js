```javascript id="h7q2mx"
// MOBILE MENU

const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});



// EMAIL JS

emailjs.init("qgPwZqHR5IWb8hkSm");



const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(e){

  e.preventDefault();

  emailjs.sendForm(
    "service_dz175d8",
    "template_r1pvads",
    "#contact-form"
  )

  .then(() => {

    alert("MESSAGE SENT SUCCESSFULLY");

    contactForm.reset();

  })

  .catch((error) => {

    console.log(error);

    alert("FAILED TO SEND MESSAGE");

  });

});
```
