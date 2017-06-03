$(document).on('turbolinks:load', function(){
  var pigImage = $('#pig-image');
  var defaultImageSrc = pigImage.attr('src');
  var offset = gon.offset;
  var more = 0;
  var topping = "";
  var transformMode = 0;
  var boooSound = $('#booo-sound')[0];
  var teereSound = $('#teere-sound')[0];

  setInterval(function () {
    if (transformMode) {
      transform();
    } else if (more > 0) {
      eat();
      more -= 1;
    } else {
      $.getJSON('/pigs/' + gon.pig_name + '/topping_logs/first?offset=' + offset , function (log) {
        if (log) {
          topping = log.topping_name;
          eat();
          if(gon.pig_level != log.pig_level) {
            transformMode = log.pig_level;
          }
          defaultImageSrc = '/assets/' + gon.pig_name + "-" + gon.pig_level + '-default.png';
          offset += 1;
          more = log.mashi - 1;
        }
      });
    }
  }, 1500);

  var eat = function () {
    var imgSrc = '/assets/' + gon.pig_name + '-' + gon.pig_level + '-' + topping + '.gif';
    pigImage.attr('src', imgSrc);
    setTimeout(function(){
      pigImage.attr('src', defaultImageSrc);
    }, 1300);
  };

  var transform = function () {
    var beforeImgSrc = '/assets/' + gon.pig_name + "-" + gon.pig_level + '-default.png'
    var afterImgSrc = '/assets/' + gon.pig_name + "-" + transformMode + '-default.png';

    pigImage.hide();
    boooSound.play();

    setTimeout(function(){
      pigImage.show();
    }, 100);
    setTimeout(function(){
      pigImage.hide();
    }, 200);
    setTimeout(function(){
      pigImage.show();
    }, 300);
    setTimeout(function(){
      pigImage.hide();
    }, 400);
    setTimeout(function(){
      pigImage.attr('src', afterImgSrc);
      pigImage.show();
    }, 500);
    setTimeout(function(){
      pigImage.hide();
    }, 600);
    setTimeout(function(){
      pigImage.show();
    }, 700);
    setTimeout(function(){
      pigImage.hide();
    }, 800);
    setTimeout(function(){
      pigImage.show();
    }, 900);
    setTimeout(function(){
      gon.pig_level = transformMode;
      defaultImageSrc = afterImgSrc;
      teereSound.play();
      transformMode = 0;
    }, 1000)
  };
});
