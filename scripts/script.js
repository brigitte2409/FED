//JavaScript Document

document.addEventListener('DOMContentLoaded', function() {
    // De variabelen
    var openVideo = document.querySelector("img[src='images/home/home6.jpg']");
    var openButton = document.querySelector("header > nav button");
    var sluitButton = document.querySelector("header nav:nth-child(2) button");
    var deNav = document.querySelector("header nav:nth-child(2)");

    // Variabelen voor scroll-effecten
    var logo = document.querySelector('img[src="images/logo1.svg"]');
    var menuButton = document.querySelector('button[aria-hidden="true"]');
    var firstNav = document.querySelector('header nav:nth-child(1)');
    var scrollThreshold = 100;

    // Scroll-gebeurtenisluisteraar
    function handleScroll() {
        if (window.scrollY > scrollThreshold) {
            // Wanneer naar beneden gescrold, wijzig de bron van de afbeelding, knopkleur en menuknopafbeelding
            logo.src = 'images/logo.svg';
            menuButton.style.backgroundColor = '#1A3065';
            menuButton.querySelector('img').src = 'images/menu-burger.svg';
            // Wijzig de achtergrondkleur van de eerste navigatiebalk naar wit
            firstNav.style.backgroundColor = 'white';
        } else {
            // Terug naar de oorspronkelijke instellingen wanneer niet gescrold
            logo.src = 'images/logo1.svg';
            menuButton.style.backgroundColor = 'white';
            menuButton.querySelector('img').src = 'images/menu-burger1.svg';
            // Zet de achtergrondkleur van de eerste navigatiebalk terug naar transparent of de oorspronkelijke kleur
            firstNav.style.backgroundColor = 'transparent'; // Je kunt hier ook de oorspronkelijke kleur gebruiken
        }
    }

    // Voeg een scrollgebeurtenisluisteraar toe
    window.addEventListener('scroll', handleScroll);
  
    // Klik-gebeurtenisluisteraars toevoegen
    menuButton.onclick = toggleMenu;
    openButton.onclick = openMenu;
    sluitButton.onclick = sluitMenu;
  
    // Functie om het menu te openen/sluiten
    function toggleMenu() {
      nav.classList.toggle("toonMenu");
    }
  
    // Functie om het menu te openen
    function openMenu() {
      deNav.classList.add("toonMenu");
    }
  
    // Functie om het menu te sluiten
    function sluitMenu() {
      deNav.classList.remove("toonMenu");
    }
  
    // Klik-gebeurtenisluisteraar toevoegen om het menu te sluiten bij Escape-toets
    window.onkeydown = handleKeydown;
  
    function handleKeydown(event) {
      if (event.key == "Escape") {
        deNav.classList.remove("toonMenu");
      }
    }
  
    // Klik-gebeurtenisluisteraar voor video
    openVideo.onclick = videoOpenen;
  
    function videoOpenen() {
      // Voeg hier de logica toe om de video te openen
    }
  });
  

