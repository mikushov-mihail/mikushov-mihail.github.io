jQuery(document).ready(function () {
    RollUp();
    // AppearanceText();
    $(document).foundation();
});

// ======================== Roll Up ========================
function RollUp() {
    $(window).scroll(function () {
        var bodyScroll = $('body').scrollTop();
        var heroHeight = $('#Header').outerHeight();

        var goUp = $('.scroll-to-top');

        if (bodyScroll > heroHeight) {
            goUp.addClass('js-scroll-to-top_visible');
        } else {
            goUp.removeClass('js-scroll-to-top_visible');
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