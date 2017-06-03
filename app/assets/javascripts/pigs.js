$(document).on('turbolinks:load', function(){
  var offset = gon.offset;

  setInterval(function () {
    $.getJSON('/pigs/' + gon.pig_name + '/topping_logs?offset=' + offset , function (logs) {
      offset += logs.length;
      console.log(logs);
    });
    console.log('hey');
  }, 1000);
});
