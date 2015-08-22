$(document).ready(function() {


  //  index-gallery-slider <
  var gallerySlider = $('.gallery-slider').lightSlider({
    gallery: true,
    controls: false,
    item: 1,
    vertical: true,
    verticalHeight: 489,
    vThumbWidth: 243,
    thumbItem: 3,
    thumbMargin: 6,
    slideMargin: 0,
    galleryMargin: 10,
    speed: 1000,
    responsive : [
      {
        breakpoint: 1200,
        settings: {
          verticalHeight: 420,
          vThumbWidth: 200
        }
      },
      {
        breakpoint: 991,
        settings: {
          verticalHeight: 320,
          vThumbWidth: 150
        }
      //},
      //{
      //  breakpoint: 768,
      //  settings: {
      //    vertical: false
      //  }
      }
    ]
  });
  $('.arrow.left').click(function(){
    gallerySlider.goToPrevSlide();
  });
  $('.arrow.right').click(function(){
    gallerySlider.goToNextSlide();
  });
  //  > index-gallery-slider

});