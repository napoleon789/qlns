//Chart for contract
jQuery(document).ready(function() {
    //chart when change area
    jQuery(".chart_sale .select_area").change(function() {
        var id = jQuery(this).val();
        var year = jQuery(".chart_sale #edit-date-year").val();
        jQuery('#chart_div').html('<div class="loadding"><img src="sites/all/modules/custom/duhoc_chart/images/bx_loader.gif" /></div>');
        jQuery('.content_mont').html('');
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
                        url: 'sales/'+id+'/'+year,
                        success: function(output) {
                            var right = output.right;
                            jQuery('.content_mont').html(right);
                            var chuan = '['+output.data+']';
                            var row = jQuery.parseJSON(chuan);
                            var data = new google.visualization.DataTable();
                            data.addColumn('string', '');
                            data.addColumn('number', 'Last year');
                            data.addColumn('number', 'Current year');
                            data.addColumn('number', 'Target');
                            data.addRows(row);
                            var options = {
                                chartArea:{left:25,top:60,width:"84%"},
                                fontSize:10,
                                colors: ["#009ac3","#F00012", "#1222C0"],
                                hAxis: {title: "", titleTextStyle: {color: "red"}}
                            };
                            var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
                            chart.draw(data, options);
                        }
                    });
                }
                });
                return true;
            }
        });
    });
    //chart when change area's year
    jQuery(".chart_sale #edit-date-year").change(function() {
        var year = jQuery(this).val();
        var id = jQuery(".chart_sale .select_area").val();
        if(id == undefined)
        id = '';
        jQuery('#chart_div').html('<div class="loadding"><img src="sites/all/modules/custom/duhoc_chart/images/bx_loader.gif" /></div>');
        jQuery('.content_mont').html('');
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
                        url: 'sales/'+id+'/'+year,
                        success: function(output) {
                            var right = output.right;
                            jQuery('.content_mont').html(right);
                            var chuan = '['+output.data+']';
                            var row = jQuery.parseJSON(chuan);
                            var data = new google.visualization.DataTable();
                            data.addColumn('string', '');
                            data.addColumn('number', 'Last year');
                            data.addColumn('number', 'Current year');
                            data.addColumn('number', 'Target');
                            data.addRows(row);
                            var options = {
                                chartArea:{left:25,top:60,width:"84%"},
                                fontSize:10,
                                colors: ["#009ac3","#F00012", "#1222C0"],
                                hAxis: {title: "", titleTextStyle: {color: "red"}}
                            };
                            var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
                            chart.draw(data, options);
                        }
                    });
                }
                });
                return true;
            }
        });
    });
    //Chart for revenue
    jQuery(".chart_reve .select_area").change(function() {
        var id = jQuery(this).val();
        var year = jQuery(".chart_reve #edit-date-year--2").val();
        jQuery('#chart_div2').html('<div class="loadding"><img src="sites/all/modules/custom/duhoc_chart/images/bx_loader.gif" /></div>');
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
                        url: 'revenue/'+id+'/'+year,
                        success: function(output) {
                            var right = output.right;
                            jQuery('.content_revenue').html(right);
                            var chuan = '['+output.data+']';
                            var row = jQuery.parseJSON(chuan);
                            var data = new google.visualization.DataTable();
                            data.addColumn('string', '');
                            data.addColumn('number', 'Last year');
                            data.addColumn('number', 'Current year');
                            data.addColumn('number', 'Targets');
                            data.addRows(row);
                            var options = {
                                chartArea:{left:25,top:60,width:"84%"},
                                fontSize:10,
                                colors: ["#009ac3","#F00012", "#1222C0"],
                                hAxis: {title: "", titleTextStyle: {color: "red"}}
                            };
                            var chart = new google.visualization.ColumnChart(document.getElementById('chart_div2'));
                            chart.draw(data, options);
                        }
                    });
                }
                });
                return true;
            }
        });
    });
    //Chart when change revenue's year
    jQuery(".chart_reve #edit-date-year--2").change(function() {
        var year = jQuery(this).val();
        var id = jQuery(".chart_reve .select_area").val();
        if(id == undefined)
            id = '';
        jQuery('#chart_div2').html('<div class="loadding"><img src="sites/all/modules/custom/duhoc_chart/images/bx_loader.gif" /></div>');
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
                        url: 'revenue/'+id+'/'+year,
                        success: function(output) {
                            var right = output.right;
                            jQuery('.content_revenue').html(right);
                            var chuan = '['+output.data+']';
                            var row = jQuery.parseJSON(chuan);
                            var data = new google.visualization.DataTable();
                            data.addColumn('string', '');
                            data.addColumn('number', 'Last year');
                            data.addColumn('number', 'Current year');
                            data.addColumn('number', 'Targets');
                            data.addRows(row);
                            var options = {
                                chartArea:{left:25,top:60,width:"84%"},
                                fontSize:10,
                                colors: ["#009ac3","#F00012", "#1222C0"],
                                hAxis: {title: "", titleTextStyle: {color: "red"}}
                            };
                            var chart = new google.visualization.ColumnChart(document.getElementById('chart_div2'));
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
