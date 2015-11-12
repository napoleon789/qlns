(function ($) {
Drupal.behaviors.myModule = {
    attach: function (context, settings) {
        $("#fgm-node-article-form-group-chiteu-values tr").each(function() {
            var id = $(this).attr("class");
            var i = id.charAt(10);
            $(this).find("td select").change(function() {
                console.log(34556);
                var nid = $(this).val();
                var url = 'http://localhost/nhansu'+'/kpi/'+nid;
                console.log(url);
                $.ajax({
                    url : url,
                    type: "GET",
                    success : function(output) {
                        var data = JSON.parse(output);
                        $("#edit-fgm-node-article-form-group-chiteu-fields-items-"+i+"-field-donvi-und-value").val(data[0]);
                        $("#edit-fgm-node-article-form-group-chiteu-fields-items-"+i+"-field-trongso-und-value").val(data[1]);
                        $("#edit-fgm-node-article-form-group-chiteu-fields-items-"+i+"-field-toithieu-und-value").val(data[2]);
                        $("#edit-fgm-node-article-form-group-chiteu-fields-items-"+i+"-field-muctieu-und-value").val(data[3]);
                    }
                })
            });
        });
    },
        detach: function (context, settings) {
            $("#fgm-node-article-form-group-chiteu-values tr").each(function() {
                var id = $(this).attr("class");
                var i = id.charAt(10);
                $(this).find("td select").change(function() {
                    console.log(34556);
                    var nid = $(this).val();
                    var url = 'http://localhost/nhansu/'+'kpi/'+nid;
                    console.log(url);
                    $.ajax({
                        url : url,
                        type: "GET",
                        success : function(output) {
                            var data = JSON.parse(output);
                            $("#edit-fgm-node-article-form-group-chiteu-fields-items-"+i+"-field-donvi-und-value").val(data[0]);
                            $("#edit-fgm-node-article-form-group-chiteu-fields-items-"+i+"-field-trongso-und-value").val(data[1]);
                            $("#edit-fgm-node-article-form-group-chiteu-fields-items-"+i+"-field-toithieu-und-value").val(data[2]);
                            $("#edit-fgm-node-article-form-group-chiteu-fields-items-"+i+"-field-muctieu-und-value").val(data[3]);
                        }
                    })
                });
            });
        }
        };
})(jQuery);