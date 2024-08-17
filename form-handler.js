emailjs.init('rXQS_F_lViXVwWbPy'); // Remplacez par votre User ID d'EmailJS

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

    // Récupérer les valeurs du formulaire
    const form = event.target;
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
            alert('Votre message a été envoyé avec succès !');
            form.reset(); // Réinitialiser le formulaire après l'envoi
        }, function(error) {
            alert('Une erreur est survenue, veuillez réessayer.');
            console.log('Erreur:', error);
        });
});
});
