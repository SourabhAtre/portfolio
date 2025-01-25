
// On load Animation JS starts
document.addEventListener('DOMContentLoaded', function () {
    const loadingContainer = document.querySelector('.loading-container');
    const progressBarFill = document.querySelector('.loading-bar-fill');

    let progress = 0;
    const duration = 3000; // 3 seconds
    const interval = 30; // Update every 30ms
    const increment = 100 / (duration / interval);

    const loadingInterval = setInterval(() => {
        progress += increment;
        if (progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);

            // Start fade-out animation after completion
            setTimeout(() => {
                loadingContainer.classList.add('hidden');
            }, 100); // Small delay to ensure 100% is displayed briefly
        }
        progressBarFill.style.width = `${progress}%`;
    }, interval);

// On load Animation JS ends



    // Wait for the DOM to load

        // Select the main header and buttons
        let mainHeader = document.querySelector('.main-header');
        let openMenuBtn = document.querySelector('.header-ham-wrapper');
        let closeMenuBtn = document.querySelector('.header-ham-wrapper.cross');
        let navText = document.querySelectorAll('.nav-block');
    
        // Add event listener to the open menu button
        openMenuBtn.addEventListener('click', function () {
            mainHeader.classList.add('show-menu');
        });
    
        // Add event listener to the close menu button
        closeMenuBtn.addEventListener('click', function () {
            mainHeader.classList.remove('show-menu');
        });
    
        // Add event listeners to the navText elements
        navText.forEach(nav => {
            nav.addEventListener('click', function () {
                // Trigger the close menu button's click event
                if (closeMenuBtn) {
                    closeMenuBtn.click();
                }
            });
        });
    

    let aboutButton = document.querySelector('.about-button');
    let navBlocks = document.querySelectorAll('.nav-block');

    if (aboutButton) {
        // Add event listener to the about button
        aboutButton.addEventListener('click', function () {
            let buttonId = aboutButton.getAttribute('data-id');
            
            // Find and trigger click on the nav-block with the same data-id
            navBlocks.forEach(nav => {
                if (nav.getAttribute('data-id') === buttonId) {
                    nav.click();
                }
            });
        });
    }

    // show page JS starts
    document.querySelectorAll('.nav-block').forEach(block => {
        block.addEventListener('click', () => {
            let navId = block.getAttribute('data-id');
    
            // Remove active class from all nav-block elements
            document.querySelectorAll('.nav-block').forEach(el => {
                el.classList.remove('active');
            });
    
            // Add active class to the clicked nav-block
            block.classList.add('active');
    
            // Add active class to the matching common-page element and remove from others
            document.querySelectorAll('.common-page').forEach(page => {
                if (page.getAttribute('data-id') === navId) {
                    page.classList.add('active');
                } else {
                    page.classList.remove('active');
                }
            });
        });
    });
    // show page JS ends

        // Get all cover cards
        const coverCards = document.querySelectorAll('.cover-card');
    
        // Iterate over all cover cards and add click event listener
        coverCards.forEach(function(coverCard) {
            coverCard.addEventListener('click', function() {
                const dataAt = coverCard.getAttribute('data-at'); // Get the data-at of the clicked card
    
                // Hide all slider cards
                const sliderCards = document.querySelectorAll('.slider-card');
                sliderCards.forEach(function(sliderCard) {
                    sliderCard.classList.remove('show');
                });
    
                // Show the slider card that matches the data-at value
                const targetCard = document.querySelector(`.slider-card[data-at="${dataAt}"]`);
                if (targetCard) {
                    targetCard.classList.add('show');
                }
    
                // Optionally, open the popup
                const outerContainer = document.querySelector('.outer-container');
                outerContainer.style.display = 'block'; // Show popup
                outerContainer.classList.add('active');
                document.body.style.overflow = 'hidden'; // Disable background scroll
            });
        });
    
        // Close the popup when the close button is clicked
        const closeButton = document.querySelector('.close-popup');
        closeButton.addEventListener('click', function() {
            const outerContainer = document.querySelector('.outer-container');
            outerContainer.style.display = 'none'; // Hide popup
            outerContainer.classList.remove('active');
            document.body.style.overflow = ''; // Restore background scroll
        });  
    });
    // JS to show popup slider on portfolio page