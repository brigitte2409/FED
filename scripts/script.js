//JavaScript Document

document.addEventListener('DOMContentLoaded', function() {
    // De variabelen
    var openButton = document.querySelector("header nav:nth-child(1) button");
    var sluitButton = document.querySelector("header nav:nth-child(2) button");
    var secondNav = document.querySelector("header nav:nth-child(2)");

    // Variabelen voor scroll-effecten
    var logo = document.querySelector('img[src="images/logo1.svg"]');
    var firstNav = document.querySelector('header nav:nth-child(1)');
    var scrollThreshold = 100;

    // Scroll-gebeurtenisluisteraar
    function handleScroll() {
        if (window.scrollY > scrollThreshold) {
            // Wanneer naar beneden gescrold, wijzig de bron van de afbeelding, knopkleur en menuknopafbeelding
            logo.src = 'images/logo.svg';
            openButton.style.backgroundColor = '#1A3065';
            openButton.querySelector('img').src = 'images/menu-burger.svg';
            firstNav.style.backgroundColor = 'white';
        } else {
            // Terug naar de oorspronkelijke instellingen wanneer niet gescrold
            logo.src = 'images/logo1.svg';
            openButton.style.backgroundColor = 'white';
            openButton.querySelector('img').src = 'images/menu-burger1.svg';
            firstNav.style.backgroundColor = 'transparent'; 
        }
    }

    // Voeg een scrollgebeurtenisluisteraar toe
    window.addEventListener('scroll', handleScroll);

    // Klik-gebeurtenisluisteraars toevoegen

    openButton.addEventListener('click', toggleMenu);
    sluitButton.addEventListener('click', toggleMenu);
    
    // Functie om het menu te openen
    function toggleMenu() {
        let mobileMenu = document.querySelector('header nav:nth-of-type(2) ul')
        mobileMenu.classList.toggle('open')
    }

    // Klik-gebeurtenisluisteraar toevoegen om het menu te sluiten bij Escape-toets
    window.onkeydown = handleKeydown;

    function handleKeydown(event) {
      if (event.key == "Escape") {
        secondNav.classList.remove("toonMenu");
      }
    }

    var emailInput = document.querySelector('input[type="email"]');

    emailInput.addEventListener('focus', function () {
        if (this.value === 'Cool_bottle21@example.com') {
            this.value = '';
        }
    });

    emailInput.addEventListener('blur', function () {
        if (this.value === '') {
            this.value = 'Cool_bottle21@example.com';
        }
    });

    document.addEventListener('DOMContentLoaded', function () {
        var playButton = document.querySelector('.playButton');
        var videoPlayer = document.querySelector('.videoPlayer');
        var videoImage = document.querySelector('.videoimage');

        playButton.addEventListener('click', function () {
            playButton.style.display = 'none';
            videoPlayer.style.display = 'block';
            videoImage.style.display = 'none';
            videoPlayer.src = "https://www.youtube.com/embed/l3hF8HWLJEs?si=L4tfr92JEfr1VrGw";
        
        });
    });
    
    
  });