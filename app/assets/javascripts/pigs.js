$(document).on('turbolinks:load', function(){
  var pigImage = $('#pig-image');
  var offset = gon.offset;

  setInterval(function () {
    $.getJSON('/pigs/' + gon.pig_name + '/topping_logs/first?offset=' + offset , function (log) {
      if (log) {
        var imgSrc = '/assets/' + gon.pig_name + '-' + gon.pig_level + '-' + log.topping_name + '.gif';
        pigImage.attr('src', imgSrc);
        offset += 1;
      }
    });
    console.log(log);
  }, 1000);
});
