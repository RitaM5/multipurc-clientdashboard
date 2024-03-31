// --------Add New Staff-------------

// image upload

let profilePic = document.getElementById('profile-pic');
let inputFile = document.getElementById('input-file');

inputFile.onchange = function() {
    profilePic.src = URL.createObjectURL(inputFile.files[0]);
}

// -----------End Add New Staff---------


// --------edit Staff-------------

// image change

let changeProfilePic = document.getElementById('change-profile-pic');
let changeInputFile = document.getElementById('change-input-file');

changeInputFile.onchange = function() {
    changeProfilePic.src = URL.createObjectURL(inputFile.files[0]);
}

// -----------End Edit staff---------