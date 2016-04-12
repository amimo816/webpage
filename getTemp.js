  $(function() {
    $.get('temperature/temperature.log', function(data) {
      $('#temperature-test').html(data);
      });
    });
