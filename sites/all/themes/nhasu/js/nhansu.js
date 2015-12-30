jQuery(document).ready(function($) {
    //page kiem soat KPI quanly/kpi/kiemsoat
   var m =  $("#edit-loc-theo-0").attr("checked");
   if(m) {
       $(".form-item-cac-quy").hide();
       $(".form-item-nam-quy").hide();
       $(".container-inline-date").show();
   }
   else {
       $(".container-inline-date").hide();
       $(".form-item-cac-quy").show();
       $(".form-item-nam-quy").show();
   }
    $("#edit-loc-theo-1").click(function() {
       $(".container-inline-date").hide();
       $(".form-item-cac-quy").show();
       $(".form-item-nam-quy").show();
    });
    $("#edit-loc-theo-0").click(function() {
        $(".form-item-cac-quy").hide();
        $(".form-item-nam-quy").hide();
        $(".container-inline-date").show();
    });
    pathArray = location.href.split( '/' );
    if((pathArray[4]) && pathArray[3] == 'caidat'){
        console.log(123);
        $("#block-system-main-menu ul li.last").addClass("active-trail active");
        $("#block-system-main-menu ul li.last a").addClass("active-trail active");
    }
});
