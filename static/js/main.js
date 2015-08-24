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


  $(".spoiler").spoiler();
  //  > ceiling-choice

  $(".comparison-table td").mouseover(function() {
    var tds = $( this ).parent().find("td"),
      index = $.inArray( this, tds );
    $('<style>' +
      '.comparison-table td:nth-child(' + (index + 1) + '){background-color:rgba(255,223,0,.4)!important}' +
      '</style>').appendTo('head');
  }).mouseout(function() {
    $("head style").remove();
  });

  if (window.innerWidth < 1024) {
    $("body").addClass("nohover");
    $("td, th")
      .attr("tabindex", "1")
      .on("touchstart", function() {
        $(this).focus();
      });
  }

});