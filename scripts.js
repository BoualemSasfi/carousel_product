    // Initialize Flickity carousel
    var flkty = new Flickity('.main-carousel', {
        wrapAround: true,
        pageDots: false, // Hide default page dots
    });

    // Handle custom indicators click
    var indicators = document.querySelectorAll('.carousel-indicator');
    indicators.forEach(function(indicator, index) {
        indicator.addEventListener('click', function() {
            flkty.select(index);
        });
    });