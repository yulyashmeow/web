document.addEventListener('DOMContentLoaded', function () {
    const nameInput = document.getElementById('name-input');
    const passwordInput = document.getElementById('password-input');
    const passwordConfirmInput = document.getElementById('password-confirm-input');
    const confirmCheckbox = document.getElementById('confirm-input');
    const submitButton = document.querySelector('input[type="submit"]');

    function validateName() {
        const nameValue = nameInput.value.trim();
        const errorText = document.createElement('div');
        errorText.className = 'error-text';

        const existingError = nameInput.nextElementSibling;
        if (existingError && existingError.className === 'error-text') {
            existingError.remove();
        }

        if (nameValue.length < 4) {
            errorText.textContent = 'The name must contain at least 4 characters';
            nameInput.parentNode.appendChild(errorText);
            nameInput.classList.add('error');
        } else {
            nameInput.classList.remove('error');
        }
    }

    function validatePassword() {
        const passwordValue = passwordInput.value;
        const errorText = document.createElement('div');
        errorText.className = 'error-text';

        const existingError = passwordInput.nextElementSibling;
        if (existingError && existingError.className === 'error-text') {
            existingError.remove();
        }

        const isWeakPassword = passwordValue.length < 6;
        if (isWeakPassword) {
            errorText.textContent = 'The password must contain at least 6 characters';
            passwordInput.parentNode.appendChild(errorText);
            passwordInput.classList.add('error');
        } else {
            passwordInput.classList.remove('error');
        }
    }

    function validatePasswordConfirm() {
        const passwordValue = passwordInput.value;
        const passwordConfirmValue = passwordConfirmInput.value;
        const errorText = document.createElement('div');
        errorText.className = 'error-text';

        const existingError = passwordConfirmInput.nextElementSibling;
        if (existingError && existingError.className === 'error-text') {
            existingError.remove();
        }

        if (passwordConfirmValue !== passwordValue) {
            errorText.textContent = 'Passwords don\'t match';
            passwordConfirmInput.parentNode.appendChild(errorText);
            passwordConfirmInput.classList.add('error');
        } else {
            passwordConfirmInput.classList.remove('error');
        }
    }

    function toggleSubmitButton() {
        submitButton.disabled = !confirmCheckbox.checked;
    }

    nameInput.addEventListener('blur', validateName);
    passwordInput.addEventListener('blur', validatePassword);
    passwordInput.addEventListener('input', validatePassword);
    passwordConfirmInput.addEventListener('blur', validatePasswordConfirm);
    passwordConfirmInput.addEventListener('input', validatePasswordConfirm);
    confirmCheckbox.addEventListener('change', toggleSubmitButton);
});