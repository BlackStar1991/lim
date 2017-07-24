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

            $(this).next().toggleClass("hidden");
            $(this).toggleClass("decor_triangle decor_triangle__active");

        })

    }

    sliderShow();

    function activateFilterByName() {

        var caterogyName = $(".bl_filters__caterogyName");
        var filter_text = $(".filter_text");


        caterogyName.on("click", function () {

            caterogyName.removeClass("bl_filters__caterogyName_active");
            $(this).toggleClass("bl_filters__caterogyName_active bl_filters__caterogyName");
        });

        filter_text.on("click", function () {

            $(this).toggleClass("filter_text__active");
        });


    }

    activateFilterByName();


//   sliderEffect

    function sliderEffectForButtons(button, element, duration) {

        button.click(function () {
            element.slideToggle(duration);
        });
    }

    var buttonCategory = $(".rubric__title_button__categories"),
        buttonFilters = $(".rubric__title_button__filters");

    var blockWithCategories = $(".bl_filters"),
        blockWithFilters = $(".bl_filters__productsFilters");

    sliderEffectForButtons(buttonCategory, blockWithCategories, 1000);
    sliderEffectForButtons(buttonFilters, blockWithFilters, 1000);


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


    }

    swichColumnAndListStyles();


// Pagination activation
    function paginationButtons() {
        var paginationNumber = $(".bl_pagination__link_number"),
            paginationNumberActive = "bl_pagination__link_number__active";

        paginationNumber.on("click", function () {

            paginationNumber.removeClass(paginationNumberActive);
            $(this).addClass(paginationNumberActive);
        })

    }

    paginationButtons();


//   CALLBACK FORM
    function showCallbackForm() {
        var fullBlackBlock = $(".blackWrapper"),

            callBackButtonForUser = $(".open-call__text"),
            callBackButton = $(".bl_products__callBack"),

            trashClass = $(".trashClass"),

            callBackForm = $(".bl_callBack"),
            callBackFormForUser = $(".bl_callBack__forUser"),

            allCallBackForms = $(".bl_callBack, .bl_callBack__forUser"),

            closeButton = $(".bl_callBack__close"),
            resetButton = $(".bl_callBack__reset");


        function hideShowForm(pushedButton, whatFormShowhed, closeButton) {
            pushedButton.on("click", function () {


                fullBlackBlock.toggleClass("hidden");
                whatFormShowhed.toggleClass("hidden");

                closeButton.addClass("hidden");
            });
        }

        hideShowForm(callBackButton, callBackForm, trashClass);    /// Show form
        hideShowForm(callBackButtonForUser, callBackFormForUser, trashClass); /// Show form


        hideShowForm(closeButton, trashClass, allCallBackForms); /// Hide form
        hideShowForm(resetButton, trashClass, allCallBackForms);  /// Hide form


    }

    showCallbackForm();

// FILTER for telephone number

var telephonseInput = $("input[type='tel']");

    telephonseInput.on("change keyup input click", function() {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
    });







// RESIZE WINDOW

    var body = $("body");
    var blockWithCategories = $(".bl_filters"),
        blockWithFilters = $(".bl_filters__productsFilters");

$(window).resize(function(){
   if( body.width() >= 992 ){

       blockWithCategories.css("display", "block"); // allways show blocks with categories and filters if window.width > 992px
       blockWithFilters.css("display", "block");
   }else {
       blockWithCategories.css("display", "none"); // allways show blocks with categories and filters if window.width > 992px
       blockWithFilters.css("display", "none");
   }


});
$(window).resize();


});

