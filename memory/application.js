$(document).ready(function(){
    var click_count = 0;
  var myarray = ["1","1","2","2","3","3"];
  for(i in myarray){
    $('#card_holder').append('<div class="card"><p>'+ myarray[i]+'</p></div>');
  }                                       
  //$(this).css("border","1px");
    $('.card').on("click", function(){
        if (click_count == 0) {
        $(this).find('p').css('opacity', 1);
        }}
    $('.card').on("click", function(){
      if (click_count== 1){
       $(this).find('p').css('opacity', 1);
      }
    });

});
