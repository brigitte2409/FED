//JavaScript Document

document.addEventListener('DOMContentLoaded', function() {
    // De variabelen
    var openVideo = document.querySelector("img[src='images/home/home6.jpg']");
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
            // Wijzig de achtergrondkleur van de eerste navigatiebalk naar wit
            firstNav.style.backgroundColor = 'white';
        } else {
            // Terug naar de oorspronkelijke instellingen wanneer niet gescrold
            logo.src = 'images/logo1.svg';
            openButton.style.backgroundColor = 'white';
            openButton.querySelector('img').src = 'images/menu-burger1.svg';
            // Zet de achtergrondkleur van de eerste navigatiebalk terug naar transparent of de oorspronkelijke kleur
            firstNav.style.backgroundColor = 'transparent'; // Je kunt hier ook de oorspronkelijke kleur gebruiken
        }
    }

    // Voeg een scrollgebeurtenisluisteraar toe
    window.addEventListener('scroll', handleScroll);
  
    // Klik-gebeurtenisluisteraars toevoegen

    openButton.addEventListener('click', openMenu);
    sluitButton.addEventListener('click', sluitMenu);
    
  
    

    // Functie om het menu te openen
    function openMenu() {
        secondNav.classList.add("toonMenu");
        console.log('toonMenu klasse toegevoegd');
    }
    
  
    // Functie om het menu te sluiten
    function sluitMenu() {
    secondNav.classList.remove("toonMenu");
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
        var playButton = document.getElementById('playButton');
        var videoPlayer = document.getElementById('videoPlayer');
    
        playButton.addEventListener('click', function () {
            playButton.style.display = 'none'; 
            videoPlayer.style.display = 'block';
            videoPlayer.play(); 
        });
    });
    
  });