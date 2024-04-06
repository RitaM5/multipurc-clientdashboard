// SIDEBAR DROPDOWN
const allDropdown = document.querySelectorAll('#sidebar .side-dropdown');
const sidebar = document.getElementById('sidebar');

allDropdown.forEach(item=> {
	const a = item.parentElement.querySelector('a:first-child');
	a.addEventListener('click', function (e) {
		e.preventDefault();

		if(!this.classList.contains('active')) {
			allDropdown.forEach(i=> {
				const aLink = i.parentElement.querySelector('a:first-child');

				aLink.classList.remove('active');
				i.classList.remove('show');
			})
		
		}

		this.classList.toggle('active');
		item.classList.toggle('show');
	})
})

// SIDEBAR COLLAPSE
const toggleSidebar = document.querySelector('nav .toggle-sidebar');
const backIcon = document.querySelector('.back-icon');
const allSideDivider = document.querySelectorAll('#sidebar .divider');

toggleSidebar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');

	if(sidebar.classList.contains('hide')) {
		allSideDivider.forEach(item=> {
			item.textContent = '-'
		})

		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
	} else {
		allSideDivider.forEach(item=> {
			item.textContent = item.dataset.text;
		})
	}
})

backIcon.addEventListener('click', function () {
	sidebar.classList.toggle('hide');

	if(sidebar.classList.contains('hide')) {
		allSideDivider.forEach(item=> {
			item.textContent = '-'
		})

		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
	} else {
		allSideDivider.forEach(item=> {
			item.textContent = item.dataset.text;
		})
	}
})
// end sidebar

// PROFILE DROPDOWN
const profile = document.querySelector('nav .profile');
const dropdownProfile = profile.querySelector('.profile-link');

profile.addEventListener('click', function () {
	dropdownProfile.classList.toggle('show');
})

// for dashboard item click

