// Load google charts
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(CategoryOfGame);
google.charts.setOnLoadCallback(Age);
google.charts.setOnLoadCallback(ChartThreeName);
google.charts.setOnLoadCallback(ChartFourName);
google.charts.setOnLoadCallback(ChartFiveName);
google.charts.setOnLoadCallback(ChartSixName);
google.charts.setOnLoadCallback(ChartSevenName);
google.charts.setOnLoadCallback(ChartEightName);
google.charts.setOnLoadCallback(ChartNineName);
google.charts.setOnLoadCallback(ChartTenName);
google.charts.setOnLoadCallback(ChartElevenName);
google.charts.setOnLoadCallback(ChartTwelveName);
google.charts.setOnLoadCallback(ChartThirteenName);
google.charts.setOnLoadCallback(ChartFourteenName);
google.charts.setOnLoadCallback(ChartFifteenName);
google.charts.setOnLoadCallback(ChartSixteenName);
google.charts.setOnLoadCallback(ChartSeventeenName);

// Draw the chart and set the chart values
function CategoryOfGame() {
    var data = google.visualization.arrayToDataTable([
        ['Category', 'Number of Games'],
        ['Puzzle', 11],
        ['Shooter', 1],
        ['Adventure', 3],
        ['Racing', 3]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { 'title': 'Category of the Games (Overlap)', 'width': 550, 'height': 400 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.BarChart(document.getElementById('CategoryOfGame'));
    chart.draw(data, options);
}

function Age() {
    var data = google.visualization.arrayToDataTable([
        ['Target Audience', 'Number of games'],
        ['Child', 11],
        ['Adult', 2],
        ['Elder', 4]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { 'title': 'Target Audience', 'width': 550, 'height': 400 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.BarChart(document.getElementById('Age'));
    chart.draw(data, options);
}

function ChartThreeName() {
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
    var chart = new google.visualization.BarChart(document.getElementById('ChartSevenName'));
    chart.draw(data, options);
}

function ChartFourName() {
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
    var chart = new google.visualization.BarChart(document.getElementById('ChartFourName'));
    chart.draw(data, options);
}

function ChartFiveName() {
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
    var chart = new google.visualization.BarChart(document.getElementById('ChartFiveName'));
    chart.draw(data, options);
}

function ChartSixName() {
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
    var chart = new google.visualization.BarChart(document.getElementById('ChartSixName'));
    chart.draw(data, options);
}

function ChartSevenName() {
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
    var chart = new google.visualization.BarChart(document.getElementById('ChartSevenName'));
    chart.draw(data, options);
}

function ChartEightName() {
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
    var chart = new google.visualization.BarChart(document.getElementById('ChartEightName'));
    chart.draw(data, options);
}

function ChartNineName() {
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
    var chart = new google.visualization.BarChart(document.getElementById('ChartNineName'));
    chart.draw(data, options);
}

function ChartTenName() {
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
    var chart = new google.visualization.BarChart(document.getElementById('ChartTenName'));
    chart.draw(data, options);
}

function ChartElevenName() {
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
    var chart = new google.visualization.BarChart(document.getElementById('ChartElevenName'));
    chart.draw(data, options);
}

function ChartTwelveName() {
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
    var chart = new google.visualization.BarChart(document.getElementById('ChartTwelveName'));
    chart.draw(data, options);
}

function ChartThirteenName() {
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
    var chart = new google.visualization.BarChart(document.getElementById('ChartThirteenName'));
    chart.draw(data, options);
}

function ChartFourteenName() {
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
    var chart = new google.visualization.BarChart(document.getElementById('ChartFourteenName'));
    chart.draw(data, options);
}

function ChartFifteenName() {
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
    var chart = new google.visualization.BarChart(document.getElementById('ChartFifteenName'));
    chart.draw(data, options);
}

function ChartSixteenName() {
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
    var chart = new google.visualization.BarChart(document.getElementById('ChartSixteenName'));
    chart.draw(data, options);
}

function ChartSeventeenName() {
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
    var chart = new google.visualization.BarChart(document.getElementById('ChartSeventeenName'));
    chart.draw(data, options);
}