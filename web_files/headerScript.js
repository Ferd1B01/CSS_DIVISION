

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.nav-button');
    const primaryNavigation = document.getElementById('primary-navigation');
    
    const searchToggle = document.querySelector('.search-button');
    const searchBar = document.getElementById('search-bar');

    function closeAll() {
        if (primaryNavigation.classList.contains('is-open')) {
            primaryNavigation.classList.remove('is-open');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
        if (searchBar.classList.contains('is-open')) {
            searchBar.classList.remove('is-open');
            searchToggle.setAttribute('aria-expanded', 'false');
        }
    }

    menuToggle.addEventListener('click', function() {
        const isMenuOpening = !primaryNavigation.classList.contains('is-open');

        if (isMenuOpening) {
            closeAll();
        }
        
        const isMenuOpen = primaryNavigation.classList.toggle('is-open');

        menuToggle.setAttribute('aria-expanded', isMenuOpen);
    });

    searchToggle.addEventListener('click', function() {
        const isSearchOpening = !searchBar.classList.contains('is-open');

        if (isSearchOpening) {
            closeAll();
        }

        const isSearchOpen = searchBar.classList.toggle('is-open');

        searchToggle.setAttribute('aria-expanded', isSearchOpen);
    });
    
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.site-header')) {
            closeAll();
        }
    });

});
