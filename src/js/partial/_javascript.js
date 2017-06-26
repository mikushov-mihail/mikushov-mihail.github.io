/**
 * Created by mikus_000 on 31.05.2017.
 */
'use strict';

window.onload = function () {
    ShowMoreElements('show', 'show_more');
    Hamburger();
};

// ------------------------- Show more --------------------------
function ShowMoreElements(idShow, idShowMore) {
    var JS_SHOW_MORE = 'js_show_more';
    var NONE_DISPLAY = 'none_display';

    var show = document.getElementById(idShow);
    var showMore = document.getElementById(idShowMore);

    show.onclick = function () {
        showMore.classList.add(JS_SHOW_MORE);
        show.classList.add(NONE_DISPLAY);
    };
}


// -------------------------- Hamburger -------------------------
function Hamburger() {
    var toggles = document.querySelectorAll('.cmn-toggle-switch');

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    }

    function toggleHandler(toggle) {
        var ACTIVE = 'active';

        toggle.addEventListener('click', function (e) {
            e.preventDefault();

            if (this.classList.contains(ACTIVE) === true) {
                this.classList.remove(ACTIVE);
            }
            else {
                this.classList.add(ACTIVE);
            }
        });
    }
}


