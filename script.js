function toggleFAQ(faqNumber) {
	const question = document.querySelector(`#faq${faqNumber}`);
	const arrow = question.previousElementSibling.querySelector(".arrow");

	question.classList.toggle("show");
	arrow.textContent = question.classList.contains("show") ? "-" : "+";
}

// JavaScript for toggling the navigation bar on mobile view
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
	// navLinks.classList.toggle("active");
	const element = document.querySelector(".sidebar");
	const curr = element.getAttribute("open");
	if (!curr) {
		element.style.transform = "translateX(0px)";
		element.setAttribute("open", "open");
	} else {
		if (curr === "open") {
			element.style.transform = "translateX(-100%)";
			element.setAttribute("open", "closed");
		} else {
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

nextBtn?.addEventListener("click", showNextSlide);
prevBtn?.addEventListener("click", showPrevSlide);

// script for handling active links and showing wave svg
const links = new Map();

links.set("/", "home");
links.set("index.html", "home");
links.set("home", "home");
links.set("corporates", "corporates");
links.set("contact", "contact");
links.set("pricing", "pricing");
let homeActive = false;
const currentUrl = window.location.href;
console.log(currentUrl);

links.keys().forEach((key) => {
	if (currentUrl.endsWith(key)) {
		console.log(window.location.href, key);
		document.getElementById(links.get(key)).classList.add("active");
		document
			.getElementById(links.get(key))
			.children[1].classList.remove("hidden");
		if (links.get(key) === "home") {
			homeActive = true;
		}
	} else {
		if (links.get(key) === "home") {
			return;
		}
		document.getElementById(links.get(key)).classList.remove("active");
		document.getElementById(links.get(key)).children[1].classList.add("hidden");
	}
});
document.addEventListener("DOMContentLoaded", () => {
	const navlinks = document.getElementsByClassName("nav-link");

	for (let i = 0; i < navlinks.length; i++) {
		navlinks[i].addEventListener("click", function () {
			console.log(window.location.href);

			const current = document.getElementsByClassName("active");
			const children = current[0].children;
			children[1].classList.add("hidden");

			current[0].classList.remove("active");
			this.classList.add("active");
			this.children[1].classList.remove("hidden");
		});
	}
});
