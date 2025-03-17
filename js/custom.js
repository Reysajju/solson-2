// Dropdown Header Menu Js Start
$(document).ready(function () {
  $("#dropIconToggle").click(function () {
    $(".dropdown-menu-big").slideToggle(500);
  });
}),
  $(document).ready(function () {
    $("#dropIconToggle2").click(function () {
      $(".dropdown-menu-single2").slideToggle(500);
    });
  }),
  $(document).ready(function () {
    $("#dropIconToggle3").click(function () {
      $(".dropdown-menu-single3").slideToggle(500);
    });
  }),
  $(document).ready(function () {
    $("#dropIconToggle4").click(function () {
      $(".dropdown-menu-single4").slideToggle(500);
    });
  }),
  $(document).ready(function () {
    $("#dropIconToggle5").click(function () {
      $(".dropdown-menu-single5").slideToggle(500);
    });
  });
// Dropdown Header Menu Js end

$(".clickbutton").click(function () {
  $(".floatbutton").toggleClass("active"), $(".crossplus").toggleClass("rotate")
}), $(window).on("scroll", function () {
  if ($(".stricked-menu").length) {
    var o = $(".stricked-menu");
    130 < $(window).scrollTop() ? o.addClass("stricky-fixed") : $(this).scrollTop() <= 130 && o.removeClass(
      "stricky-fixed")
  }
  if ($(".scroll-to-top").length) {
    100 < $(window).scrollTop() ? $(".scroll-to-top").fadeIn(500) : $(this).scrollTop() <= 100 && $(
      ".scroll-to-top").fadeOut(500)
  }
})

$(".open_popup").click(function () {
  $("#staticBackdrop").css("display", "block").addClass("show");
}),
$(".btn-close").click(function () {
  $("#staticBackdrop").css("display", "none").removeClass("show");
})

AOS.init();

    $(document).ready(function() {
        // When the button is clicked
    $("#openPopupButton").click(function() {
        // Show the popup using Bootstrap's modal method
        $("#staticBackdrop").modal("show");
    });

    // Optional: If you want to close the popup when the close button is clicked
    $(".btn-close").click(function() {
        // Hide the popup using Bootstrap's modal method
        $("#staticBackdrop").modal("hide");
    });
});



// Popup Timer Js Start
$(document).ready(function () {
  setTimeout(function () {
    $("#staticBackdrop").modal("show");
  }, 2000);
});
// Popup Timer Js end

$(document).ready(function () {
  $(".new-ser-slider").slick({
    dots: !1,
    infinite: !1,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    padding: 20,
    arrows: !0,
    nextArrow: ".next-slide",
    prevArrow: ".prev-slide",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: !0,
          dots: !0,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}),
  // new testi slider Js start here//
  $(document).ready(function () {
    $(".new-testi-slider").slick({
      dots: !1,
      infinite: !1,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      arrows: !1,
      autoplaySpeed: 1000,
      autoplaySpeed: 1e3,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: !0,
            dots: !0,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });
// new testi slider Js start here//

// home page js end here//
var clock,
  currentDate = new Date(),
  futureDate = new Date("2024-01-5"),
  diff = futureDate.getTime() / 1e3 - currentDate.getTime() / 1e3;
(clock = $("#clock1").FlipClock(diff, { clockFace: "DailyCounter", countdown: !0, showSeconds: !0 }))

jQuery(document).ready(function () {
  $("#dp-next").click(function () {
    var total = $(".dp_item").length;
    $("#dp-slider .dp_item:first-child").hide().appendTo("#dp-slider").fadeIn();
    $.each($('.dp_item'), function (index, dp_item) {
      $(dp_item).attr('data-position', index + 1);
    });
    detect_active();

  });

  $("#dp-prev").click(function () {
    var total = $(".dp_item").length;
    $("#dp-slider .dp_item:last-child").hide().prependTo("#dp-slider").fadeIn();
    $.each($('.dp_item'), function (index, dp_item) {
      $(dp_item).attr('data-position', index + 1);
    });

    detect_active();
  });

  $("body").on("click", "#dp-slider .dp_item:not(:first-child)", function () {
    var get_slide = $(this).attr('data-class');
    console.log(get_slide);
    $("#dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo("#dp-slider").fadeIn();
    $.each($('.dp_item'), function (index, dp_item) {
      $(dp_item).attr('data-position', index + 1);
    });

    detect_active();
  });
});






// ScrollReveal().reveal('.headline');
// ScrollReveal().reveal('.delay1', { delay: 200 });
// ScrollReveal().reveal('.delay2', { delay: 400 });
// ScrollReveal().reveal('.delay3', { delay: 600 });
// ScrollReveal().reveal('.delay4', { delay: 800 });
// ScrollReveal().reveal('.delay5', { delay: 1000 });
// ScrollReveal().reveal('.delay6', { delay: 1200 });
// ScrollReveal().reveal('.delay7', { delay: 1400 });
// ScrollReveal().reveal('.delay8', { delay: 1600 });
// ScrollReveal().reveal('.delay9', { delay: 1800 });
// ScrollReveal().reveal('.delay10', { delay: 2000 });
// ScrollReveal().reveal('.delay11', { delay: 2200 });
// ScrollReveal().reveal('.delay12', { delay: 2400 });
// ScrollReveal().reveal('.delay13', { delay: 2600 });
// ScrollReveal().reveal('.delay14', { delay: 2800 });
// ScrollReveal().reveal('.delay15', { delay: 3000 });


      // JavaScript to toggle the dropdown
      function toggleDropdown() {
        var dropdown = document.getElementById("myDropdown");
        dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
      }
    
      // Close the dropdown if the user clicks outside of it
      window.onclick = function(event) {
        if (!event.target.matches('.dropdown-button')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
              openDropdown.style.display = "none";
            }
          }
        }
      }

      

function changeCardImage(card, newSrc) {
  const image = card.querySelector('.card-icon img');
  image.setAttribute('src', newSrc);
}


var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
  autoplay: {
    delay: 3000, // Set the delay (in milliseconds) between slides
    disableOnInteraction: false, // Allow manual interaction (e.g., clicking) to stop autoplay
  }
});
