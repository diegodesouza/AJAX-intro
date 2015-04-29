// Using data from JSON
function loadStandings(){
  $.ajax({
    url: '/teams.json',
    success: function(data){
      console.log(data);
    },
    error: function(xhr, httpStatus, errorThrown){
      alert("Something went wrong. Please try again later.");
    }
  })
}

$(function(){
  //load standings when the page loads
  loadStandings();
});
