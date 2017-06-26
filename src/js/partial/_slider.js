jQuery(document).ready(function () {
    MoveSlide();
});

// ====================== Description of the function======================

/*
 MoveSlide:
 - Autoplay
 - JumpToSlide:
 - pagination_item on click
 - AddClass
 - RemoveClass
 - MoveNextOrPreviousSlides:
 - NextSlide:
 - PreviousSlide
 */

function MoveSlide() {
    Autoplay();
    JumpToSlide();
    MoveNextOrPreviousSlides();

    var SELECTED = "selected";
    var ACTIVE = "active";
    var MOVE_LEFT = "move_left";

    var currentSlide = 0;

    var next = $("#next");
    var previous = $("#previous");

    var pagination = $(".pagination");
    var paginationItem = $(".pagination_item");

    var slides = $(".slides");
    var slideNumber = slides.children().length;

    function Autoplay() {
        var slider = $(".slider");
        var switchInterval = setInterval(NextSlide, 4000);

        slider.hover(function () {
                clearInterval(switchInterval);
            },
            function () {
                switchInterval = setInterval(NextSlide, 4000);
            }
        );
    }

    function JumpToSlide() {
        paginationItem.click(function () {
            var jumpSlide = $(this).index();

            if (jumpSlide !== currentSlide) {
                RemoveClass();

                if (jumpSlide > currentSlide) {
                    AddMoveLeftFromTo(currentSlide, jumpSlide);
                } else if (jumpSlide < currentSlide) {
                    DeleteMoveLeftFromTO(jumpSlide, currentSlide);
                }

                currentSlide = jumpSlide;
                AddClass();
            }
        });

        function AddClass() {
            pagination.children("li").eq(currentSlide).addClass(ACTIVE);
            slides.children("li").eq(currentSlide).addClass(SELECTED);
        }

        function RemoveClass() {
            pagination.children("li").eq(currentSlide).removeClass(ACTIVE);
            slides.children("li").eq(currentSlide).removeClass(SELECTED);
        }
    }

    function MoveNextOrPreviousSlides() {
        next.click(function () {
            NextSlide();
        });

        previous.click(function () {
            PreviousSlide();
        });
    }

    function NextSlide() {
        slides.children("li").eq(currentSlide).removeClass(SELECTED).addClass(MOVE_LEFT);
        pagination.children("li").eq(currentSlide).removeClass(ACTIVE);

        if (currentSlide <= (slideNumber - 2)) {
            currentSlide++;
        } else {
            slides.children("li").eq(currentSlide).removeClass(MOVE_LEFT);
            currentSlide = 0;

            if (currentSlide === 0) {
                DeleteMoveLeftFromTO(0, slideNumber - 1);
            }
        }

        slides.children("li").eq(currentSlide).addClass(SELECTED);
        pagination.children("li").eq(currentSlide).addClass(ACTIVE);
    }

    function PreviousSlide() {
        slides.children("li").eq(currentSlide).removeClass(SELECTED);
        pagination.children("li").eq(currentSlide).removeClass(ACTIVE);

        if (currentSlide === 0) {
            currentSlide = slideNumber - 1;
        } else {
            currentSlide--;
        }

        if (currentSlide === (slideNumber - 1)) {
            AddMoveLeftFromTo(0, slideNumber - 1);
        }

        slides.children("li").eq(currentSlide).addClass(SELECTED).removeClass(MOVE_LEFT);
        pagination.children("li").eq(currentSlide).addClass(ACTIVE);
    }

    function DeleteMoveLeftFromTO(FROM, TO) {
        for (var thisSlide = FROM; thisSlide < (TO); thisSlide++) {
            slides.children("li").eq(thisSlide).removeClass(MOVE_LEFT);
        }
    }

    function AddMoveLeftFromTo(FROM, TO) {
        for (var thisSlide = FROM; thisSlide < (TO); thisSlide++) {
            slides.children("li").eq(thisSlide).addClass(MOVE_LEFT);
        }
    }
}