// Referencias a botones
const difficultyButtons = document.querySelectorAll('.difficulty-btn');
const backBtn = document.getElementById('back-btn');
const homeBtn = document.getElementById('home-btn');

// Redirección directa según dificultad
difficultyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const diff = btn.dataset.diff;
        switch(diff){
            case "Básico":
                window.location.href = 'basico.html';
                break;
            case "Intermedio":
                window.location.href = 'intermedio.html';
                break;
            case "Avanzado":
                window.location.href = 'avanzado.html';
                break;
        }
    });
});

// Botón retroceder (siempre lleva al index.html desde lesson.html)
backBtn.addEventListener('click', () => {
    window.location.href = 'index.html';
});

// Botón casita barra inferior
if(homeBtn){
    homeBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}
