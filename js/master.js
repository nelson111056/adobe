// let isMobile = true;
// if($(window).width() <=480){
//     isMobile =true
// }else{
//     isMobile=false
// }

const isMobile = $(window).width() <= 480;
// console.log(isMobile);
const $grid = $('#Grid');
const $nav = $('#Nav');

function setGrid() {
    if (isMobile === true) {
        $grid.addClass('grid-2')
        return;
    }
    $grid.addClass('grid-3')


}

function setscroll() {
    $(window).scroll(function () {
        if (!isMobile) return;

        if ($(this).scrollTop() === 0) {
            $nav.removeClass('nav-active');
            return;
        }
        $nav.addClass('nav-active');
    })
}

function setInit() {
    setGrid();
}

function setEvent() {
    setscroll();
    setFancybox();
}

function setFancybox() {
    const $anchors = $grid.find('a');

    $anchors.fancybox({
        protect: true,
        transitionDuration: 1000,
        animationDuration: 1000,
        infobar: true,
        loop: true,
        transitionEffect: 'circular',
        arrows: true,
        keyboard: true,
        slideShow: {
            autoStart: false,
            speed: 2000,
        },
        media: {
            youtube: {
                params: {
                    autoplay: false,
                }
            }
        }
    })
}

setInit();

setEvent();





