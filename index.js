document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('input, textarea');

    inputs.forEach(input => {
        input.addEventListener('focus', function (e) {
            e.target.placeholder = '';
        });

        input.addEventListener('blur', function (e) {
            if (e.target.id === 'name') {
                e.target.placeholder = 'Votre nom';
            } else if (e.target.id === 'email') {
                e.target.placeholder = 'Votre email';
            } else if (e.target.id === 'message') {
                e.target.placeholder = 'Message';
            }
        });
    });
});