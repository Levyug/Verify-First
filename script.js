function toggleFAQ(faqNumber) {
    const question = document.querySelector(`#faq${faqNumber}`);
    const arrow = question.previousElementSibling.querySelector(".arrow");

    question.classList.toggle("show");  // Toggle answer visibility
    arrow.textContent = question.classList.contains("show") ? '-' : '+';  // Toggle arrow between "+" and "-"
}

// JavaScript for toggling the navigation bar on mobile view
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

//Why choose Verify First
document.querySelectorAll('.why-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            document.querySelectorAll('.why-answer').forEach(answer => {
                answer.style.display = 'none';
            });
            answer.style.display = 'block';
        }
    });
});
