/**
 * Created by mikus_000 on 31.05.2017.
 */
jQuery(document).ready(function () {


    HamburgerMenu();

    RollUp();

    AppearanceText();

    $(document).foundation();

    OrbitContainer();
});


// ====================== Description of the function ======================
/*
 1. Slider:
 - Autoplay
 - JumpToSlide:
 - pagination_item on click
 - AddClass
 - RemoveClass
 - MoveNextOrPreviousSlides:
 - NextSlide:
 - PreviousSlide
 2. Visible elements
 +  3. Mobile menu top
 */



// ======================== 3. Mobile menu top ========================
var clientBrowserWidth = document.documentElement.clientWidth;

function HamburgerMenu() {
    var MENU_OVERFLOW = 'js_menu_overflow';
    var ACTIVE = 'active';
    var BREAKPOINT_HAMBURGER = 1002;

    var hamburger = $('.hamburger');
    var menu = $('.drop_down_menu');

    hamburger.click(function () {
        menu.slideToggle().addClass(MENU_OVERFLOW);
    });

    window.onresize = function () {
        if (clientBrowserWidth >= BREAKPOINT_HAMBURGER) {
            menu.attr('style', '').removeClass(MENU_OVERFLOW);
            hamburger.removeClass(ACTIVE);
        }
    };
}

function OrbitContainer() {


    var BREAKPOINT_ORBIT = 1024;

    var orbitContainer = $('.orbit-container');

    if (clientBrowserWidth >= BREAKPOINT_ORBIT) {
        orbitContainer.height(700);
    }

    window.onresize = function () {
        if (clientBrowserWidth >= BREAKPOINT_ORBIT) {
            orbitContainer.height(800);
        } else {
            orbitContainer.height(0)
        }
    }
}
// ======================== Roll Up ========================
function RollUp() {
    $(window).scroll(function () {
        var bodyScroll = $('body').scrollTop();
        var heroHeight = $('header').outerHeight();

        console.log('bodyScroll: ' + bodyScroll);

        var goUp = $('.go_up');

        if (bodyScroll > heroHeight) {
            goUp.addClass('js_go_up_visible');
        } else {
            goUp.removeClass('js_go_up_visible');
        }
    });

    $('#roll_up').click(function () {
        $('html, body').animate({scrollTop: 0}, 500);
        return false;
    })
}

// ====================== 2. Appearance of the text ======================
function AppearanceText() {
    var i = 0;

    var appearanceText = $('.appearance_text');
    var appearanceTextLength = appearanceText.length;
    var appearanceTextHero = $('.appearance_text_hero');

    appearanceTextHero.addClass('visible_text_hero');

    $(window).scroll(function () {
        if (i < appearanceTextLength) {
            var OFFSET_Y = 670;
            var scrollTop = $('body').scrollTop();

            var appearanceTextOffset = appearanceText.eq(i).offset().top;

            if ((i <= appearanceTextLength) && (scrollTop > (appearanceTextOffset - OFFSET_Y))) {
                appearanceText.eq(i).addClass('visible_text');

                i++;
            }
        }
    });
}