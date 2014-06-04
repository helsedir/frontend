google.load("visualization", "1", { packages: ["corechart"] });
google.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['År', 'Skolevegring', 'Skolefravær'],
        ['2012', 1000, 400],
        ['2013', 1170, 460],
    ]);

    var options = {
        title: '',
        'chartArea': { 'width': '70%', 'height': '70%' },
        colors: ['#6cb4b5', '#a1bf37', '#004e66', '#0093a7', "#df9922"],

        legend: {
            position: 'bottom',
            alignment: 'start'
        },
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('module_chart_column'));
    chart.draw(data, options);
    $(window).resize(function () {
        drawChart();
    });
}