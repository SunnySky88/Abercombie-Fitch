$(document).ready(function () {
/*var showData = $('#show-data');
$.getJSON('data.json', function drawTable(data) {
     for (var i = 0; i < data.length; i++) {
        drawRow(data[i]);
}
});
function drawRow(rowData) {
    var row = $("<tr />")
    $("#show-data").append(row); 
    row.append($("<td>" + rowData.id + "</td>"));
    row.append($("<td>" + rowData.firstName + "</td>"));
    row.append($("<td>" + rowData.lastName + "</td>"));
};
});*/

$.ajax({
    type: "post",
    dataType: "json",
    data: {
        json: JSON.stringify([
            {
            name:" " ,
            date:" ",
            assigned: " "
        }
        ]),
    },
    success: function(data, textStatus, jqXHR) {
        // since we are using jQuery, you don't need to parse response
        drawTable(data);
    }
});

function drawTable(data) {
    for (var i = 0; i < data.length; i++) {
        drawRow(data[i]);
    }
}

function drawRow(rowData) {
    var row = $("<tr />")
    $("#show-data").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
    row.append($("<td>" + rowData.name+ "</td>"));
    row.append($("<td>" + rowData.date + "</td>"));
    row.append($("<td>" + rowData.assigned + "</td>"));
}
});