document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the username and password are correct
    if (username === 'Name' && password === 'password') {
        // If correct, login success
        document.getElementById('error-message').textContent = '';
        alert('Login successful!');
    } else {
        // If incorrect, show an error message
        document.getElementById('error-message').textContent = 'Incorrect data. Please try again.';
    }
});
