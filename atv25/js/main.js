// <!-- Matheus Arcangelo Pestana -->

document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(function(question) {
        question.addEventListener('click', function() {
            this.nextElementSibling.classList.toggle('faq-answer-visible');
        });
    });
});