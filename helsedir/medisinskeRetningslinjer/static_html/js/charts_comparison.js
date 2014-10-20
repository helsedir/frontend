google.load("visualization", "1", { packages: ["corechart"] });
google.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['By', { label: 'Antall', type: 'number' }, {role: 'style'}],
      ['Trondheim', 90983, '#cccccc'],
      ['Oslo', 128893, '#999999']
    ]);

    //var view = new google.visualization.DataView(data);
    //view.setColumns([
    //    0, 1, {
    //        calc: 'stringify',
    //        sourceColumn: 1,
    //        type: 'string',
    //        role: 'annotation'
    //    }, 2
    //]);

    var options = {
        
        fontSize: 40,
        bar: {
            groupWidth: '50%'
        },
        axisTitlesPosition: 'none',
        vAxis: {
            minValue: 0,
            gridlines: { color: 'transparent' },
            baselineColor: 'transparent',
            //textPosition: 'none',
            textStyle: { fontSize: 20 }
        },
        hAxis: {
            textStyle: { fontSize: 20 }
        },
        legend: {
            position: 'none'
        },
        tooltip: {
            textStyle: {fontSize: 20}
        }
    };
    
    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

$(window).resize(function () {
    drawChart();
});