function showLevel2Dashboard() {
	document.getElementById('userLevel2-dashboard').style.display = 'block';
	document.getElementById('userLevel2-posSystem').style.display = 'none';
    document.getElementById('addNewProduct').style.display = 'none';
    document.getElementById('allStaff').style.display = 'none';
    document.getElementById('addNewStaff').style.display = 'none';
    document.getElementById('singleStaff-edit').style.display = 'none';
    document.getElementById('allStaffRole').style.display = 'none';
    document.getElementById('newRoleContent').style.display = 'none';
    document.getElementById('usersManage-allUser').style.display = 'none';
    document.getElementById('usersManage-userEdit').style.display = 'none';
    document.getElementById('productOrder-allOrder').style.display = 'none';
    document.getElementById('productOrder-successOrder').style.display = 'none';
    document.getElementById('productOrder-cancelOrder').style.display = 'none';
    document.getElementById('productOrder-orderSetting').style.display = 'none';
}
function showPosSystem() {
	document.getElementById('userLevel2-dashboard').style.display = 'none';
	document.getElementById('userLevel2-posSystem').style.display = 'block';
    document.getElementById('addNewProduct').style.display = 'none';
    document.getElementById('allStaff').style.display = 'none';
    document.getElementById('addNewStaff').style.display = 'none';
    document.getElementById('singleStaff-edit').style.display = 'none';
    document.getElementById('allStaffRole').style.display = 'none';
    document.getElementById('newRoleContent').style.display = 'none';
    document.getElementById('usersManage-allUser').style.display = 'none';
    document.getElementById('usersManage-userEdit').style.display = 'none';
    document.getElementById('productOrder-allOrder').style.display = 'none';
    document.getElementById('productOrder-successOrder').style.display = 'none';
    document.getElementById('productOrder-cancelOrder').style.display = 'none';
    document.getElementById('productOrder-orderSetting').style.display = 'none';
}
function addNewProduct(){
	document.getElementById('userLevel2-dashboard').style.display = 'none';
	document.getElementById('userLevel2-posSystem').style.display = 'none';
	document.getElementById('addNewProduct').style.display = 'block';
    document.getElementById('allStaff').style.display = 'none';
    document.getElementById('addNewStaff').style.display = 'none';
    document.getElementById('singleStaff-edit').style.display = 'none';
    document.getElementById('allStaffRole').style.display = 'none';
    document.getElementById('newRoleContent').style.display = 'none';
    document.getElementById('usersManage-allUser').style.display = 'none';
    document.getElementById('usersManage-userEdit').style.display = 'none';
    document.getElementById('productOrder-allOrder').style.display = 'none';
    document.getElementById('productOrder-successOrder').style.display = 'none';
    document.getElementById('productOrder-cancelOrder').style.display = 'none';
    document.getElementById('productOrder-orderSetting').style.display = 'none';
}
function showAllStaff(){
	document.getElementById('userLevel2-dashboard').style.display = 'none';
	document.getElementById('userLevel2-posSystem').style.display = 'none';
	document.getElementById('addNewProduct').style.display = 'none';
    document.getElementById('allStaff').style.display = 'block';
    document.getElementById('addNewStaff').style.display = 'none';
    document.getElementById('singleStaff-edit').style.display = 'none';
    document.getElementById('allStaffRole').style.display = 'none';
    document.getElementById('newRoleContent').style.display = 'none';
    document.getElementById('usersManage-allUser').style.display = 'none';
    document.getElementById('usersManage-userEdit').style.display = 'none';
    document.getElementById('productOrder-allOrder').style.display = 'none';
    document.getElementById('productOrder-successOrder').style.display = 'none';
    document.getElementById('productOrder-cancelOrder').style.display = 'none';
    document.getElementById('productOrder-orderSetting').style.display = 'none';
}
function addNewStaff(){
	document.getElementById('userLevel2-dashboard').style.display = 'none';
	document.getElementById('userLevel2-posSystem').style.display = 'none';
	document.getElementById('addNewProduct').style.display = 'none';
    document.getElementById('allStaff').style.display = 'none';
    document.getElementById('addNewStaff').style.display = 'block';
    document.getElementById('singleStaff-edit').style.display = 'none';
    document.getElementById('allStaffRole').style.display = 'none';
    document.getElementById('newRoleContent').style.display = 'none';
    document.getElementById('usersManage-allUser').style.display = 'none';
    document.getElementById('usersManage-userEdit').style.display = 'none';
    document.getElementById('productOrder-allOrder').style.display = 'none';
    document.getElementById('productOrder-successOrder').style.display = 'none';
    document.getElementById('productOrder-cancelOrder').style.display = 'none';
    document.getElementById('productOrder-orderSetting').style.display = 'none';
}
function allStaffRole(){
    document.getElementById('allStaffRole').style.display = 'block';
	document.getElementById('userLevel2-dashboard').style.display = 'none';
	document.getElementById('userLevel2-posSystem').style.display = 'none';
	document.getElementById('addNewProduct').style.display = 'none';
    document.getElementById('allStaff').style.display = 'none';
    document.getElementById('addNewStaff').style.display = 'none';
    document.getElementById('singleStaff-edit').style.display = 'none';
    document.getElementById('newRoleContent').style.display = 'none';
    document.getElementById('usersManage-allUser').style.display = 'none';
    document.getElementById('usersManage-userEdit').style.display = 'none';
    document.getElementById('productOrder-allOrder').style.display = 'none';
    document.getElementById('productOrder-successOrder').style.display = 'none';
    document.getElementById('productOrder-cancelOrder').style.display = 'none';
    document.getElementById('productOrder-orderSetting').style.display = 'none';
}
function clickToGoNewRole(){
    document.getElementById('newRoleContent').style.display = 'block';
    document.getElementById('allStaffRole').style.display = 'none';
	document.getElementById('userLevel2-dashboard').style.display = 'none';
	document.getElementById('userLevel2-posSystem').style.display = 'none';
	document.getElementById('addNewProduct').style.display = 'none';
    document.getElementById('allStaff').style.display = 'none';
    document.getElementById('addNewStaff').style.display = 'none';
    document.getElementById('singleStaff-edit').style.display = 'none';
    document.getElementById('usersManage-allUser').style.display = 'none';
    document.getElementById('usersManage-userEdit').style.display = 'none';
    document.getElementById('productOrder-allOrder').style.display = 'none';
    document.getElementById('productOrder-successOrder').style.display = 'none';
    document.getElementById('productOrder-cancelOrder').style.display = 'none';
    document.getElementById('productOrder-orderSetting').style.display = 'none';
}
function clickEditOne(){
    document.getElementById('userLevel2-dashboard').style.display = 'none';
	document.getElementById('userLevel2-posSystem').style.display = 'none';
	document.getElementById('addNewProduct').style.display = 'none';
    document.getElementById('allStaff').style.display = 'none';
    document.getElementById('addNewStaff').style.display = 'none';
    document.getElementById('singleStaff-edit').style.display = 'block';
    document.getElementById('newRoleContent').style.display = 'none';
    document.getElementById('allStaffRole').style.display = 'none';
    document.getElementById('usersManage-allUser').style.display = 'none';
    document.getElementById('usersManage-userEdit').style.display = 'none';
    document.getElementById('productOrder-allOrder').style.display = 'none';
    document.getElementById('productOrder-successOrder').style.display = 'none';
    document.getElementById('productOrder-cancelOrder').style.display = 'none';
    document.getElementById('productOrder-orderSetting').style.display = 'none';
}
function showAllUser(){
    document.getElementById('usersManage-allUser').style.display = 'block';
    document.getElementById('userLevel2-dashboard').style.display = 'none';
	document.getElementById('userLevel2-posSystem').style.display = 'none';
	document.getElementById('addNewProduct').style.display = 'none';
    document.getElementById('allStaff').style.display = 'none';
    document.getElementById('addNewStaff').style.display = 'none';
    document.getElementById('singleStaff-edit').style.display = 'none';
    document.getElementById('newRoleContent').style.display = 'none';
    document.getElementById('allStaffRole').style.display = 'none';
    document.getElementById('usersManage-userEdit').style.display = 'none';
    document.getElementById('productOrder-allOrder').style.display = 'none';
    document.getElementById('productOrder-successOrder').style.display = 'none';
    document.getElementById('productOrder-cancelOrder').style.display = 'none';
    document.getElementById('productOrder-orderSetting').style.display = 'none';
}
function clickAllUserEdit(){
    document.getElementById('usersManage-userEdit').style.display = 'block';
    document.getElementById('usersManage-allUser').style.display = 'none';
    document.getElementById('userLevel2-dashboard').style.display = 'none';
	document.getElementById('userLevel2-posSystem').style.display = 'none';
	document.getElementById('addNewProduct').style.display = 'none';
    document.getElementById('allStaff').style.display = 'none';
    document.getElementById('addNewStaff').style.display = 'none';
    document.getElementById('singleStaff-edit').style.display = 'none';
    document.getElementById('newRoleContent').style.display = 'none';
    document.getElementById('allStaffRole').style.display = 'none';
    document.getElementById('productOrder-allOrder').style.display = 'none';
    document.getElementById('productOrder-successOrder').style.display = 'none';
    document.getElementById('productOrder-cancelOrder').style.display = 'none';
    document.getElementById('productOrder-orderSetting').style.display = 'none';
}
function showProductAllOrder(){
    document.getElementById('productOrder-allOrder').style.display = 'block';
    document.getElementById('usersManage-userEdit').style.display = 'none';
    document.getElementById('usersManage-allUser').style.display = 'none';
    document.getElementById('userLevel2-dashboard').style.display = 'none';
	document.getElementById('userLevel2-posSystem').style.display = 'none';
	document.getElementById('addNewProduct').style.display = 'none';
    document.getElementById('allStaff').style.display = 'none';
    document.getElementById('addNewStaff').style.display = 'none';
    document.getElementById('singleStaff-edit').style.display = 'none';
    document.getElementById('newRoleContent').style.display = 'none';
    document.getElementById('allStaffRole').style.display = 'none';
    document.getElementById('productOrder-successOrder').style.display = 'none';
    document.getElementById('productOrder-cancelOrder').style.display = 'none';
    document.getElementById('productOrder-orderSetting').style.display = 'none';
}
function showProductSuccessOrder(){
    document.getElementById('productOrder-successOrder').style.display = 'block';
    document.getElementById('productOrder-allOrder').style.display = 'none';
    document.getElementById('usersManage-userEdit').style.display = 'none';
    document.getElementById('usersManage-allUser').style.display = 'none';
    document.getElementById('userLevel2-dashboard').style.display = 'none';
	document.getElementById('userLevel2-posSystem').style.display = 'none';
	document.getElementById('addNewProduct').style.display = 'none';
    document.getElementById('allStaff').style.display = 'none';
    document.getElementById('addNewStaff').style.display = 'none';
    document.getElementById('singleStaff-edit').style.display = 'none';
    document.getElementById('newRoleContent').style.display = 'none';
    document.getElementById('allStaffRole').style.display = 'none';
    document.getElementById('productOrder-cancelOrder').style.display = 'none';
    document.getElementById('productOrder-orderSetting').style.display = 'none';
}
function showProductCancelOrder(){
    document.getElementById('productOrder-cancelOrder').style.display = 'block';
    document.getElementById('productOrder-successOrder').style.display = 'none';
    document.getElementById('productOrder-allOrder').style.display = 'none';
    document.getElementById('usersManage-userEdit').style.display = 'none';
    document.getElementById('usersManage-allUser').style.display = 'none';
    document.getElementById('userLevel2-dashboard').style.display = 'none';
	document.getElementById('userLevel2-posSystem').style.display = 'none';
	document.getElementById('addNewProduct').style.display = 'none';
    document.getElementById('allStaff').style.display = 'none';
    document.getElementById('addNewStaff').style.display = 'none';
    document.getElementById('singleStaff-edit').style.display = 'none';
    document.getElementById('newRoleContent').style.display = 'none';
    document.getElementById('allStaffRole').style.display = 'none';
    document.getElementById('productOrder-orderSetting').style.display = 'none';
}
function showProductOrderSetting(){
    document.getElementById('productOrder-orderSetting').style.display = 'block';
    document.getElementById('productOrder-successOrder').style.display = 'none';
    document.getElementById('productOrder-allOrder').style.display = 'none';
    document.getElementById('usersManage-userEdit').style.display = 'none';
    document.getElementById('usersManage-allUser').style.display = 'none';
    document.getElementById('userLevel2-dashboard').style.display = 'none';
	document.getElementById('userLevel2-posSystem').style.display = 'none';
	document.getElementById('addNewProduct').style.display = 'none';
    document.getElementById('allStaff').style.display = 'none';
    document.getElementById('addNewStaff').style.display = 'none';
    document.getElementById('singleStaff-edit').style.display = 'none';
    document.getElementById('newRoleContent').style.display = 'none';
    document.getElementById('allStaffRole').style.display = 'none';
    document.getElementById('productOrder-cancelOrder').style.display = 'none';
}
// ---------Dashboard Content----------

