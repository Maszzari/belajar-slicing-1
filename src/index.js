const btnNav = document.querySelector(".navbar-btn");
btnNav.addEventListener("click", function () {
	const navList = document.querySelector(".navbar-list");
	navList.classList.toggle("hidden");
});

document.addEventListener("scroll", function () {
	const header = document.querySelector("header");
	if (window.scrollY > 0) {
		header.classList.remove("mt-3");
		header.classList.add("shadow", "bg-white");
	} else {
		console.log("ada");
		header.classList.add("mt-3");
		header.classList.remove("shadow", "bg-white");
	}
	// document.querySelector("header").classList.add("mt-3", window.scrollY <= 1);
});
