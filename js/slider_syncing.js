 $('.slider-massage-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-massage-nav'
  });

  $('.slider-massage-nav').slick({
    slidesToShow: 99,
    slidesToScroll: 1,
    asNavFor: '.slider-massage-for',
    dots: false,
    // centerMode: true,
    
    focusOnSelect: true
    
  });
                  