document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('myChart').getContext('2d');
    var rawData = [0, 2000, 350, 5004, 2000, 3000, 4500, 1544, 5037, 1000, 3206, 745,];

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Sells',
                data: rawData,
				backgroundColor: 'rgba(0, 99, 132)',
                borderColor: 'rgb(0, 99, 132)',
                borderWidth: 3
            }]
        },
        options: {
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return 'Sells:'+ ' ' + '$' + context.parsed.y;
                        }
                    }
                }
            }
        }
    });
});


// ----------End Dashboard Content------------

// ------------Pos System------------

// --------selects categroy--------
document.addEventListener('DOMContentLoaded', function () {
    let optionMenus = document.querySelector('.selects_category');
    const dropdownCategoryOptions = optionMenus.querySelector('.category_options');
    let optionsData = optionMenus.querySelectorAll('.category_options .option');
    let Btn_text = optionMenus.querySelector('.sBtn-text');

    optionMenus.addEventListener('click', function () {
        dropdownCategoryOptions.classList.toggle('show');
    })

    optionsData.forEach(option => {
        option.addEventListener('click', () => {
            let selectedOption = option.querySelector('.option-text').innerText;
            Btn_text.value = selectedOption;
            optionMenus.classList.remove('active');
        });
    });
});
// --------end selects categroy--------

