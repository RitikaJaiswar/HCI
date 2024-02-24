
// script.js
document.getElementById('studentLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Your authentication logic here
    if (username === 'Ritika_Jaiswar' && password === '123456') {
        // Successful login, redirect to next page
        window.location.href = 'SD.html';
    } else {
        // Display error message
        document.getElementById('error').textContent = 'Incorrect username or password';
    }
});
