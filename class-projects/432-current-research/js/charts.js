// Load google charts
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(ChartOneName);
google.charts.setOnLoadCallback(ChartTwoName);

// Draw the chart and set the chart values
function ChartOneName() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Number of Games'],
        ['Work', 8],
        ['Eat', 2],
        ['TV', 4],
        ['Gym', 2],
        ['Sleep', 8]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { 'title': 'My Average Day', 'width': 550, 'height': 400 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.BarChart(document.getElementById('ChartOneName'));
    chart.draw(data, options);
}

function ChartTwoName() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Testing'],
        ['Work', 8],
        ['Eat', 2],
        ['TV', 4],
        ['Gym', 2],
        ['Sleep', 8]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { 'title': 'My Average Day', 'width': 550, 'height': 400 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.BarChart(document.getElementById('ChartTwoName'));
    chart.draw(data, options);
}