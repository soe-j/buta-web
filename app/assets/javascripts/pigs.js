$(document).on('turbolinks:load', function(){
  var pigImage = $('#pig-image');
  var offset = gon.offset;

  setInterval(function () {
    $.getJSON('/pigs/' + gon.pig_name + '/topping_logs?offset=' + offset , function (logs) {
      logs.forEach(function (log) {
        var imgSrc = '/assets/' + gon.pig_name + '-' + gon.pig_level + '-' + log.topping_name + '.gif';
        pigImage.attr('src', imgSrc);
      });

      offset += logs.length;
      console.log(logs);
    });
    console.log('hey');
  }, 1000);
});
