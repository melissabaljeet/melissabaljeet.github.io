$(document).ready(function(){
  var click_count = 0;
  var myarray = ["1","1","2","2","3","3","4","4","5","5","6","6","7","7","8","8","9","9","10","10"];
  var value1=0;
  var value2=0;
  for(i in myarray){
    $('#card_holder').append('<div class="card"><p>'+ myarray[i]+'</p></div>');
  }                                       
  //$(this).css("border","1px");
    $('.card').on("click", function(){
        if(click_count == 0) {
            $(this).find('p').css('opacity', 1).addClass('clicked');
            value1=$(this).find('p').html();
            click_count=1;
        }
        else{
          //Adds another group so you can seperate the clicked from the not clicked; 
            $(this).find('p').css('opacity', 1).addClass('clicked'); 
            value2=$(this).find('p').html();
            click_count=0;
            if(value1 == value2){
              $('.clicked').css('opacity', 1).removeClass('clicked').addClass('correct');
            }
            // removes class clicked so the game could go back to normal;
            else{
                $('.clicked').css('opacity', 0).removeClass('clicked');
            }
        }
    })

});
