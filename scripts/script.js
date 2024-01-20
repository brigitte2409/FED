//JavaScript Document

document.addEventListener('DOMContentLoaded', function() {
    // De variabelen
    var openButton = document.querySelector("header nav:nth-child(1) button");
    var sluitButton = document.querySelector("header nav:nth-child(2) button[aria-hidden='true']");
    var logo = document.querySelector('img[src="images/logo1.svg"]');
    var firstNav = document.querySelector('header nav:nth-child(1)');
    var scrollThreshold = 100;
    var emailInput = document.querySelector('input[type="email"]');
    var vergrootImages = document.querySelectorAll('.zoom-image');

    function handleScroll() {
        var isDarkMode = darkModeToggle.checked;

        if (window.scrollY > scrollThreshold && !isDarkMode) {
            logo.src = 'images/logo.svg';
            openButton.style.backgroundColor = '#1A3065';
            openButton.querySelector('img').src = 'images/menu-burger.svg';
            firstNav.style.backgroundColor = 'white';
        } else {
            logo.src = 'images/logo1.svg';
            openButton.style.backgroundColor = 'white';
            openButton.querySelector('img').src = 'images/menu-burger1.svg';
            firstNav.style.backgroundColor = isDarkMode ? 'black' : 'transparent';
        }
    }

    window.addEventListener('scroll', handleScroll);



    openButton.addEventListener('click', toggleMenu);
    sluitButton.addEventListener('click', toggleMenu);
    
    function toggleMenu() {
        var mobileMenu = document.querySelector('header nav:nth-of-type(2) ul')
        mobileMenu.classList.toggle('open')
    }

    console.log(document.querySelector("header nav:nth-child(2) button"));


    

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


        var playButton = document.querySelector('.playButton');
        var videoPlayer = document.querySelector('.videoPlayer');
        var videoImage = document.querySelector('.videoimage');

        playButton.addEventListener('click', function () {
            playButton.style.display = 'none';
            videoPlayer.style.display = 'block';
            videoImage.style.display = 'none';
            videoPlayer.src = "https://www.youtube.com/embed/l3hF8HWLJEs?si=L4tfr92JEfr1VrGw&autoplay=1";
        
        });
  

    
    var darkModeToggle = document.querySelector('.darkModeToggle');

    darkModeToggle.addEventListener('change', function() {
        const root = document.documentElement;
    
        if (darkModeToggle.checked) {
            root.setAttribute('data-color-mode', 'dark-mode');
        } else {
            root.removeAttribute('data-color-mode');
        }
    });
    
    

   
       
        
    
   
    vergrootImages.forEach(function(image) {
        image.addEventListener('mouseenter', function() {
            zoomIn(image);
        });
    
        image.addEventListener('mouseleave', function() {
            zoomOut(image);
        });
    });
    
    function zoomIn(image) {
        image.style.transition = 'transform 0.5s'; 
        image.style.transform = 'scale(1.2)'; 
    }
    
    function zoomOut(image) {
        image.style.transition = 'transform 0.5s'; 
        image.style.transform = 'scale(1)'; 
    }
    



    
    
   
  
        const opTellen = document.querySelector('.optellen');
        const eindWaarde = 40;
        const duur = 2000;  
        const stappen = 40; 
    
        const stapGrootte = eindWaarde / stappen;
        var huidigeWaarde = 0;
    
        const updateTeller = function () {
            huidigeWaarde += stapGrootte;
            const afgerondeWaarde = huidigeWaarde.toFixed(0);
            opTellen.textContent = afgerondeWaarde;
        };
    
        const intervalId = setInterval(function () {
            updateTeller();
    
            if (huidigeWaarde >= eindWaarde) {
                clearInterval(intervalId);
            }
        }, duur / stappen);
    
    


});
    

    
