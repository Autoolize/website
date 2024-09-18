(function ($) {
    $('.navigation-btn-toggle').on('click', function () {
        $('#mobile-menu').toggleClass('hidden')
    });

    // Tab click handler
    $(".flex button").on("click", function () {
        // Remove active class and border from all tabs
        $(".flex button").removeClass("border-blue-600 text-blue-600");
        $(".flex button").addClass("border-transparent");

        // Add active class and border to the clicked tab
        $(this).removeClass("border-transparent").addClass("border-blue-600 text-blue-600");

        // Get the target content ID from the clicked tab's data-target attribute
        let target = $(this).data("target");

        // Hide all content sections
        $(".tab-content").addClass("hidden");

        // Show the corresponding content section
        $(target).removeClass("hidden");
    });
})(jQuery)