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


document.addEventListener('DOMContentLoaded', function () {
    const location = [50.749454498291016, 3.022520065307617];   
    const map = L.map('map').setView(location, 14); 
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    L.marker(location).addTo(map)
        .bindPopup('Catex, France <br> 68 rue du vieil dieu, Comines')
        .openPopup();
});

const backToTopButton = document.querySelector('.back-to-top');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) { 
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });

        backToTopButton.addEventListener('click', (event) => {
            event.preventDefault(); 
            window.scrollTo({
                top: 0,
                behavior: 'smooth' 
            });
        });



document.querySelector('.burger-menu').addEventListener('click', toggleMenu);

function toggleMenu() {
    const navbar = document.getElementById('navbar');
    const burgerMenu = document.querySelector('.burger-menu');
        
    navbar.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    document.body.classList.toggle('menu-active');

}
        

var divisor = document.getElementById("divisor"),
slider = document.getElementById("slider");
function moveDivisor() { 
	divisor.style.width = slider.value+"%";
}