// --------selects brand--------
document.addEventListener('DOMContentLoaded', function () {
    let brandOptionMenus = document.querySelector('.selects_brand');
    const dropdownBrandOptions = brandOptionMenus.querySelector('.brand_category_options');
    let brandOptionsData = brandOptionMenus.querySelectorAll('.brand_category_options .option');
    let brandBtn_text = brandOptionMenus.querySelector('.sBtn-text');


    brandOptionMenus.addEventListener('click', function () {
        dropdownBrandOptions.classList.toggle('show');
    })

    brandOptionsData.forEach(option => {
        option.addEventListener('click', () => {
            let brandSelectedOption = option.querySelector('.option-text').innerText;
            brandBtn_text.value = brandSelectedOption;
            brandOptionMenus.classList.remove('active');
        });
    });
});
// --------end selects brand--------

// --------selects percentage--------
document.addEventListener('DOMContentLoaded', function () {
    let percentOptionMenus = document.querySelector('.percentage-select');
    const dropdownPercentOptions = percentOptionMenus.querySelector('.percentage_options');
    let percentOptionsData = percentOptionMenus.querySelectorAll('.percentage_options .option');
    let percentBtn_text = percentOptionMenus.querySelector('.sBtn-text');


    percentOptionMenus.addEventListener('click', function () {
        dropdownPercentOptions.classList.toggle('show');
    })

    percentOptionsData.forEach(option => {
        option.addEventListener('click', () => {
            let percentSelectedOption = option.querySelector('.option-text').innerText;
            percentBtn_text.value = percentSelectedOption;
            percentOptionMenus.classList.remove('active');
        });
    });
});
// --------end selects percentage-------

