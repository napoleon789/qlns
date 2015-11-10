jQuery(document).ready(function($) {
  var acti = $("#mn_right ul li.active-trail a.active");
    var i = 0;
    acti.click(function() {
      var ul = $(this).next();
      i++;
      if(i%2 == 0)
         ul.show();
      else
        ul.hide();
      return false;
    });
  var taga = acti.attr("class");
  if(taga =='active-trail active') {
      $(this).attr("href","javascript:void(0)");
  }
});