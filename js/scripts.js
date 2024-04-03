window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('navbar-scrolled', window.scrollY > 0);
});

document.getElementById('nav-toggle').addEventListener('click', function() {
    let navMenu = document.getElementById('nav-menu');
    if(navMenu.style.display === 'block') {
        navMenu.style.display = 'none';
    } else {
        navMenu.style.display = 'block';
    }
});
