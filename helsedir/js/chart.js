google.load("visualization", "1", { packages: ["corechart"] });
google.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Måned', 'Somatikk', 'VOP', 'BUP', 'RUS', 'IPA'],
      ['mar 13', 44, 36, 45, 35, 22],
      ['apr 13', 52, 41, 52, 42, 24],
      ['mai 13', 50, 39, 55, 42, 26],
      ['jun 13', 48, 40, 50, 42, 28],
      ['jul 13', 39, 33, 47, 42, 30],
      ['aug 13', 61, 55, 68, 36, 32],
      ['sep 13', 65, 39, 64, 38, 34],
      ['okt 13', 49, 35, 35, 35, 32],
      ['nov 13', 49, 35, 36, 36, 30],
      ['des 13', 44, 35, 39, 37, 28],
      ['jan 14', 56, 48, 50, 48, 26],
      ['feb 14', 52, 34, 48, 34, 24],
      ['mar 14', 47, 38, 42, 38, 22]
    ]);

    var options = {
        vAxis: { minValue: 20, maxValue: 70, title: "Antall dager", ticks: [20, 30, 40, 50, 60, 70] },
        'chartArea': { 'width': '75%', 'height': '80%', 'left': '10%' },

        legend: {
            position: 'bottom',
            alignment: 'start'
        },
        colors: ['#004e66', '#0093a7', '#6cb4b5', "#df9922", '#a1bf37'],
        series: {
            0: { lineDashStyle: [14, 7] },
            1: { lineDashStyle: [5, 5] },
            4: { lineDashStyle: [7, 14] }
        }, lineWidth: 3
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}
$(window).resize(function () {
    drawChart();
});