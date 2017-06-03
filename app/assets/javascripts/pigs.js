$(document).on('turbolinks:load', function(){
  var pigImage = $('#pig-image');
  var defaultImageSrc = pigImage.attr('src');
  var offset = gon.offset;
  var more = 0;
  var topping = "";

  setInterval(function () {
    if (more > 0) {
      eat();
      more -= 1;
    } else {
      $.getJSON('/pigs/' + gon.pig_name + '/topping_logs/first?offset=' + offset , function (log) {
        if (log) {
          topping = log.topping_name;
          eat();
          gon.pig_level = log.pig_level;
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
    }, 1000);
  };
});
