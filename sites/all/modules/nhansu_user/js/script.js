(function ($) {
Drupal.behaviors.myModule = {
    attach: function (context, settings) {
        console.log(1234);
        $("#fgm-node-article-form-group-chiteu-values tbody tr").each(function() {
            var getUrl = window.location;
            var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
            var id = $(this).attr("class");
            var i = id.charAt(10);

            var don_vi = $("#edit-fgm-node-article-form-group-chiteu-fields-items-"+i+"-field-donvi-und-value");
            var trong_so = $("#edit-fgm-node-article-form-group-chiteu-fields-items-"+i+"-field-trongso-und-value");
            var toi_thieu = $("#edit-fgm-node-article-form-group-chiteu-fields-items-"+i+"-field-toithieu-und-value");
            var muc_tieu = $("#edit-fgm-node-article-form-group-chiteu-fields-items-"+i+"-field-muctieu-und-value");
            var thuc_hien =  $("#edit-fgm-node-article-form-group-chiteu-fields-items-"+i+"-field-thuc-hien-und-value");
            var hoan_thanh = $("#edit-fgm-node-article-form-group-chiteu-fields-items-"+i+"-field-hoan-thanh-und-value");

            //dien số thứ tự tự động

            $(this).find(".form-item-fgm-node-giao-kpi-form-group-giaokpi-fields-items-"+i+"-field-thutu-und-value input").val(i);

            $(this).find("td select#edit-fgm-node-article-form-group-chiteu-fields-items-"+i+"-field-chiteu-und").change(function() {
                var nid = $(this).val();
                var url = baseUrl+'/kpi/'+nid;
                $.ajax({
                    url : url,
                    type: "GET",
                    success : function(output) {
                        var data = JSON.parse(output);
                        $(don_vi).val(data[0]);
                        $(trong_so).val(data[1]);
                        $(toi_thieu).val(data[2]);
                        $(muc_tieu).val(data[3]);
                    }
                })
            });


            $(this).find("td select#edit-fgm-node-article-form-group-chiteu-fields-items-"+i+"-field-nhomct-und").change(function() {
                var tid = $(this).val();
                var url = baseUrl+'/api/term/'+tid;
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

            $(thuc_hien).focus(function(){

            }).focusout(function() {
                  var toi_thieu_value = $(toi_thieu).val();
                  var muc_tieu_value = $(muc_tieu).val();
                  var thuc_hien_value = $(thuc_hien).val();
                  var trong_so_value = $(trong_so).val().replace("%","");
                    if(isNaN(parseInt(toi_thieu_value))) {
                        var gia_tri_ht = $.trim(thuc_hien_value);
                        if(thuc_hien_value == 'yes'){
                            var trong_so_giatri = trong_so_value+"%";
                            $(hoan_thanh).val(trong_so_giatri)
                        }
                        else
                        {
                            $(hoan_thanh).val("0%");

                        }
                    }
                    else{
                        var gia_tri = (thuc_hien_value - toi_thieu_value)/(muc_tieu_value - toi_thieu_value)*trong_so_value;
                        var gia_tri = gia_tri+'%';
                        $(hoan_thanh).val(gia_tri);
                    }
                });
        });

    },
        detach: function (context, settings) {
            $("#fgm-node-article-form-group-chiteu-values tr").each(function() {
                var getUrl = window.location;
                var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
                var id = $(this).attr("class");
                var i = id.charAt(10);

                var don_vi = $("#edit-fgm-node-article-form-group-chiteu-fields-items-"+i+"-field-donvi-und-value");
                var trong_so = $("#edit-fgm-node-article-form-group-chiteu-fields-items-"+i+"-field-trongso-und-value");
                var toi_thieu = $("#edit-fgm-node-article-form-group-chiteu-fields-items-"+i+"-field-toithieu-und-value");
                var muc_tieu = $("#edit-fgm-node-article-form-group-chiteu-fields-items-"+i+"-field-muctieu-und-value");
                var thuc_hien =  $("#edit-fgm-node-article-form-group-chiteu-fields-items-"+i+"-field-thuc-hien-und-value");
                var hoan_thanh = $("#edit-fgm-node-article-form-group-chiteu-fields-items-"+i+"-field-hoan-thanh-und-value");

                $(this).find("td select#edit-fgm-node-article-form-group-chiteu-fields-items-"+i+"-field-chiteu-und").change(function() {
                    var nid = $(this).val();
                    var url = baseUrl+'/kpi/'+nid;
                    console.log(url);
                    $.ajax({
                        url : url,
                        type: "GET",
                        success : function(output) {
                            var data = JSON.parse(output);
                            $(don_vi).val(data[0]);
                            $(trong_so).val(data[1]);
                            $(toi_thieu).val(data[2]);
                            $(muc_tieu).val(data[3]);
                        }
                    })
                });




                $(this).find("td select#edit-fgm-node-article-form-group-chiteu-fields-items-"+i+"-field-nhomct-und").change(function() {
                    var tid = $(this).val();
                    var url = baseUrl+'/api/term/'+tid;
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


                $(thuc_hien).focus(function(){

                }).focusout(function() {
                        var toi_thieu_value = $(toi_thieu).val();
                        var muc_tieu_value = $(muc_tieu).val();
                        var thuc_hien_value = $(thuc_hien).val();
                        var trong_so_value = $(trong_so).val().replace("%","");
                        if(isNaN(parseInt(toi_thieu_value))) {
                            var gia_tri_ht = $.trim(thuc_hien_value);
                            if(thuc_hien_value == 'yes'){
                                var trong_so_giatri = trong_so_value+"%";
                                $(hoan_thanh).val(trong_so_giatri)
                            }
                            else
                            {
                                $(hoan_thanh).val("0%");

                            }
                        }
                        else{
                            var gia_tri = (thuc_hien_value - toi_thieu_value)/(muc_tieu_value - toi_thieu_value)*trong_so_value;
                            var gia_tri = gia_tri+'%';
                            $(hoan_thanh).val(gia_tri);
                        }
                    });
            });
        }
        };
})(jQuery);