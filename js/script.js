 var swiper = new Swiper(".swiper-home", {
        pagination: {
          el: ".swiper-pagination",
        },
});



 var swiper = new Swiper(".trip-slider", {
spaceBetween: 20,
  breakpoints: {
    450: {
       slidesPerView: 1,
            
     },
    768: {
      slidesPerView: 2,
            
    },
    1024: {
       slidesPerView: 2,
           
    },
  },
});



let navbas=document.querySelector('.navbar');

document.querySelector('#menu-bars').onclick=()=>{
	navbas.classList.add('active');
}



document.querySelector('#close-navbar').onclick=()=>{
	navbas.classList.remove('active');
}

let registerbtn=document.querySelector('.accout-form .register-btn');
let loginbtn=document.querySelector('.accout-form .login-btn');

registerbtn.onclick=()=>{
  registerbtn.classList.add('active');
  loginbtn.classList.remove('active');

  document.querySelector('.accout-form .login-form').classList.remove('active');
  document.querySelector('.accout-form .register-form').classList.add('active');

}

loginbtn.onclick=()=>{
  loginbtn.classList.add('active');
  registerbtn.classList.remove('active');
  document.querySelector('.accout-form .login-form').classList.add('active');
  document.querySelector('.accout-form .register-form').classList.remove('active');

}






let provincea=document.querySelector('.Province');

document.querySelector('#Province').onclick=()=>{
 provincea.classList.add('active');
}


document.querySelector('#close-Province').onclick=()=>{
  provincea.classList.remove('active');
}
document.querySelector('a').onclick=()=>{
  provincea.classList.remove('active');
}




