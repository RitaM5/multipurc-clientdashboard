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

//for all category select
let optionMenu = document.querySelector('.select-menu');
let selectBtn = optionMenu.querySelector('.select-btn');
let options = optionMenu.querySelectorAll('.options .option');
let sBtn_text = optionMenu.querySelector('.sBtn-text');

selectBtn.addEventListener('click', () => optionMenu.classList.toggle('active'));

options.forEach(option => {
    option.addEventListener('click', () => {
        let selectedOption = option.querySelector('.option-text').innerText;
        sBtn_text.value = selectedOption;
        optionMenu.classList.remove('active');
    });
});