// for pos system cloths card add to cart popup
var wrapper = document.querySelector(".product-wrapper");
var close_btns = document.querySelectorAll(".close_btn");

function showPopupContent(){
	wrapper.classList.add("active");
}
close_btns.forEach(function (btn) {
	btn.addEventListener("click", function () {
		wrapper.classList.remove("active");
	});
});

// variation image select
function showImageOne() {
	document.getElementById('image1').style.display = 'block';
	document.getElementById('image2').style.display = 'none';
	document.getElementById('image3').style.display = 'none';
	document.getElementById('image4').style.display = 'none';
}
function showImageTwo() {
	document.getElementById('image1').style.display = 'none';
	document.getElementById('image2').style.display = 'block';
	document.getElementById('image3').style.display = 'none';
	document.getElementById('image4').style.display = 'none';
}
function showImageThree() {
	document.getElementById('image1').style.display = 'none';
	document.getElementById('image2').style.display = 'none';
	document.getElementById('image3').style.display = 'block';
	document.getElementById('image4').style.display = 'none';
}
function showImageFour() {
	document.getElementById('image1').style.display = 'none';
	document.getElementById('image2').style.display = 'none';
	document.getElementById('image3').style.display = 'none';
	document.getElementById('image4').style.display = 'block';
}

// popup black button click

function clickToBlack(){
    document.getElementById('black-size-content').style.display = 'block';
    document.getElementById('white-size-content').style.display = 'none';
    document.getElementById('black-btn').classList.add('active');
}

function clickToWhite(){
    document.getElementById('white-size-content').style.display = 'block';
    document.getElementById('black-size-content').style.display = 'none';
    document.getElementById('white-btn').classList.add('active');
}
// end popup black btn click

// right popup increase decrease value

document.addEventListener('DOMContentLoaded', function() {
  
});
const decreaseButton = document.querySelector('.convert-decrease');
const increaseButton = document.querySelector('.convert-increase');
const valueElement = document.querySelector('.convert-value');

decreaseButton.addEventListener('click', function() {
    let value = parseInt(valueElement.textContent);
    if (value > 0) {
        value--;
        valueElement.textContent = value;
    }
});

increaseButton.addEventListener('click', function() {
    let value = parseInt(valueElement.textContent);
    value++;
    valueElement.textContent = value;
});
//end popup change increase decrease value

// right part change increase decrease value

document.querySelectorAll('.change-decrease').forEach(decreaseButton => {
    decreaseButton.addEventListener('click', function() {
        let valueElement = this.closest('.index-container').querySelector('.change-value');
        let value = parseInt(valueElement.textContent);
        if (value > 0) {
            value--;
            valueElement.textContent = value;
        }
    });
});

document.querySelectorAll('.change-increase').forEach(increaseButton => {
    increaseButton.addEventListener('click', function() {
        let valueElement = this.closest('.index-container').querySelector('.change-value');
        let value = parseInt(valueElement.textContent);
        value++;
        valueElement.textContent = value;
    });
});


//end right part change increase decrease value

// ------------------end pos system cloths card add to cart popup-------------

//  cloths card add to cart toast

function addToCart() {
			const toastContainer = document.getElementById('toast-container');
			const toastElement = document.createElement('div');
			toastElement.classList.add('toast');
			toastElement.innerText = 'Successfully Add to Cart !';
			toastContainer.appendChild(toastElement);
			toastContainer.style.display = 'block';
		
			setTimeout(() => {
				toastContainer.style.display = 'none';
				toastContainer.removeChild(toastElement);
			}, 3000); 

}

