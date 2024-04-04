// ---------All Users-----------

// for trash popup

var userTrashWrapper = document.querySelector(".allUsertrash-wrapper");
var userTrashclose_btns = document.querySelectorAll(".close_btn");

function clickAllUserTrash() {
    userTrashWrapper.classList.add("active");
}
userTrashclose_btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        userTrashWrapper.classList.remove("active");
    });
});

// end trash popup

// for change password popup
var allUserChangeWrapper = document.querySelector(".allUserChangePass-wrapper");
var allUserChangeclose_btns = document.querySelectorAll(".close_btn");

function clickAllUserChangePass() {
   allUserChangeWrapper.classList.add("active");
}
allUserChangeclose_btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
       allUserChangeWrapper.classList.remove("active");
    });
});

// end change password popup