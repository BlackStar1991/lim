$(document).ready(function () {


console.log("ok");

    // function owlSlider(slider){
    //     slider.owlCarousel({
    //         items: 1,
    //         loop:true, //Зацикливаем слайдер
    //         nav:true, //Отключение навигации
    //         dots:false,
    //         margin:20,
    //         autoplay:false, //Автозапуск слайдера
    //         stopOnHover:true,
    //         smartSpeed:1000, //Время движения слайда
    //         autoplayTimeout:4000 //Время смены слайда
    //
    //     });
    // }

    // LENG
    $('.leng-item').click(function () {
        $(this).closest('.leng-list__item').addClass('active').siblings().removeClass('active');
    });

    var leng = $('.leng-list__item.active .leng-item__text').text();

    $('.leng__active').text(leng);


    //
    // $(".owl-carousel-1").slick({
    //     infinite: true,
    //     slidesToScroll: 1,
    //     centerMode: true,
    //     slidesToShow: 1,
    //     responsive: [{
    //         breakpoint: 600,
    //         settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             centerMode: false,
    //             infinite: true
    //         }
    //     }]
    // });



    // // MAIN-BANNER
    $(".owl-carousel-1").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: true,
        dots: false,
        autoplay: false,
        stopOnHover: true,
        smartSpeed: 1000, //Время движения слайда
        autoplayTimeout: 4000, //Время смены слайда
        pagination: false,
        responsiveClass: true,
        responsive: {
            600: {
                items: 1
            }
        }
    });





// BRaND-SLIDER
// $(".owl-carousel-2").slick({
//     infinite: true,
//     slidesToScroll: 1,
//     slidesToShow: 8,
//     responsive: [{
//         breakpoint: 992,
//         settings: {
//             slidesToShow: 4,
//             slidesToScroll: 1,
//             centerMode: false,
//             infinite: true
//         }
//     }]
// });


    $(".owl-carousel-2").owlCarousel({
        items: 8,
        loop: true,
        nav: true,
        dots: false,
        autoplay: false,
        navText: true,
        stopOnHover: true,
        smartSpeed: 1000, //Время движения слайда
        autoplayTimeout: 4000, //Время смены слайда
        pagination: false,
        responsiveClass: true,
        responsive: {
            992: {
                items: 4
            },
            320: {
                items: 4
            }


        }
    });




// Ancor
jQuery(".link-top").click(function () {
    var elementClick = jQuery(this).attr("href");
    var destination = jQuery(elementClick).offset().top;
    jQuery("html, body").animate({
        scrollTop: destination
    }, 300);


    return false;
});

//MENU
var headerPage = $('.header-page');

headerPage.on('click', '.open-menu-min', function () {
    headerPage.toggleClass('open-sub-menu');
    headerPage.removeClass('open-main-menu');
});

headerPage.on('click', '.open-menu-main', function () {
    headerPage.removeClass('open-sub-menu');
    headerPage.toggleClass('open-main-menu');
});

//search
headerPage.on('click', '.mobile-ico__search', function () {
    headerPage.removeClass('open-sub-menu');
    headerPage.toggleClass('open-search');
    headerPage.removeClass('open-main-menu');
});

headerPage.on('click', '.close-search', function () {
    headerPage.toggleClass('open-search');
});

//footer
$('.footer-page').on('click', '.h3-title', function () {
    $(this).closest('.foot-info-list__title').toggleClass('active');
});



// SLIDER show

var blockClutch = $(".bl_filters__mensClutch"),
    blockBags = $(".bl_filters__mensBags"),
    blockBriefcases = $(".bl_filters__mensBriefcases"),
    blockPurse = $(".bl_filters__mensPurse");




});

