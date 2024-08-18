// form-handler.js

// Initialiser EmailJS avec votre User ID
emailjs.init('rXQS_F_lViXVwWbPy'); // Remplacez par votre User ID d'EmailJS

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    // Fonction pour créer une notification
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        document.getElementById('notifications').appendChild(notification);

        // Faire apparaître la notification
        setTimeout(() => {
            notification.style.opacity = 1;
        }, 10);

        // La faire disparaître après un certain temps
        setTimeout(() => {
            notification.style.opacity = 0;
            setTimeout(() => {
                notification.remove();
            }, 500); // Durée d'attente après la disparition
        }, 5000); // Temps d'affichage
    }

    // Vérifiez si le formulaire est présent sur la page
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            // Récupérer les valeurs du formulaire
            const surname = form.querySelector('#surname').value;
            const name = form.querySelector('#name').value;
            const email = form.querySelector('#email').value;
            const phone = form.querySelector('#phone').value;
            const message = form.querySelector('#message').value;

            // Créer un objet avec les données du formulaire
            const templateParams = {
                surname: surname,
                name: name,
                email: email,
                phone: phone,
                message: message
            };

            // Envoyer le formulaire via EmailJS
            emailjs.send('service_y2o6tql', 'template_xl79z4q', templateParams)
                .then(function(response) {
                    showNotification('Votre message a été envoyé avec succès !', 'success');
                    form.reset(); // Réinitialiser le formulaire après l'envoi
                }, function(error) {
                    showNotification('Saisie inccorect veuillez vérifier les champs.', 'error');
                    console.error('Erreur:', error);
                });
        });
    }
});
