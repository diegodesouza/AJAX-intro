// Ajax call as soon as the page is loaded.
$.ajax({
  url: '/time.json',
  dataType: 'json',
  success: function(data){
    alert("the time is: " + data.time);
  }
})
