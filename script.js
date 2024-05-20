document.addEventListener("DOMContentLoaded", function () {
  const settingsButton = document.getElementById("settingsButton");
  const settings = document.getElementById("settings");

  // Додаємо обробник подій для натискання на кнопку
  settingsButton.addEventListener("click", function () {
    if (settings.style.display === "none") {
      settings.style.display = "block";
    } else {
      settings.style.display = "none";
    }
  });
});

function applyGradient() {
  // Отримуємо вибрані кольори
  const startColor = document.getElementById("startColor").value;
  const endColor = document.getElementById("endColor").value;

  // Застосовуємо градієнт до body
  document.body.style.background = `linear-gradient(to right, ${startColor}, ${endColor})`;
}

const sections = document.querySelectorAll(".block");

// Додаємо обробник кліку для кожної секції
sections.forEach((section) => {
  // Встановлюємо обробник кліку
  section.addEventListener("click", () => {
    // Додаємо клас "clicked", який змінює стилі при клікові
    section.classList.toggle("clicked");
  });
});

//галерея

let galleryImg = [
  "./images/nedzvetsky.png",
  "./images/Screenshot 2024-04-22 153503.png",
];
var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  //var i;
  var slides = document.getElementById("mySlides");
  console.log(galleryImg[n])
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < galleryImg.length; i++) {
//     console.log(galleryImg[i])
//     //slides.style.display = "none";
//   }
  //slides[slideIndex - 1].style.display = "block";
}




function theRotator() {
  // Встановлюється прозорість всіх картинок в 0
  $('div#rotator ul li').css({opacity: 0.0});
   
  // беремо першу картинку і показуємо її (по шляху включаємо повну видимість)
  $('div#rotator ul li:first').css({opacity: 1.0});
   
  // викликаємо функцію rotate для запуску слайд шоу, 5000 = зміна картинок відбувається раз в 5 секунд
  setInterval('rotate()',5000);
  }
   
  function rotate() {
  // беремо першу картинку
  var current = ($('div#rotator ul li.show')? $('div#rotator ul li.show') : $('div#rotator ul li:first'));
   
  // беремо наступну картинку, коли дійдемо до останньої починаємо з початку
  var next = ((current.next().length) ? ((current.next().hasClass('show')) ? $('div#rotator ul li:first') :current.next()) : $('div#rotator ul li:first'));
   
  // підключаємо ефект розчинення / загасання для показу картинок, css-класс show має більший z-index
  next.css({opacity: 0.0})
  .addClass('show')
  .animate({opacity: 1.0}, 1000);
   
  // ховаємо поточну картинку
  current.animate({opacity: 0.0}, 1000)
  .removeClass('show');
  };
   
  $(document).ready(function() {
  // запускаємо слайд шоу
  theRotator();
  });
