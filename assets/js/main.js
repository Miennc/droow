$(document).ready(function () {
  $(".slide-banner").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow:
      '<button class="nav-prev"><i class="fas fa-arrow-left"></i></button>',
    nextArrow:
      '<button class="nav-next"><i class="fas fa-arrow-right"></i></button>',
  });
});

