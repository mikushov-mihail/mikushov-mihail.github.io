window.onload = function () {
    setTheHeightHeroSlider();
};

function setTheHeightHeroSlider() {
    var HERO_ORBIT_CONTAINER_HEIGHT         = 500;
    var CLIENT_ORBIT_CONTAINER_HEIGHT       = 210;
    var MENU_TODAY_ORBIT_CONTAINER_HEIGHT   = 320;

    var heroOrbitContainer      = document.getElementById('js-hero-orbit-container');
    var clientOrbitContainer    = document.getElementById('js-client-orbit-container');
    var menuTodayOrbitContainer = document.getElementById('orbitMenuToday');

    heroOrbitContainer.style.height   = HERO_ORBIT_CONTAINER_HEIGHT + 'px';
    clientOrbitContainer.style.height = CLIENT_ORBIT_CONTAINER_HEIGHT + 'px';
    menuTodayOrbitContainer.style.height = MENU_TODAY_ORBIT_CONTAINER_HEIGHT + 'px';
}