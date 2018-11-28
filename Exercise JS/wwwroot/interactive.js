function addRow() {
    table = document.getElementById("_table");
    var row = table.insertRow(0);
    var c1 = row.insertCell(0);

    c1.innerHTML = "Hewwo ^_^";
}

function deleteRow() {
    table = document.getElementById("_table");
    table.deleteRow(table.rows.length-1);
}

function changeHeading() {
    var newText = prompt("Please enter a new heading: ", "....");
    heading = document.getElementById("_heading");
    heading.innerHTML = newText;
}

function hideList() {
    list = document.getElementById("_list");
    if (list.style.display === "block") {
        list.style.display = "none";
    }
    else {
        list.style.display = "block";
    }
}