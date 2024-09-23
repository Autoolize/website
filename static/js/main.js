(function ($) {
    $('.navigation-btn-toggle').on('click', function () {
        $('#mobile-menu').toggleClass('hidden')
    });

    // Tab click handler
    $("#wecanhelp .flex button").on("click", function () {
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

    // categories
    // Attach click event listeners to tab buttons
    $('#what-we-do .wedo-tab-button').click(function () {
        var category = $(this).data('tab');
        switchTab(category);
    });

    function switchTab(category) {
        // Show or hide content items based on data-category
        $('#what-we-do #tab-content > div').each(function () {
            if ($(this).data('category') === category) {
                $(this).removeClass("hidden");
            } else {
                $(this).addClass("hidden");;
            }
        });

        // Update the active tab button styling
        $('#what-we-do .wedo-tab-button').removeClass('tab-active');
        $('#what-we-do .wedo-tab-button').each(function () {
            if ($(this).data('tab') === category) {
                $(this).addClass('tab-active');
            }
        });

        // Re-initialize Lucide icons
        lucide.createIcons();
    }

    // Initialize with the first tab
    switchTab('industries');

})(jQuery)