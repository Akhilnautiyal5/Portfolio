// Disable specific keyboard shortcuts
document.addEventListener("keydown", function (e) {
	if (
		e.ctrlKey &&
		(e.key === "s" || e.key === "S" || e.key === "p" || e.key === "P")
	) {
		e.preventDefault();
	}
	if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
		e.preventDefault();
	}
});

// Disable drag and drop for the entire document
document.addEventListener("dragstart", function (e) {
	e.preventDefault();
});

// Disable right-click for the entire document
document.addEventListener("contextmenu", function (e) {
	e.preventDefault();
});

// Disable specific keyboard shortcuts
document.addEventListener("keydown", function (e) {
	if (
		e.ctrlKey &&
		(e.key === "s" || e.key === "S" || e.key === "p" || e.key === "P")
	) {
		e.preventDefault();
	}
	if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
		e.preventDefault();
	}
});

// Disable drag and drop for the entire document
document.addEventListener("dragstart", function (e) {
	e.preventDefault();
});

// Disable right-click for the entire document
document.addEventListener("contextmenu", function (e) {
	e.preventDefault();
});

// GSAP Animations
gsap.from(".hero-text h1", {
	y: -50,
	opacity: 0,
	duration: 1,
	ease: "power2.out",
});
gsap.from(".hero-text p", {
	y: 50,
	opacity: 0,
	duration: 1,
	delay: 0.5,
	ease: "power2.out",
});
gsap.from(".resume .btn", {
	scale: 0.8,
	opacity: 0,
	duration: 0.8,
	delay: 1.2,
	ease: "back.out(1.7)",
});
