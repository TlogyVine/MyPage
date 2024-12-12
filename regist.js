document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const message = document.getElementById('registrationMessage');
    // console.log("DEBUG");
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // a stop
        // console.log("DEBUG");

        let name = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        let confirmPassword = document.getElementById('confirmPassword').value;

        let errorMessage = '';

        if (name.length < 2 || name.length > 64) {
            errorMessage += 'Name must have between 2 and 50 characters. ';
        }
        if (password.length < 6) {
            errorMessage += 'Password must be at least 6 characters long.';
        }
        if (!password.match(/^[a-zA-Z]+$/) || password !== confirmPassword) {
            errorMessage += 'password must be identical.';
        }

        if (errorMessage) {
            message.innerText = errorMessage;
            message.classList.remove('hidden');
            message.classList.add('error');
        } else {
            message.innerText = 'Success!';
            message.classList.remove('hidden', 'error');
            message.classList.add('success');
        }
    });
});
