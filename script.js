function toggleFAQ(faqNumber) {
	const question = document.querySelector(`#faq${faqNumber}`);
	const arrow = question.previousElementSibling.querySelector(".arrow");

	question.classList.toggle("show");
	arrow.textContent = question.classList.contains("show") ? "∧" : "∨";
}

// JavaScript for toggling the navigation bar on mobile view
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
	// navLinks.classList.toggle("active");
	const element = document.querySelector(".sidebar");
	const curr = element.getAttribute("open");
	if (!curr){
		element.style.transform = "translateX(0px)";
		element.setAttribute("open", "open");
	}
	else{
		if (curr === "open"){
			element.style.transform = "translateX(-100%)";
			element.setAttribute("open", "closed");
		}
		else{
			element.style.transform = "translateX(0px)";
			element.setAttribute("open", "open");
		}
	}
});

//Why choose Verify First
document.querySelectorAll(".why-question").forEach((button) => {
	button.addEventListener("click", () => {
		const answer = button.nextElementSibling;
		if (answer.style.display === "block") {
			answer.style.display = "none";
		} else {
			document.querySelectorAll(".why-answer").forEach((answer) => {
				answer.style.display = "none";
			});
			answer.style.display = "block";
		}
	});
});

//Client Feedback
const carousel = document.querySelector(".carousel");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let index = 0;

function showNextSlide() {
	const totalCards = document.querySelectorAll(".feedback-card").length;
	if (index < totalCards - 1) {
		index++;
	} else {
		index = 0; // Loop back to the first slide
	}
	carousel.style.transform = `translateX(-${index * 100}%)`;
}

function showPrevSlide() {
	const totalCards = document.querySelectorAll(".feedback-card").length;
	if (index > 0) {
		index--;
	} else {
		index = totalCards - 1; // Loop to the last slide
	}
	carousel.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener("click", showNextSlide);
prevBtn.addEventListener("click", showPrevSlide);

