const menuopenbutton =document.querySelector("#menu-open-button");
const menuclosebutton = document.querySelector("#menu-close-button");
const navLinks = document.querySelectorAll(".nav-menu .nav-link");

menuopenbutton.addEventListener("click",() =>{
    document.body.classList.toggle("show-mobile-menu");
});


menuclosebutton.addEventListener("click",() =>{
    document.body.classList.toggle("show-mobile-menu");
})


navLinks.forEach(link => {
    link.addEventListener("click",() => menuopenbutton.click());
})

//this is the sloder javascript 


const swiper = new Swiper('.slider-wrapper', {
 
  loop: true,
  grabcursor : true,
  spacebetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {slidesperview: 1},
  
    768: {slidesperview: 2},
  
    1024: {slidesperview: 3}
},

pagination:{
    clickable : true,
    el: ".swiper-pagination",
    dynamicBullets: true,

},



 });

  let quantity = 0;
  let quantity1 = 0;
  let quantity2 = 0;
  let quantity3 = 0;
  let quantity4 = 0;
  let quantity5 = 0;

  // const quantitySpan = document.getElementById('quantity');
  // const plusBtn = document.getElementById('plus');
  // const minusBtn = document.getElementById('minus');

  // plusBtn.addEventListener('click', function() {
  //   quantity++;
  //   quantitySpan.textContent = quantity;
  // });

  // minusBtn.addEventListener('click', function() {
  //   if (quantity > 0) {  // prevent negative quantity
  //     quantity--;
  //     quantitySpan.textContent = quantity;
  //   }
  // });

//1
  const quantitySpan = document.querySelector('.number');
  const plusBtn = document.querySelector('.plusbutton');
  const minusBtn = document.querySelector('.minusbutton');

  plusBtn.addEventListener('click', function() {
    quantity++;
    quantitySpan.textContent = quantity;
  });

  minusBtn.addEventListener('click', function() {
    if (quantity > 0) {  // prevent negative quantity
      quantity--;
      quantitySpan.textContent = quantity;
    }
  });

  //2

  
  const quantitySpan1 = document.querySelector('.number1');
  const plusBtn1 = document.querySelector('.plusbutton1');
  const minusBtn1 = document.querySelector('.minusbutton1');

  plusBtn1.addEventListener('click', function() {
    quantity1 ++;
    quantitySpan1.textContent = quantity1;
  });

  minusBtn1.addEventListener('click', function() {
    if (quantity1 > 0) {  // prevent negative quantity
      quantity1 --;
      quantitySpan1.textContent = quantity1;
    }
  });

  //3
  const quantitySpan2 = document.querySelector('.number2');
  const plusBtn2 = document.querySelector('.plusbutton2');
  const minusBtn2 = document.querySelector('.minusbutton2');

  plusBtn2.addEventListener('click', function() {
    quantity2 ++;
    quantitySpan2.textContent = quantity2;
  });

  minusBtn2.addEventListener('click', function() {
    if (quantity > 0) {  // prevent negative quantity
      quantity2 --;
      quantitySpan2.textContent = quantity2;
    }
  });



  //4
  const quantitySpan3 = document.querySelector('.number3');
  const plusBtn3 = document.querySelector('.plusbutton3');
  const minusBtn3 = document.querySelector('.minusbutton3');

  plusBtn3.addEventListener('click', function() {
    quantity3 ++;
    quantitySpan3.textContent = quantity3;
  });

  minusBtn3.addEventListener('click', function() {
    if (quantity > 0) {  // prevent negative quantity
      quantity3--;
      quantitySpan3.textContent = quantity3;
    }
  });

  //5
  const quantitySpan4 = document.querySelector('.number4');
  const plusBtn4 = document.querySelector('.plusbutton4');
  const minusBtn4 = document.querySelector('.minusbutton4');

  plusBtn4.addEventListener('click', function() {
    quantity4 ++;
    quantitySpan4.textContent = quantity4 ;
  });

  minusBtn4.addEventListener('click', function() {
    if (quantity4 > 0) {  // prevent negative quantity
      quantity4 --;
      quantitySpan4.textContent = quantity4;
    }
  });

  //6
   

  const quantitySpan5 = document.querySelector('.number5');
  const plusBtn5 = document.querySelector('.plusbutton5');
  const minusBtn5 = document.querySelector('.minusbutton5');

  plusBtn5.addEventListener('click', function() {
    quantity5 ++;
    quantitySpan5.textContent = quantity5;
  });

  minusBtn5.addEventListener('click', function() {
    if (quantity5 > 0) {  // prevent negative quantity
      quantity5--;
      quantitySpan5.textContent = quantity5 ;
    }
  });


  function showPopup() {
      document.getElementById("popup").style.display = "block";
      document.getElementById("overlay").style.display = "block";
    }
    function closePopup() {
      document.getElementById("popup").style.display = "none";
      document.getElementById("overlay").style.display = "none";
    }



    function closePopup() {
  document.getElementById("popup").style.display = "none";
  alert("Thank you for shopping with us!");
  location.reload();
}