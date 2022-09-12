// Initial Handshake
console.log('script.js - Started!');

// Initialize VueJs
const app = new Vue ({
    el: '#root',
    data: {
        userName: '',
        name: '',
        age: '',
        nationality: '',
    }
});


const infoEdit = document.querySelector('.infoEdit');
const info = document.querySelector('.info');
console.log(info, infoEdit);


const editBtn = document.getElementById('editBtn');
const confirmBtn = document.getElementById('confirmBtn');


editBtn.addEventListener('click', edit);
confirmBtn.addEventListener('click', confirm);


function confirm() {
    console.log('Confirmed');
    infoEdit.classList.remove('active');
    info.classList.add('active');
}

function edit() {
    console.log('Edit');
    infoEdit.classList.add('active');
    info.classList.remove('active');
}


