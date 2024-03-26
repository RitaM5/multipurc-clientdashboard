// theme popup
var wrapper = document.querySelector(".product-wrapper");
var close_btns = document.querySelectorAll(".close_btn");

function downLoadItem() {
	wrapper.classList.add("active");
    console.log('click');
}
close_btns.forEach(function (btn) {
	btn.addEventListener("click", function () {
		wrapper.classList.remove("active");
	});
});

