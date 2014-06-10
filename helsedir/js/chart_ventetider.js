google.load("visualization", "1", { packages: ["corechart"] });
google.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Måned', 'Somatikk', 'Voksenpsykiatrisk Poliklinikk (VOP) ', 'Barne- og ungsomspsykiatrisk Poliklinikk (BUP)', 'RUS'],
        ['okt 13', 49, 35, 35, 35],
        ['nov 13', 49, 35, 36, 36],
        ['des 13', 44, 35, 39, 37],
        ['jan 14', 56, 48, 50, 48],
        ['feb 14', 52, 34, 48, 34],
        ['mar 14', 47, 38, 42, 38]
    ]);

    var options = {
        vAxis: {
            minValue: 20,
            maxValue: 70,
            title: "Antall dager",
            ticks: [20, 30, 40, 50, 60, 70]
        },
        'chartArea': { 'width': '75%', 'height': '80%', 'left': '10%' },
        legend: {
            position: 'none'
        },
        colors: ['#6cb4b5', '#a1bf37', '#004e66', '#0093a7', "#df9922"],
        lineWidth: 3,
        series: {
            0: { lineDashStyle: [14, 7] },
            1: { lineDashStyle: [5, 5] },
            4: { lineDashStyle: [7, 14] }
        }
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    drawLegend(data);
    chart.draw(data, options);
}

function drawLegend(data) {
    var colors = ['#6cb4b5', '#a1bf37', '#004e66', '#0093a7', "#df9922"];
    var legend = document.getElementById('chart_div_legend');
    var lis = [];

    var total = 0;
    for (var i = 1; i < data.getNumberOfColumns() ; i++) {
        var label = data.getColumnLabel(i, 0);
        lis[i] = document.createElement('li');
        lis[i].id = 'legend_' + data.getColumnLabel(i, 0);
        lis[i].innerHTML = '<div class="legendMarker" style="background-color:' + colors[i - 1] + ';"></div>' + label + '</span>';

        // append to the legend list
        legend.appendChild(lis[i]);
    }
}