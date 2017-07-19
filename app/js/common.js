$(document).ready(function () {

    // LENG
    $('.leng-item').click(function () {
        $(this).closest('.leng-list__item').addClass('active').siblings().removeClass('active');
    });

    var leng = $('.leng-list__item.active .leng-item__text').text();

    $('.leng__active').text(leng);






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




    $(".owl-carousel-2").owlCarousel({

        loop: true,
        nav: true,
        dots: false,
        autoplay: false,
        // margin: 5,
        navText: true,
        stopOnHover: true,
        smartSpeed: 1000, //Время движения слайда
        autoplayTimeout: 4000, //Время смены слайда
        pagination: false,
        responsiveClass: true,
        responsive: {
            1200: {
                items: 8
            },
            992: {
                items: 6
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

 function sliderShow() {
     var sliderName = $(".code_sliderName");


     sliderName.on("click", function () {

         // sliderName.removeClass("decor_triangle__red");
         // $(this).addClass("decor_triangle__red");

            $(this).next().toggleClass("hidden");
            $(this).toggleClass("decor_triangle decor_triangle__active");

     })

 }sliderShow();

   function activateFilterByName() {

       var caterogyName = $(".bl_filters__caterogyName");
       var filter_text = $(".filter_text");


       caterogyName.on("click", function(){

           caterogyName.removeClass("bl_filters__caterogyName_active");
           $(this).toggleClass("bl_filters__caterogyName_active bl_filters__caterogyName");
       });

       filter_text.on("click", function(){

           $(this).toggleClass("filter_text__active");
       });



   } activateFilterByName();


//   Toggle switch between view_columns__STYLE & view_list__STYLE

    function swichColumnAndListStyles() {
        columnsButton = $("#view_columns");
        listButton = $("#view_list");
        blockProducts = $(".bl_products");

        columnsButton.on("click", function () {

            console.log("column");

            blockProducts.removeClass("view_list__STYLE");
            blockProducts.addClass("view_columns__STYLE");


        });

        listButton.on("click", function () {

            console.log("list");

            blockProducts.removeClass("view_columns__STYLE");
            blockProducts.addClass("view_list__STYLE");

        });






    }swichColumnAndListStyles();







//   CALLBACK FORM
    function showCallbackForm() {
        var fullBlackBlock = "blackWrapper",
            main = $(".main"),
            callBackButtons = $(".open-call__text, .bl_products__callBack"),

            callBackForm = $(".bl_callBack"),
            closeButton = $(".bl_callBack__close"),
            resetButton = $(".bl_callBack__reset");





       function hideShowForm(pushedButton) {
           pushedButton.on("click", function(){


               main.toggleClass(fullBlackBlock);
               callBackForm.toggleClass("hidden");
           });
       }

       hideShowForm(callBackButtons);
       hideShowForm(closeButton);
       hideShowForm(resetButton);



    }showCallbackForm();


});

