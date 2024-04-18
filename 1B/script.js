document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    // Save registration data to local storage
    saveRegistrationData(formData);

    alert('Registration successful!');
    // Redirect to data list page
    window.location.href = 'data-list.html';
});

function saveRegistrationData(formData) {
    localStorage.setItem('registrationData', JSON.stringify(formData));
}
