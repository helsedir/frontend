google.load("visualization", "1", { packages: ["corechart"] });
google.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Måned', 'Somatikk', 'VOP', 'BUP', 'RUS'],
      ['mar', 44, 36, 45, 35],
      ['apr', 52, 41, 52, 42],
      ['mai', 50, 39, 55, 42],
      ['jun', 48, 40, 50, 42],
      ['jul', 39, 33, 47, 42],
      ['aug', 61, 55, 68, 36],
      ['sep', 65, 39, 64, 38],
      ['okt', 49, 35, 35, 35],
      ['nov', 49, 35, 36, 36],
      ['des', 44, 35, 39, 37],
      ['jan', 56, 48, 50, 48],
      ['feb', 52, 34, 48, 34],
      ['mar', 47, 38, 42, 38]
    ]);

    var options = {
        title: 'Utvikling i median ventetid i antall dager, pr sektor 2013 og 2014',
        vAxis: { minValue: 0, maxValue: 80 }
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}