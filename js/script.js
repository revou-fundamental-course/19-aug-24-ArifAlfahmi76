// navbar
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navContainer = document.querySelector('.nav-container');

    menuToggle.addEventListener('click', function() {
        navContainer.classList.toggle('active');
    });
});

//change the name
document.getElementById('changeButton').addEventListener('click', function() {
    // Menampilkan prompt untuk meminta nama baru dari pengguna
    const newName = prompt('Enter your new name:');
    
    // Jika pengguna memasukkan nama yang valid, perbarui teks nama
    if (newName && newName.trim() !== '') {
        document.getElementById('name').textContent = newName;
    } else {
        // Menampilkan peringatan jika nama kosong atau hanya spasi
        alert('Please enter a valid name.');
    }
});

// banner
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slide-img");
    if (n > x.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

// Auto slide
setInterval(function() {
    plusDivs(1);
}, 3000); // Change slide every 3 seconds

// Form validation function
function validationForm() {
    const name = document.getElementById('nama').value;
    const date = document.getElementById('date').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = document.querySelector('textarea[name="message"]').value;

    if (!name) {
        alert('Name is required!');
        return false;
    }
    if (!date) {
        alert('Date of birth is required!');
        return false;
    }
    if (!gender) {
        alert('Gender is required!');
        return false;
    }
    if (!message) {
        alert('Message is required!');
        return false;
    }

    // Displaying the form data
    document.getElementById('sender-full-name').textContent = name;
    document.getElementById('sender-date').textContent = date;
    document.getElementById('sender-gender').textContent = gender.nextElementSibling.textContent; // Get label text
    document.getElementById('sender-message').textContent = message;

    // Clearing the form
    document.querySelector('form').reset();

    return false; // Prevents the form from actually submitting
}
