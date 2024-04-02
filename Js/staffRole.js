// --------Add New Staff-------------

// image upload

document.addEventListener('DOMContentLoaded', function() {
    let profilePic = document.getElementById('profile-picture');
    let inputFile = document.getElementById('input-files');
    
    inputFile.onchange = function () {
        profilePic.src = URL.createObjectURL(inputFile.files[0]);
    }
});

// end image upload

// role select
const roleContainer = document.querySelector('.selects-role');
const dropdownRole = roleContainer.querySelector('.role-link');
let selectedBtn = roleContainer.querySelector('.select-btn');
let roleLinkData = roleContainer.querySelectorAll('.role-link .option');
let role_item = roleContainer.querySelector('.role-item');

roleContainer.addEventListener('click', function () {
    dropdownRole.classList.toggle('show');
})
roleLinkData.forEach(option => {
    option.addEventListener('click', () => {
        let selectedOption = option.querySelector('.option_text').innerText;
        role_item.value = selectedOption;
        roleContainer.classList.remove('active');
    });
});

// -----------End Add New Staff---------


// --------edit Staff-------------

// image change
document.addEventListener('DOMContentLoaded', function() {
    let changeProfilePic = document.getElementById('profile-pic');
    let changeInputFile = document.getElementById('input-file');
    
    changeInputFile.onchange = function () {
        changeProfilePic.src = URL.createObjectURL(changeInputFile.files[0]);
    }
});

// end image change

//edit role select
const editRoleContainer = document.querySelector('.edit-selects-role');
const dropdownEditRole = editRoleContainer.querySelector('.edit-role-link');
let editRoleLinkData = editRoleContainer.querySelectorAll('.edit-role-link .option');
let edtRole_item = editRoleContainer.querySelector('.role-item');

editRoleContainer.addEventListener('click', function () {
    dropdownEditRole.classList.toggle('show');
})
editRoleLinkData.forEach(option => {
    option.addEventListener('click', () => {
        let editSelectedOption = option.querySelector('.option_text').innerText;
        edtRole_item.value = editSelectedOption;
        editRoleContainer.classList.remove('active');
    });
});

// -----------End Edit staff---------