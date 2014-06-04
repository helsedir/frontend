google.load("visualization", "1", { packages: ["corechart"] });
google.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Alder', 'Mann', 'Kvinne'],
        ['11-20 år', 24, 98],
        ['21-30 år', 52, 243],
        ['31-40 år', 23, 323],
        ['41-50 år', 18, 446],
    ]);

    var options = {
        vAxis: { title: "Antall pasienter" },
        title: '',
        'chartArea': { 'width': '70%', 'height': '70%' },
        colors: ['#6cb4b5', '#a1bf37', '#004e66', '#0093a7', "#df9922"],
        legend: {
            position: 'bottom',
            alignment: 'start'
        },
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}