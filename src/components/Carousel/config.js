const getSlides = (numItems, defaultSlides) =>
  Math.min(numItems, defaultSlides);

const getSettings = (numItems) => ({
  accessibility: true,
  lazyLoad: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 1500,
  speed: 500,
  initialSlide: 0,
  slidesToShow: getSlides(numItems, 4),
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: getSlides(numItems, 3),
      },
    },
    {
      breakpoint: 820,
      settings: {
        slidesToShow: getSlides(numItems, 2),
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: getSlides(numItems, 1),
      },
    },
  ],
});

export { getSettings };
