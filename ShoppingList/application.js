$(document).ready(function(){
$('#add').on("click", function(){
  $('input').val();
  // adds items to list;
  var value=$('input').val();
 $('#1').append("<p>"+value+"</p>"); 
     });
$('#delete').on("click", function(){
  $('input').val();
  // below allows you to clear the list;
  $('#1').empty(); 
     });
})
