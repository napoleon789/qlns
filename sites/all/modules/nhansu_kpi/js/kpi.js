(function ($) {
    Drupal.behaviors.nhansu_kpi = {
        attach: function (context, settings) {
            jQuery("#edit-selected-phong").change(function() {
                var tid = $(this).val();
                if(tid != '') {
                    jQuery.ajax({
                        type: "POST",
                        dataType: "json",
                        url: 'http://localhost/nhansu/load/'+tid,
                        success: function(output) {
                            $("#edit-selected option").show();
                            $("#edit-selected option").each(function() {
                                $("#edit-selected").val('');
                                var giatri = $(this).attr("value");
                                var num = output.indexOf(giatri);
                                if(num < 0) {
                                    if(giatri == '')
                                        $(this).show();
                                    else
                                        $(this).hide();
                                }
                            })
                        }

                    });
                }
                else {
                    $("#edit-selected option").show();
                    $("#edit-selected").val('');
                }
            });


            jQuery(".chart_reve .select_nhanvien ").change(function() {
                var tid = $('#edit-selected-phong').val();
                var nid = $("#edit-selected").val();
                jQuery('#chart_div2').html('<div class="loadding"><img src="sites/all/modules/nhansu_chart/images/bx_loader.gif" /></div>');
                jQuery('.content_revenue').html('');
                jQuery.ajax({
                    url: 'https://www.google.com/jsapi?callback',
                    cache: true,
                    dataType: 'script',
                    success: function(){
                        google.load('visualization', '1', {packages:['corechart'], 'callback' : function()
                        {
                            jQuery.ajax({
                                type: "POST",
                                dataType: "json",
                                url: 'http://localhost/nhansu/load/'+tid+'/'+nid,
                                success: function(output) {
                                    var right = output.right;
                                    jQuery('.content_revenue').html(right);
                                    var chuan = '['+output.data+']';
                                    var nid = output.nid;
                                    var row = eval(chuan);
                                    var data = new google.visualization.DataTable();
                                    data.addColumn('string', 'Last year');
                                    data.addColumn('number', 'Current year');
                                    data.addRows(row);
                                    var options = {
                                        chartArea:{left:25,top:60,width:"84%"},
                                        fontSize:10,
                                        is3D: true,
                                        // colors: ["#009ac3","#F00012", "#1222C0"],
                                        hAxis: {title: "", titleTextStyle: {color: "red"}}
                                    };
                                    var chart = new google.visualization.PieChart(document.getElementById('chart_div2'));
                                    chart.draw(data, options);
                                }
                            });
                        }
                        });
                        return true;
                    }
                });
            });


            jQuery("#danhgia_kpi #edit-selected-phong").change(function() {
                var tid = $(this).val();
                var nid = $("#edit-selected").val();
                jQuery('.noidung').html('<div class="loadding"><img src="http://localhost/nhansu/sites/all/modules/nhansu_chart/images/bx_loader.gif" /></div>');
                jQuery.ajax({
                    type: "POST",
                    dataType: "json",
                    url: 'http://localhost/nhansu/danhgia_kpi/'+tid+'/'+nid,
                    success: function(output) {
                        var right = output.right;
                        jQuery('.noidung').html(right);
                        var nid = output.nid;
                        if(nid == null){
                            $(".select_nhanvien option").hide();

                        }
                        else {
                            $(".select_nhanvien option").show();
                            $(".select_nhanvien option").each(function(){
                                var giatri = $(this).attr("value");
                                var num = nid.indexOf(giatri);
                                if(num < 0) {
                                    if(giatri == 'ALL')
                                        $(this).show();
                                    else
                                        $(this).hide();
                                }
                            });
                        }
                    }
                });
            });


            jQuery("#danhgia_kpi .select_nhanvien").change(function() {
                var tid = $(this).val();
                var nid = $("#edit-selected").val();
                jQuery('.noidung').html('<div class="loadding"><img src="http://localhost/nhansu/sites/all/modules/nhansu_chart/images/bx_loader.gif" /></div>');
                jQuery.ajax({
                    type: "POST",
                    dataType: "json",
                    url: 'http://localhost/nhansu/danhgia_kpi/'+tid+'/'+nid,
                    success: function(output) {
                        var right = output.right;
                        jQuery('.noidung').html(right);

                    }
                });
            });

        },
        detach: function (context, settings) {
            $(".chart_reve").click(function() {

            });

        }
    };
})(jQuery);

function chart_kpi_print($data) {
    window.print(1234);
}