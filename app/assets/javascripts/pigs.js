$(document).on('turbolinks:load', function(){

  // setInterval(function () {
    $.getJSON('/pigs/' + gon.pig_name + '/topping_logs' , function (logs) {
      console.log(logs);
    });
    console.log('hey');
  // }, 1000);
});
