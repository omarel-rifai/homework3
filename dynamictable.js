// Copyright (c) by Omar El-Rifai

document.getElementById('tableForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Each gets the values for the min and max columns and rows
    var minCol = parseInt(document.getElementById('minColumn').value);
    var maxCol = parseInt(document.getElementById('maxColumn').value);
    var minRow = parseInt(document.getElementById('minRow').value);
    var maxRow = parseInt(document.getElementById('maxRow').value);

    var errorDiv = document.getElementById('errorMessage');
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.id = 'errorMessage';
        errorDiv.style.color = 'red';
        document.getElementById('tableForm').appendChild(errorDiv);
    }

    var container = document.getElementById('tableContainer');
    errorDiv.textContent = "";
    container.innerHTML = "";

    if (minCol > maxCol || minRow > maxRow) { // Checks if min is greater than the max
        errorDiv.textContent = "Error: Min has to be less than Max";
        return;
    }
    // Generates and display the right mutliplication table
    var table = generateTable(minCol, maxCol, minRow, maxRow);
    container.appendChild(table);
});

function generateTable(minCol, maxCol, minRow, maxRow) {
    var table = document.createElement('table');
    table.style.borderCollapse = 'collapse';

    var thead = table.createTHead();
    var headerRow = thead.insertRow();
    var emptyTh = document.createElement('th');
    headerRow.appendChild(emptyTh);

    for (var col = minCol; col <= maxCol; col++) {
        var th = document.createElement('th');
        th.textContent = col;
        th.style.border = '1px solid black';
        th.style.padding = '5px';
        headerRow.appendChild(th);
    }

    // This created body of the table
    for (var row = minRow; row <= maxRow; row++) {
        var tr = table.insertRow();
        var rowHeader = document.createElement('th');
        rowHeader.textContent = row;
        rowHeader.style.border = '1px solid black';
        rowHeader.style.padding = '5px';
        tr.appendChild(rowHeader);

        for (var col = minCol; col <= maxCol; col++) {
            var td = tr.insertCell();
            td.textContent = row * col;
            td.style.border = '1px solid black';
            td.style.padding = '5px';
        }
    }

    return table;
}


// Sources used: https://www.youtube.com/watch?v=zIpA8k167gU 