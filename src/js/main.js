window.onload = function () {
    ShowMoreElements('show', 'show_more');
    Hamburger();
    ImageClick();
};

function ImageClick() {
    // console.log(img.length);
    // img.addEventListener('click', function () {
    //     console.log('hello');
    // // });
    // var show = document.getElementById('show');
    //
    // var showAtribute = img.getAttribute('class');
    // console.log(showAtribute);

    var img = document.getElementsByTagName('img');

    for(var i = 0; i < img.length; i++) {
        img[i].onclick = function(event) {
            console.log(this.getAttribute('src'));
            var imgY = this.getBoundingClientRect().top;
            var imgX = this.getBoundingClientRect().left;

            var relativeY = event.clientY - imgY;
            var relativeX = event.clientX - imgX;

            console.log('imgY: ' + imgY);
            console.log('imgX: ' + imgX);
            console.log(relativeX + ':' + relativeY)
        };
    }

    // img.onclick = function () {
    //     console.log('hello');
    // };
    // img.onclick = function () {
        // console.log('hello');

        // for(var i = 0; i < img.length; i++) {
        //     console.log(img[i].getAttribute('src'));
        // }
    // }
}

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
    'use strict';

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

