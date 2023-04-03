const modal = document.getElementById('modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const cookieForm = document.getElementById('cookie-form');
const modalText = document.getElementById('modal-text');
const modalChoiceBtn = document.getElementById('modal-choice-btns');
const declineBtn = document.getElementById('modal-btn-decline');

setTimeout(function() {
    modal.style.display = 'inline';
}, 1500);

declineBtn.addEventListener('mouseenter', function() {
    modalChoiceBtn.classList.toggle('reverse');
});

modalCloseBtn.addEventListener('click', function() {
    modal.style.display = 'none';
})

cookieForm.addEventListener('submit', function(e) {
    const cookieFormData = new FormData(cookieForm);
    const name = cookieFormData.get('fullName');
    e.preventDefault();
    modalText.innerHTML = `<div class="modal-inner-loading">
    <img src="https://samherbert.net/svg-loaders/svg-loaders/three-dots.svg" class="loading">
    <p id="upload-text">Uploading your data to the dark web...</p>
    </div>`;
    setTimeout(function() {
        document.getElementById('upload-text').innerText = `Making the Sale....`;
    }, 1500);

    setTimeout(function() {
        document.getElementById('modal-inner').innerHTML =`<h2>Thanks <span class="modal-display-name">${name}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="https://media.tenor.com/18peQO6upVwAAAAC/pirate-laughing.gif" class="loading">
        </div>`
        modalCloseBtn.disabled = false;
    }, 3000);
        
});

