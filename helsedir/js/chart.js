google.load("visualization", "1", { packages: ["corechart"] });
google.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Måned', 'Somatikk', 'VOP', 'BUP', 'RUS'],
      ['okt', 49, 35, 35, 35],
      ['nov', 49, 35, 36, 36],
      ['des', 44, 35, 39, 37],
      ['jan', 56, 48, 50, 48],
      ['feb', 52, 34, 48, 34],
      ['mar', 47, 38, 42, 38]
    ]);

    var options = {
        vAxis: { minValue: 0, maxValue: 60, title: "Antall dager", ticks: [0, 10, 20, 30, 40, 50, 60] },
        'chartArea': { 'width': '75%', 'height': '80%', 'left': '5%' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}
$(window).resize(function () {
    drawChart();
});