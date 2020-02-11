$('.reviews__wrapper').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive:[
      {
      breakpoint: 940,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 740,
      settings: {
        slidesToShow: 1
      }
    }
    ]
  });


  