// --------selects walking customer--------
document.addEventListener('DOMContentLoaded', function () {
    let customerOptionMenus = document.querySelector('.walking_customer');
    const dropdownCustomerOptions = customerOptionMenus.querySelector('.customer_options');
    let customerOptionsData = customerOptionMenus.querySelectorAll('.customer_options .option');
    let customerBtn_text = customerOptionMenus.querySelector('.sBtn-text');

    customerOptionMenus.addEventListener('click', function () {
        dropdownCustomerOptions.classList.toggle('show');
    })

    customerOptionsData.forEach(option => {
        option.addEventListener('click', () => {
            let customerSelectedOption = option.querySelector('.option-text').innerText;
            customerBtn_text.value = customerSelectedOption;
            customerOptionMenus.classList.remove('active');
        });
    });
});
// --------end selects walking customer--------
// -----------End Pos System------------

// ---------------Add New Product----------------
// for add new product category select

document.addEventListener('DOMContentLoaded', function () {
    let optionMenus = document.querySelector('.selects-category');
    let selectedBtn = optionMenus.querySelector('.select-btn');
    let optionsData = optionMenus.querySelectorAll('.category-options .option');
    let Btn_text = optionMenus.querySelector('.sBtn-text');

    selectedBtn.addEventListener('click', () => optionMenus.classList.toggle('active'));

    optionsData.forEach(option => {
        option.addEventListener('click', () => {
            let selectedOption = option.querySelector('.option-text').innerText;
            Btn_text.value = selectedOption;
            optionMenus.classList.remove('active');
        });
    });
});

// for add new product select tag

document.addEventListener('DOMContentLoaded', function () {
    const tagInput = document.getElementById('tagInput');

    tagInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' && tagInput.value.trim() !== '') {
            createTag(tagInput.value.trim()); 
            tagInput.value = ''; 
        }
    });

    function createTag(tagText) {
		const tagContainer = document.querySelector('.tags-input-container');
        const tag = document.createElement('span');
        tag.classList.add('tag');
        tag.innerHTML = `<span>${tagText}</span><span class="tag-close">×</span>`;
        tagContainer.appendChild(tag);

        tag.querySelector('.tag-close').addEventListener('click', function () {
            tag.remove();
        });
    }
});

// for add new product shipping & delivery itmes select
document.addEventListener('DOMContentLoaded', function () {
    let optionMenus = document.querySelector('.select-category');
    let selectedBtn = optionMenus.querySelector('.select-category .select-btn');
    let optionsData = optionMenus.querySelectorAll('.select-category .category-options .option');
    let Btn_text = optionMenus.querySelector('.Btn-text');

    selectedBtn.addEventListener('click', () => optionMenus.classList.toggle('active'));

    optionsData.forEach(option => {
        option.addEventListener('click', () => {
            let selectedOption = option.querySelector('.option-text').innerText;
            Btn_text.value = selectedOption;
            optionMenus.classList.remove('active');
        });
    });
});

// for add new product imageb upload drag and drop

const dropArea = document.querySelector(".drag-area"),
dragText = dropArea.querySelector("header"),
input = dropArea.querySelector("input");
let file; 
dragText.onclick = ()=>{
  input.click(); 
}
input.addEventListener("change", function(){

  file = this.files[0];
  dropArea.classList.add("active");
  showFile(); 
});

dropArea.addEventListener("dragover", (event)=>{
  event.preventDefault(); 
  dropArea.classList.add("active");
  dragText.textContent = "Release to Upload File";
});

dropArea.addEventListener("dragleave", ()=>{
  dropArea.classList.remove("active");
  dragText.textContent = "Drag & Drop to Upload File";
});

dropArea.addEventListener("drop", (event)=>{
  event.preventDefault(); 
  file = event.dataTransfer.files[0];
  showFile();
});

function showFile(){
  let fileType = file.type;
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; 
  if(validExtensions.includes(fileType)){ 
    let fileReader = new FileReader(); 
    fileReader.onload = ()=>{
      let fileURL = fileReader.result;
      let imgTag = `<img src="${fileURL}" alt="image">`;
      dropArea.innerHTML = imgTag;
    }
    fileReader.readAsDataURL(file);
  }else{
    alert("This is not an Image File!");
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
  }
}

//------------------End Add New Product--------------------