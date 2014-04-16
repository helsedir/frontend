google.load("visualization", "1", { packages: ["corechart"] });
google.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['År', 'Pasienter', 'Pasienter forrige år'],
      ['2004', 1000, 400],
      ['2005', 1170, 460],
      ['2006', 660, 1120],
      ['2007', 1030, 540]
    ]);

    var options = {
        title: 'Pasienter',
        hAxis: { title: 'År', titleTextStyle: { color: 'red' } }
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

$(window).resize(function () {
    drawChart();
});