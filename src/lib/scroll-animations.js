window.onload = function () {

	// Your scroll animation logic here
	// ...
	let elementsArray = document.querySelectorAll(".hide");
	console.log(elementsArray);
	window.addEventListener('scroll', fadeIn ); 
	function fadeIn() {
		for (var i = 0; i < elementsArray.length; i++) {
			var elem = elementsArray[i]
			var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
			if (distInView < 0) {
					elem.classList.add("show");
			} else {
					elem.classList.remove("show");
			}
		}
	}
	fadeIn();
};
