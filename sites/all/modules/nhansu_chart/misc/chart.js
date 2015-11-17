//Chart for contract
jQuery(document).ready(function($) {
    //chart when change area
    jQuery(".ckpi").click(function() {
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
                        url: 'nv/'+nid+'/'+item,
                        success: function(output) {
                            $("#chart_colum").css("height","400px");
                            $("#chart_colum1 h2").text(title);
                            var data = new google.visualization.DataTable();

                            data.addColumn('string', '');
                            data.addColumn('number', 'Tối thiểu');
                            data.addColumn('number', 'Mục tiêu');
                            data.addColumn('number', 'Thực hiện');
                            console.log(content);
                            data.addRows([output]);

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


});
