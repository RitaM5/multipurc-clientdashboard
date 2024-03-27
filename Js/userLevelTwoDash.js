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
// const imgProfile = profile.querySelector('img');
const dropdownProfile = profile.querySelector('.profile-link');

profile.addEventListener('click', function () {
	dropdownProfile.classList.toggle('show');
})

// for dashboard item click

function showLevel2Dashboard() {
	document.getElementById('userLevel2-dashboard').style.display = 'block';
	document.getElementById('userLevel2-posSystem').style.display = 'none';
    document.getElementById('addNewProduct').style.display = 'none';
}
function showPosSystem() {
	document.getElementById('userLevel2-dashboard').style.display = 'none';
	document.getElementById('userLevel2-posSystem').style.display = 'block';
    document.getElementById('addNewProduct').style.display = 'none';
}
function addNewProduct(){
	document.getElementById('userLevel2-dashboard').style.display = 'none';
	document.getElementById('userLevel2-posSystem').style.display = 'none';
	document.getElementById('addNewProduct').style.display = 'block';
}


/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
	const toggle = document.getElementById(toggleId),
		  nav = document.getElementById(navId)
 
	toggle.addEventListener('click', () =>{
		nav.classList.toggle('show-menu')
		toggle.classList.toggle('show-icon')
	})
 }
 
 showMenu('nav-toggle','nav-menu')
 

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

// for pos system card item popup
var wrapper = document.querySelector(".product-wrapper");
var close_btns = document.querySelectorAll(".close_btn");

function showPopupContent() {
	wrapper.classList.add("active");
}
close_btns.forEach(function (btn) {
	btn.addEventListener("click", function () {
		wrapper.classList.remove("active");
	});
});

// variation image select
function showImageOne(){
	document.getElementById('image1').style.display = 'block';
	document.getElementById('image2').style.display = 'none';
	document.getElementById('image3').style.display = 'none';
	document.getElementById('image4').style.display = 'none';
}
function showImageTwo(){
	document.getElementById('image1').style.display = 'none';
	document.getElementById('image2').style.display = 'block';
	document.getElementById('image3').style.display = 'none';
	document.getElementById('image4').style.display = 'none';
}
function showImageThree(){
	document.getElementById('image1').style.display = 'none';
	document.getElementById('image2').style.display = 'none';
	document.getElementById('image3').style.display = 'block';
	document.getElementById('image4').style.display = 'none';
}
function showImageFour(){
	document.getElementById('image1').style.display = 'none';
	document.getElementById('image2').style.display = 'none';
	document.getElementById('image3').style.display = 'none';
	document.getElementById('image4').style.display = 'block';
}

//  FOOD ITEM CARD

function addToCart() {
	var wrappers = document.querySelector(".product-wrapper");
			wrappers.classList.remove("active");

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

// order place popup 
var wrappers = document.querySelector(".product-wrappers");
var close_btns = document.querySelectorAll(".close_btn");

function showOrderPopup() {
	wrappers.classList.add("active");
}
close_btns.forEach(function (btn) {
	btn.addEventListener("click", function () {
		wrappers.classList.remove("active");
	});
});
function printInvoice() {
	var wrappers = document.querySelector(".product-wrappers");

			const toastContainer = document.getElementById('toast-container');
			const toastElement = document.createElement('div');
			toastElement.classList.add('toast');
			toastElement.innerText = 'Place Order Successfully !';
			toastContainer.appendChild(toastElement);
			toastContainer.style.display = 'block';
		
			setTimeout(() => {
				toastContainer.style.display = 'none';
				toastContainer.removeChild(toastElement);
			}, 3000); 

			wrappers.classList.remove("active");
        const element = document.getElementById('invoiceContent');
        const options = {
            margin: 10,
            filename: 'invoice.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        html2pdf(element, options);

}
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