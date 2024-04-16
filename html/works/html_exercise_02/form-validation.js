document.addEventListener('DOMContentLoaded', function () {
    console.log('Script is running!');
    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (validateForm()) {
            Swal.fire({
                title: 'Success!',
                text: 'Form submitted successfully!',
                icon: 'success',
                timer: 3000,
                showConfirmButton: false
            }).then(() => {
                form.submit();
            });
        }
    });

    function validateForm() {
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email');
        const phone = document.querySelector('input[name="Phone"]');
        const birthday = document.getElementById('Birthday').value;
        const message = document.querySelector('.contact-form textarea').value;

        if (!firstName || !lastName || !email.value || !phone.value || !birthday || !message) {
            Swal.fire({
                title: 'Error!',
                text: 'Please fill in all required fields.',
                icon: 'error',
                timer: 3000,
                showConfirmButton: false
            });
            return false;
        }

        const emailPattern = /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/;
        if (!emailPattern.test(email.value)) {
            Swal.fire({
                title: 'Error!',
                text: 'Please enter a valid email address.',
                icon: 'error',
                timer: 3000,
                showConfirmButton: false
            }).then(() => {
                email.value = '';
            });
            return false;
        }

        if (!/^\d+$/.test(phone.value)) {
            Swal.fire({
                title: 'Error!',
                text: 'Please enter a valid phone number.',
                icon: 'error',
                timer: 3000,
                showConfirmButton: false
            }).then(() => {
                phone.value = '';
            });
            return false;
        }
        const currentDate = new Date();
        const birthDate = new Date(birthday);
        const age = currentDate.getFullYear() - birthDate.getFullYear();

        if (age < 18) {
            Swal.fire({
                title: 'Error!',
                text: 'You must be at least 18 years old to participate.',
                icon: 'error',
                timer: 3000,
                showConfirmButton: false
            }).then(() => {
                birthday.value = '';
            });
            return false;
        }

        return true;
    }
});
