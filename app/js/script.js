!function ($) {
    "use strict";
    // *********************************************
    //     document ready start 🚩
    // ****************************
    $(document).ready(function () {
        // *********************************************
        //     Slider start 🚩
        // ****************************
        // First Slider
        $(".partner_slider").slick({
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 3,
            vertical: true,
            verticalSwiping: true,
            arrows: false,
            swipeToSlide: true,
            focusOnSelect: true,
            asNavFor: '.partner_slider_box', // Link to the second slider
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        vertical: false,
                        verticalSwiping: false,
                        slidesToShow: 1
                    }
                }
            ]
        });

        // Enable scrolling with the mouse wheel
        $(".partner_slider").on("wheel", function (event) {
            event.preventDefault();

            if (event.originalEvent.deltaY < 0) {
                // Scrolling up, go to the previous slide
                $(".partner_slider").slick("slickPrev");
            } else {
                // Scrolling down, go to the next slide
                $(".partner_slider").slick("slickNext");
            }
        });

        // Second Slider
        $(".partner_slider_box").slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            asNavFor: '.partner_slider', // Link to the first slider
            fade: true,
        });
        
        $(".embrace-slider-start").slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
        });

        $('.sustainability_slider').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            prevArrow: $('.kira_slider_arrow.kira_slider_arrow_prev'),
            nextArrow: $('.kira_slider_arrow.kira_slider_arrow_next'),
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                }
            ]
        });

        
        // *********************************************
        //     scroll-to start 🚩
        // ****************************
        $("[data-scroll-to]").click(function () {
            var scroll_sec = $(this).attr("data-scroll-to");
            var sec_top = $("#" + scroll_sec).offset().top - 100;

            // Assuming you have calculated the value of navHt correctly
            var navHt = 0; // Replace this with your actual value

            var scrollto = sec_top - navHt;

            $("html, body").animate({ scrollTop: scrollto }, 100);
        });
        // *********************************************
        //     Form start 🚩
        // ****************************
        const alphaOnly = document.querySelectorAll('.alpha-only');
        alphaOnly.forEach(function(element) {
            element.addEventListener('beforeinput', function(event) {
                if (event.inputType === 'deleteContentBackward') {
                    return;
                }
                var value = this.value;
                if (!/^[a-zA-Z ]$/.test(event.data) || (event.data === ' ' && value.length === 0)) {
                    event.preventDefault();
                }
            });
        });

        const alphaNumeric = document.querySelectorAll('.alpha-numeric-only');
        alphaNumeric.forEach(function(element) {
            element.addEventListener('beforeinput', function(event) {
                if (event.inputType === 'deleteContentBackward') {
                    return;
                }

                var value = this.value;

                if (!/^[a-zA-Z0-9\s]*$/.test(value + event.data)) {
                    event.preventDefault();
                }
            });
        });

        const numericOnly = document.querySelectorAll('.numeric-only');
        numericOnly.forEach(function(element) {
            element.addEventListener('beforeinput', function(event) {
                if (event.inputType === 'deleteContentBackward') {
                    return;
                }

                if (!/^\d$/.test(event.data)) {
                    event.preventDefault();
                }
            });
        });

        // ---------------------------------------

        // Input validation for alphabets only
    $(".alpha-only").on("input", function() {
        var inputValue = $(this).val();
        if (!/^[a-zA-Z\s]*$/.test(inputValue)) {
            $("#" + this.id + "-error").text("Only alphabets and spaces are allowed.");
        } else {
            $("#" + this.id + "-error").text("");
        }
    });

    // Input validation for numeric-only
    $(".numeric-only").on("input", function() {
        var inputValue = $(this).val();
        if (!/^[0-9]*$/.test(inputValue)) {
            $("#" + this.id + "-error").text("Only numeric characters are allowed.");
        } else {
            $("#" + this.id + "-error").text("");
        }
    });

    // Form submission handling
    $("#kiraForm").submit(function(e) {
        e.preventDefault();
        
        // Reset previous error messages
        $(".error-message").text("");

        // Validate each input field
        var isValid = true;
        $(".form-control").each(function() {
            var inputValue = $(this).val().trim();

            // Check for empty fields
            if ($(this).prop("required") && inputValue === "") {
                $("#" + this.id + "-error").text("This field is required.");
                isValid = false;
            }

            // Additional validation checks can be added here

        });

        if (isValid) {
            // Perform AJAX submission or any other form submission logic
            $.ajax({
                type: "POST",
                url: "your-backend-endpoint.php", // replace with your actual backend endpoint
                data: $("#kiraForm").serialize(),
                success: function(response) {
                    console.log(response);
                    // Handle success response
                },
                error: function(xhr, status, error) {
                    console.error("AJAX error: " + status + " - " + error);
                }
            });
        }
    });
    });

    // Your Code 🗒️

    // *********************************************
    //     Do not write your code below. ✋😠
    // ****************************
}.call(window, window.jQuery); // jquery initializer
