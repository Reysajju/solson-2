(function() {
    // Create an Intersection Observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const image = entry.target;

                // Replace the src with the data-src
                if (image.getAttribute("data-src")) {
                    image.src = image.getAttribute("data-src");
                }

                // Replace the srcset with the data-srcset
                if (image.getAttribute("data-srcset")) {
                    image.srcset = image.getAttribute("data-srcset");
                }

                // Replace the source srcset's with the data-srcset's if inside a picture element
                if (image.parentElement.tagName === "PICTURE") {
                    const sources = image.parentElement.querySelectorAll("source");
                    sources.forEach(source => {
                        source.srcset = source.getAttribute("data-srcset");
                    });
                }

                // Remove the "lazyestload" class after the image has loaded
                image.addEventListener('load', function() {
                    this.classList.remove("lazyestload");
                });

                // Unobserve the image, as it's no longer needed
                observer.unobserve(image);
            }
        });
    });

    // Find all the images with class "lazyestload"
    const images = document.querySelectorAll("img.lazyestload");
    images.forEach(image => {
        observer.observe(image);
    });

    // Run the lazy loading function initially
    lazyestload();
})();