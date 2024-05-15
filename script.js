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
