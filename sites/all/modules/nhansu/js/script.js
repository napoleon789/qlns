(function ($) {
    Drupal.behaviors.myModule = {
        attach: function (context, settings) {
            var sum_trongso = 0;
            $("#fgm-node-giao-kpi-form-group-giaokpi-values tbody tr").each(function() {
                var getUrl = window.location;
                var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
                var id = $(this).attr("class");
                var i = id.charAt(10);
                var chi_tieucoban = $("#edit-fgm-node-giao-kpi-form-group-giaokpi-fields-items-"+i+"-field-giaokpi-chi-und").find("option:selected");
                var don_vi = $("#edit-fgm-node-giao-kpi-form-group-giaokpi-fields-items-"+i+"-field-giaokpi-donvi-und-value");
                var trong_so = $("#edit-fgm-node-giao-kpi-form-group-giaokpi-fields-items-"+i+"-field-giaokpi-trong-und-value");
                var toi_thieu = $("#edit-fgm-node-giao-kpi-form-group-giaokpi-fields-items-"+i+"-field-giaokpi-toi-und-value");
                var muc_tieu = $("#edit-fgm-node-giao-kpi-form-group-giaokpi-fields-items-"+i+"-field-giaokpi-muctieu-und-value");
                var thuc_hien =  $("#edit-fgm-node-giao-kpi-form-group-giaokpi-fields-items-"+i+"-field-giaokpi-thuchien-und-value");
                var hoan_thanh = $("#edit-fgm-node-giao-kpi-form-group-giaokpi-fields-items-"+i+"-field-giaokpi-hoanthanh-und-value");


                //dien text vao the div
                console.log(chi_tieucoban);
                var text = chi_tieucoban.text();
                $(".ex_me .form-item-fgm-node-giao-kpi-form-group-giaokpi-fields-items-"+i+"-field-giaokpi-chi-und").html("<textarea cols='60' rows ='3'>"+text+"</textarea>")

                //dien số thứ tự tự động
                $(this).find(".form-item-fgm-node-giao-kpi-form-group-giaokpi-fields-items-"+i+"-field-thutu-und-value input").val(parseInt(i)+1);

                //tinh tong trong so
                var sum_tt = trong_so.val();
                if(sum_tt == undefined || sum_tt == '') {

                }
                else {
                    sum_tt = sum_tt.substr(0,2);
                    sum_trongso = sum_trongso + parseInt(sum_tt);
                }
                $(trong_so).focus(function(){

                }).focusout(function() {
                        sum_trongso = 0;
                        $("#fgm-node-giao-kpi-form-group-giaokpi-values tbody tr").each(function() {
                            var id = $(this).attr("class");
                            var i = id.charAt(10);
                            var trong_so = $("#edit-fgm-node-giao-kpi-form-group-giaokpi-fields-items-"+i+"-field-giaokpi-trong-und-value");
                            var sum_tt = trong_so.val();
                            if(sum_tt == undefined || sum_tt == '') {

                            }
                            else {
                                sum_tt = sum_tt.substr(0,2);
                                sum_trongso = sum_trongso + parseInt(sum_tt);
                            }
                        });
                        $(".sum_ts").html(sum_trongso + "%");
                    });


                $(this).find("td select#edit-fgm-node-giao-kpi-form-group-giaokpi-fields-items-"+i+"-field-giaokpi-chi-und").change(function() {
                    var nid = $(this).val();
                    var url = 'http://qlns.drupalvietnam.com'+'/kpi/'+nid;
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


                $(this).find("td select#edit-fgm-node-giao-kpi-form-group-giaokpi-fields-items-"+i+"-field-giaokpi-nhom-und").change(function() {
                    var tid = $(this).val();
                    var url = 'http://qlns.drupalvietnam.com'+'/api/term/'+tid;
                    $.ajax({
                        url : url,
                        type: "GET",
                        success : function(output) {
                            var data = JSON.parse(output);
                            var nid = $("td select#edit-fgm-node-giao-kpi-form-group-giaokpi-fields-items-"+i+"-field-giaokpi-chi-und option");
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
                            var gia_tri = Math.round((thuc_hien_value - toi_thieu_value)/(muc_tieu_value - toi_thieu_value)*trong_so_value);
                            if(gia_tri <0)
                                gia_tri = 0;
                            var gia_tri = gia_tri+'%';
                            $(hoan_thanh).val(gia_tri);
                        }
                    });
            });
            $(".sum_ts").html(sum_trongso + "%");
        },
        detach: function (context, settings) {
            var sum_trongso = 0;
            $("#fgm-node-giao-kpi-form-group-giaokpi-values tr").each(function() {
                var getUrl = window.location;
                var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
                var id = $(this).attr("class");
                var i = id.charAt(10);

                var don_vi = $("#edit-fgm-node-giao-kpi-form-group-giaokpi-fields-items-"+i+"-field-giaokpi-donvi-und-value");
                var trong_so = $("#edit-fgm-node-giao-kpi-form-group-giaokpi-fields-items-"+i+"-field-giaokpi-trong-und-value");
                var toi_thieu = $("#edit-fgm-node-giao-kpi-form-group-giaokpi-fields-items-"+i+"-field-giaokpi-toi-und-value");
                var muc_tieu = $("#edit-fgm-node-giao-kpi-form-group-giaokpi-fields-items-"+i+"-field-giaokpi-muctieu-und-value");
                var thuc_hien =  $("#edit-fgm-node-giao-kpi-form-group-giaokpi-fields-items-"+i+"-field-giaokpi-thuchien-und-value");
                var hoan_thanh = $("#edit-fgm-node-giao-kpi-form-group-giaokpi-fields-items-"+i+"-field-giaokpi-hoanthanh-und-value");

                //tinh tong trong so
                var sum_tt = trong_so.val();

                if(sum_tt == undefined || sum_tt == '') {

                }
                else {
                    sum_tt = sum_tt.substr(0,2);
                    sum_trongso = sum_trongso + parseInt(sum_tt);

                }


                $(this).find("td select#edit-fgm-node-giao-kpi-form-group-giaokpi-fields-items-"+i+"-field-giaokpi-chi-und").change(function() {
                    var nid = $(this).val();
                    var url = 'http://qlns.drupalvietnam.com'+'/kpi/'+nid;
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

                $(this).find("td select#edit-fgm-node-giao-kpi-form-group-giaokpi-fields-items-"+i+"-field-giaokpi-nhom-und").change(function() {
                    var tid = $(this).val();
                    var url = 'http://qlns.drupalvietnam.com'+'/api/term/'+tid;
                    $.ajax({
                        url : url,
                        type: "GET",
                        success : function(output) {
                            var data = JSON.parse(output);
                            var nid = $("td select#edit-fgm-node-giao-kpi-form-group-giaokpi-fields-items-"+i+"-field-giaokpi-chi-und option");
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
                            var gia_tri = Math.round((thuc_hien_value - toi_thieu_value)/(muc_tieu_value - toi_thieu_value)*trong_so_value);
                            if(gia_tri < 0)
                                gia_tri = 0
                            var gia_tri = gia_tri+'%';
                            $(hoan_thanh).val(gia_tri);
                        }
                    });
            });
            console.log(sum_trongso);
            $(".sum_ts").text(sum_trongso);
        }
    };
})(jQuery);