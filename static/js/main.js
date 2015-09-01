$(document).ready(function() {



  // попап форма <
  $('.popup-with-form').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#name',

    // When elemened is focused, some mobile browsers in some cases zoom in
    // It looks not nice, so we disable it:
    callbacks: {
      beforeOpen: function() {
        if($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = '#name';
        }
      }
    }
  });
  // > попап форма


  //  index-gallery-slider <
  var gallerySlider = $('.gallery-wrap .gallery-slider').lightSlider({
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







  //  ceiling-choice <
  $("#ceiling").spectrum({
    flat: true,
    allowEmpty:true,
    showPaletteOnly: true,
    showPalette: true,
    palette: [
      ['transparent', 'white', '#FFBFBF', '#FFFFBF', '#CFFFBF', '#BFFFFF', '#BFBFFF'],
      ['#FF4D4D', '#FFDC73', '#73FF73', '#73FFFF', '#4DA6FF', '#9673FF', '#FF4DFF'],
      ['#B20000', '#D96D00', '#FFFF00', '#00FF00', '#006DD9', '#6D00D9', '#B200B2'],
      ['#400000', '#663300', '#1A6600', '#004C66', '#003366', '#000066', '#660066']
    ],
    containerClassName: 'spectrum-wrap',
    move: function(color) {
      $('<style>.png::before{background-color:' + color.toRgbString() + '!important}</style>').appendTo('head');
    }
  });
  $("#wall").spectrum({
    flat: true,
    allowEmpty:true,
    showPaletteOnly: true,
    showPalette: true,
    palette: [
      ['transparent', 'white', '#FFBFBF', '#FFFFBF', '#CFFFBF', '#BFFFFF', '#BFBFFF'],
      ['#FF4D4D', '#FFDC73', '#73FF73', '#73FFFF', '#4DA6FF', '#9673FF', '#FF4DFF'],
      ['#B20000', '#D96D00', '#FFFF00', '#00FF00', '#006DD9', '#6D00D9', '#B200B2'],
      ['#400000', '#663300', '#1A6600', '#004C66', '#003366', '#000066', '#660066']
    ],
    containerClassName: 'spectrum-wrap',
    move: function(color) {
      $('<style>.png::after{background-color:' + color.toRgbString() + '!important}</style>').appendTo('head');
    }
  });


  $(".spoiler").spoiler({
    paddingValue: 55
  });
  //  > ceiling-choice







  // table hover <

  $(".comparison-table td").mouseover(function() {
    var tds = $( this ).parent().find("td"),
      index = $.inArray( this, tds );
    $('<style>' +
      '.comparison-table td:nth-child(' + (index + 1) + '){background-color:rgba(255,223,0,.4)!important}' +
      '</style>').appendTo('head');
  }).mouseout(function() {
    $("head style:last-child").remove();
  });

  // > table hover







  //  gallery-page-slider <
  var galleryPageSlider = $('.gallery-main .gallery-slider');
  var galleryPageLightSlider = galleryPageSlider.lightSlider({
    gallery: true,
    controls: false,
    item: 1,
    vertical: false,
    verticalHeight: 489,
    vThumbWidth: 243,
    thumbItem: 4,
    thumbMargin: 30,
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
      }
    ]
  });

  $('.lSPager.lSGallery').wrapAll('<div class="gallery-page__slider-pager-wrap"><div class="gallery-page__slider-pager"></div></div>');

  $('<div class="arrow left"></div><div class="arrow right"></div>').appendTo('.gallery-page__slider-pager-wrap');

  $('.gallery-page__slider-pager-wrap .arrow.left').click(function(){
    galleryPageLightSlider.goToPrevSlide();
  });
  $('.gallery-page__slider-pager-wrap .arrow.right').click(function(){
    galleryPageLightSlider.goToNextSlide();
  });

  galleryPageSlider.magnificPopup({
    delegate: 'a',
    type: 'image',
    closeBtnInside: false,
    gallery: {
      enabled: true
    }
  });
  // > gallery-page-slider


});