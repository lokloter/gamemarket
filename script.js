function applyGradient() {
        // Отримуємо вибрані кольори
        const startColor = document.getElementById('startColor').value;
        const endColor = document.getElementById('endColor').value;

        // Застосовуємо градієнт до body
        document.body.style.background = `linear-gradient(to right, ${startColor}, ${endColor})`;
    }

    const sections = document.querySelectorAll('.block');


    // Додаємо обробник кліку для кожної секції
    sections.forEach(section => {
        // Встановлюємо обробник кліку
        section.addEventListener('click', () => {
            // Додаємо клас "clicked", який змінює стилі при клікові
            section.classList.toggle('clicked');
        });
    });