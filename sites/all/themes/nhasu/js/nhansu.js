jQuery(document).ready(function($) {
    pathArray = location.href.split( '/' );
    console.log(pathArray);
    if((pathArray[4]) && pathArray[4] == 'caidat'){
        console.log(123);
        $("#block-system-main-menu ul li.last").addClass("active-trail active");
        $("#block-system-main-menu ul li.last a").addClass("active-trail active");
    }
});
