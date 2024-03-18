const waktu = document.getElementById("waktu")

function tanggal() {
    const date = new Date();
    waktu.innerHTML = date;
}

setInterval(tanggal, 1000);

tanggal();

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

document.getElementById('loginButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    document.getElementById('loginSuccessMessage').style.display = 'block'; // Show success message
});
