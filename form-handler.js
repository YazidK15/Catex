emailjs.init('rXQS_F_lViXVwWbPy');
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        document.getElementById('notifications').appendChild(notification);

        setTimeout(() => {
            notification.style.opacity = 1;
        }, 10);

        setTimeout(() => {
            notification.style.opacity = 0;
            setTimeout(() => {
                notification.remove();
            }, 500); 
        }, 2000); 
    }

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const surname = form.querySelector('#surname').value;
            const name = form.querySelector('#name').value;
            const email = form.querySelector('#email').value;
            const phone = form.querySelector('#phone').value;
            const message = form.querySelector('#message').value;

            const templateParams = {
                surname: surname,
                name: name,
                email: email,
                phone: phone,
                message: message
            };

            emailjs.send('service_y2o6tql', 'template_xl79z4q', templateParams)
                .then(function(response) {
                    showNotification('Votre message a été envoyé avec succès !', 'success');
                    form.reset(); 
                }, function(error) {
                    showNotification('Saisie inccorect veuillez vérifier les champs.', 'error');
                    console.error('Erreur:', error);
                });
        });
    }
});
