$(document).ready(() => {
	// JQuery Code
	// Start Section Header
	
});

let x;
let widthW = window.innerWidth;
if (widthW <= 600) {
	x = 1;
	console.log(window.innerWidth);
} else if (widthW >= 768 && widthW < 992) {
	x = 2;
	console.log(window.innerWidth);
} else if (widthW > 992) {
	x = 3;
	console.log(window.innerWidth);
}
new Splide(".splide", {
	type: "loop",
	autoplay: "play",
	perPage: x,
}).mount();
if(window.scrollY >107){
    console.log('yes');
    console.log(window.scrollY);
}else{
    console.log("yes");
}


