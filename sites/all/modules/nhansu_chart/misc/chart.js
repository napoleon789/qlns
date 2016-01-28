
(function ($) {
    Drupal.behaviors.nhansu_chart = {
        attach: function (context, settings) {

            jQuery("#edit-submit").submit(function(){return false;});

            jQuery(".ckpi").click(function() {
                var thuc_hien = $(this).attr("thuc_hien");
                var toi_thieu = $(this).attr("toi_thieu");
                var muc_tieu = $(this).attr("muc_tieu");
                var title = $(this).text();
                var nid = jQuery(this).attr("alt");
                var item = jQuery(this).attr("rel");
                jQuery('#chart_colum').html('<div class="loadding"><img src="sites/all/modules/nhansu_chart/images/bx_loader.gif" /></div>');
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
                                url: 'http://qlns.drupalvietnam.com/nv/'+nid+'/'+item,
                                success: function(output) {
                                    $("#chart_colum").css("height","400px");
                                    $("#chart_colum1 h2").text(title);
                                    var data = new google.visualization.DataTable();
                                    data.addColumn('string', '');
                                    data.addColumn('number', 'Tối thiểu');
                                    data.addColumn('number', 'Mục tiêu');
                                    data.addColumn('number', 'Thực hiện');
                                    var du_lieu = '['+'"",'+toi_thieu+','+muc_tieu+','+thuc_hien+']';
                                    var dlieu = eval(du_lieu);
                                    data.addRows([dlieu]);

                                    var options = {
                                        chartArea:{left:25,top:60,width:"84%"},
                                        fontSize:10,
                                        colors: ["#009ac3","#F00012", "#1222C0"],
                                        hAxis: {title: "", titleTextStyle: {color: "red"}}
                                    };
                                    var chart = new google.visualization.ColumnChart(document.getElementById('chart_colum'));

                                    chart.draw(data, options);
                                }
                            });
                        }
                        });
                        return true;
                    }
                });
            });


        },
        detach: function (context, settings) {
            jQuery(".ckpi").click(function() {
                console.log(12344);
                var thuc_hien = $(this).attr("thuc_hien");
                var toi_thieu = $(this).attr("toi_thieu");
                var muc_tieu = $(this).attr("muc_tieu");
                var title = $(this).text();
                var nid = jQuery(this).attr("alt");
                var item = jQuery(this).attr("rel");
                jQuery('#chart_colum').html('<div class="loadding"><img src="sites/all/modules/nhansu_chart/images/bx_loader.gif" /></div>');
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
                                url: 'http://qlns.drupalvietnam.com/nv/'+nid+'/'+item,
                                success: function(output) {
                                    $("#chart_colum").css("height","400px");
                                    $("#chart_colum1 h2").text(title);
                                    var data = new google.visualization.DataTable();
                                    data.addColumn('string', '');
                                    data.addColumn('number', 'Tối thiểu');
                                    data.addColumn('number', 'Mục tiêu');
                                    data.addColumn('number', 'Thực hiện');
                                    var du_lieu = '['+'"",'+toi_thieu+','+muc_tieu+','+thuc_hien+']';
                                    var dlieu = eval(du_lieu);
                                    data.addRows([dlieu]);

                                    var options = {
                                        chartArea:{left:25,top:60,width:"84%"},
                                        fontSize:10,
                                        colors: ["#009ac3","#F00012", "#1222C0"],
                                        hAxis: {title: "", titleTextStyle: {color: "red"}}
                                    };
                                    var chart = new google.visualization.ColumnChart(document.getElementById('chart_colum'));

                                    chart.draw(data, options);
                                }
                            });
                        }
                        });
                        return true;
                    }
                });
            });
        }
    };
})(jQuery);
function nhansu_chart_data() {
    jQuery(".ckpi").click(function() {
        var thuc_hien = jQuery(this).attr("thuc_hien");
        var toi_thieu = jQuery(this).attr("toi_thieu");
        var muc_tieu = jQuery(this).attr("muc_tieu");
        var title = jQuery(this).text();
        var nid = jQuery(this).attr("alt");
        var item = jQuery(this).attr("rel");
        jQuery('#chart_colum').html('<div class="loadding"><img src="sites/all/modules/nhansu_chart/images/bx_loader.gif" /></div>');
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
                        url: 'nv/'+nid+'/'+item,
                        success: function(output) {
                            jQuery("#chart_colum").css("height","400px");
                            jQuery("#chart_colum1 h2").text(title);
                            var data = new google.visualization.DataTable();
                            data.addColumn('string', '');
                            data.addColumn('number', 'Tối thiểu');
                            data.addColumn('number', 'Mục tiêu');
                            data.addColumn('number', 'Thực hiện');
                            var du_lieu = '['+'"",'+toi_thieu+','+muc_tieu+','+thuc_hien+']';
                            var dlieu = eval(du_lieu);
                            data.addRows([dlieu]);

                            var options = {
                                chartArea:{left:25,top:60,width:"84%"},
                                fontSize:10,
                                colors: ["#009ac3","#F00012", "#1222C0"],
                                hAxis: {title: "", titleTextStyle: {color: "red"}}
                            };
                            var chart = new google.visualization.ColumnChart(document.getElementById('chart_colum'));

                            chart.draw(data, options);
                        }
                    });
                }
                });
                return true;
            }
        });
    });
}