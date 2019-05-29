var interval;

function countdown() {
  clearInterval(interval);
  interval = setInterval( function() {
      var timer = $('.js-timeout').html();
      timer = timer.split(':');
      var minutes = timer[0];
      var seconds = timer[1];
      seconds -= 1;
      if (minutes < 0) return;
      else if (seconds < 0 && minutes != 0) {
          minutes -= 1;
          seconds = 59;
      }
      else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;

      $('.js-timeout').html(minutes + ':' + seconds);

      if (minutes == 0 && seconds == 0){
        clearInterval(interval);
        console.log(seconds);
        $('#inputVideo').trigger('pause');
      }
  }, 1000);
}

$('#js-startTimer').click(function () {
  $('.js-timeout').text("2:00");
  $('#inputVideo').trigger('play');
  countdown();
});

$('#js-resetTimer').click(function () {
  $('.js-timeout').text("2:00");
  clearInterval(interval);
  $('#inputVideo').trigger('pause');
});

var urlRequest= "http://localhost:3000";

function savePost(x,y,width,height){
  
  $.ajax({
    headers: {"Accept": "application/json"},
    method: "POST",
    crossDomain: true,
    url: urlRequest + '/webcam_face_detection',
    dataType: 'json',
    data : { 
      'xface_position_x': x,
      'face_position_y':y, 
      'face_position_width':width,
      'face_position_height':height
    },
    success: function (result) {
      if(result){
        console.log('Salvo com sucesso!!!');
      }
    }
  });
}
