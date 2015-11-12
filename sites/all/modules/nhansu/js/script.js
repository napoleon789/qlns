(function ($) {
Drupal.behaviors.myModule = {
    attach: function (context, settings) {
        $("#fgm-node-article-form-group-chiteu-values tr").each(function() {
            var id = $(this).attr("class");
            var i = id.charAt(10);
            $(this).find("td select#edit-fgm-node-article-form-group-chiteu-fields-items-"+i+"-field-chiteu-und").change(function() {
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


            $(this).find("td select#edit-fgm-node-article-form-group-chiteu-fields-items-"+i+"-field-nhomct-und").change(function() {
                var tid = $(this).val();
                var url = 'http://localhost/nhansu'+'/api/term/'+tid;
                $.ajax({
                    url : url,
                    type: "GET",
                    success : function(output) {
                        var data = JSON.parse(output);
                        var nid = $("td select#edit-fgm-node-article-form-group-chiteu-fields-items-"+i+"-field-chiteu-und option");
                        $(nid).each(function() {

                            var node = $(this).attr("value");
                            if(data.indexOf(node) <0) {
                                $(this).hide();
                            }
                            else {
                                 $(this).show();
                            }
                            if(node == '_none') {
                                $(this).show();
                            }
                        })

                    }
                })
            });

        });
    },
        detach: function (context, settings) {
            $("#fgm-node-article-form-group-chiteu-values tr").each(function() {
                var id = $(this).attr("class");
                var i = id.charAt(10);
                $(this).find("td select#edit-fgm-node-article-form-group-chiteu-fields-items-"+i+"-field-chiteu-und").change(function() {
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




                $(this).find("td select#edit-fgm-node-article-form-group-chiteu-fields-items-"+i+"-field-nhomct-und").change(function() {
                    var tid = $(this).val();
                    var url = 'http://localhost/nhansu'+'/api/term/'+tid;
                    $.ajax({
                        url : url,
                        type: "GET",
                        success : function(output) {
                            var data = JSON.parse(output);
                            var nid = $("td select#edit-fgm-node-article-form-group-chiteu-fields-items-"+i+"-field-chiteu-und option");
                            $(nid).each(function() {

                                var node = $(this).attr("value");
                                if(data.indexOf(node) <0) {
                                    $(this).hide();
                                }
                                else {
                                    $(this).show();
                                }
                                if(node == '_none') {
                                    $(this).show();
                                }
                            })

                        }
                    })
                });

            });
        }
        };
})(jQuery);