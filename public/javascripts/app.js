// Failing Ajax call with a friendly error message
$("#get-time").on('click', function(e){
  e.preventDefault();
  $.ajax({
    url: '/failing_time.json',
    dataType: 'json',
    success: function(data){
      alert("the time is: " + data.time);
    },
    error: function(xhr, httpStatus, errorThrown){
      alert("The clock is unavailable due to a server side " + httpStatus);
    }
  });
});
