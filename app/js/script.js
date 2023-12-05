!function ($) {
    "use strict";
    // *********************************************
    //     document ready start 🚩
    // ****************************
    $(document).ready(function () {
        // *********************************************
        //     Slider start 🚩
        // ****************************
        AOS.init();
        // *********************************************
        //     Slider start 🚩
        // ****************************
        $("[data-popup]").on("click", function () {
            var activePopup = $($(this).data('popup'));
            activePopup.css("display", "flex");
        });
            
        $(".close").on("click", function () {
            $(".overlay").hide();
        });
    });

    // Your Code 🗒️

    // *********************************************
    //     Do not write your code below. ✋😠
    // ****************************
}.call(window, window.jQuery); // jquery initializer
