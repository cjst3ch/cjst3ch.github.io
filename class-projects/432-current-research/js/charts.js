// Load google charts
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(CategoryOfGame);
google.charts.setOnLoadCallback(Age);
google.charts.setOnLoadCallback(Audience);
google.charts.setOnLoadCallback(Purpose);
google.charts.setOnLoadCallback(Multiplayer);
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
        ['Target Age', 'Number of games'],
        ['Child', 11],
        ['Adult', 2],
        ['Elder', 4]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { 'title': 'Target Age', 'width': 550, 'height': 400 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.BarChart(document.getElementById('Age'));
    chart.draw(data, options);
}

function Audience() {
    var data = google.visualization.arrayToDataTable([
        ['Target Disability', 'Number of Games'],
        ['Schizophrenia', 1],
        ['Autism', 9],
        ['ADHD', 2],
        ['MCI/Dementia/Alzheimer', 4],
        ['PTSD', 1]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { 'title': 'Target Audience', 'width': 550, 'height': 400 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.BarChart(document.getElementById('Audience'));
    chart.draw(data, options);
}

function Purpose() {
    var data = google.visualization.arrayToDataTable([
        ['Game Purposes', 'Number of Games'],
        ['Health', 7],
        ['Education', 1],
        ['Training', 9]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { 'title': 'Game Purposes', 'width': 550, 'height': 400 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.BarChart(document.getElementById('Purpose'));
    chart.draw(data, options);
}

function Multiplayer() {
    var data = google.visualization.arrayToDataTable([
        ['Multiplayer', 'Number of Games'],
        ['No', 13],
        ['Coop', 4],
        ['Comp', 0]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { 'title': 'Multiplayer', 'width': 550, 'height': 400 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.BarChart(document.getElementById('Multiplayer'));
    chart.draw(data, options);
}

function Platform() {
    var data = google.visualization.arrayToDataTable([
        ['Platform', 'Number of Games'],
        ['Mobile', 6],
        ['PC', 8],
        ['AR', 1],
        ['VR', 2]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { 'title': 'Platforms', 'width': 550, 'height': 400 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.BarChart(document.getElementById('Platform'));
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