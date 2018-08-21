var restartBtn = document.querySelector("#button1"); //# used to select element by id

var t = document.getElementById("table1"); // This has to be the ID of your table, not the tag
const cells = document.querySelectorAll(".table-cell");
/* var d = t.getElementsByTagName("tr")[1],
    r = d.getElementsByTagName("td")[1]; */

restartBtn.addEventListener("click", function() {
    /*for (var i = 0; i < 3; i++) {   //One way to clear all cells
        for (var j = 0; j < 3; j++) {
            t.getElementsByTagName("tr")[i].getElementsByTagName("td")[j].textContent = "";
        }
    } */
    cells.forEach(function(cell) { //Second way to clear all cells, forEach must be used to delete from all elements in selected class
        cell.textContent = "";
    });
});

function checkWinner() {
    if (document.querySelector("#t00").textContent == "x" && document.querySelector("#t11").textContent == "x" && document.querySelector("#t22").textContent == "x") {
        alert("We have a winner!...game is restarting");
        cells.forEach(function(cell) {
            cell.textContent = "";
        });

    } else if (document.querySelector("#t02").textContent == "x" && document.querySelector("#t11").textContent == "x" && document.querySelector("#t20").textContent == "x") {
        alert("We have a winner!...game is restarting");
        cells.forEach(function(cell) {
            cell.textContent = "";
        });
    } else if (document.querySelector("#t00").textContent == "0" && document.querySelector("#t11").textContent == "0" && document.querySelector("#t22").textContent == "0") {
        alert("We have a winner!...game is restarting");
        cells.forEach(function(cell) {
            cell.textContent = "";
        });
    } else if (document.querySelector("#t02").textContent == "0" && document.querySelector("#t11").textContent == "0" && document.querySelector("#t20").textContent == "0") {
        alert("We have a winner!...game is restarting");
        cells.forEach(function(cell) {
            cell.textContent = "";
        });
    } else if (document.querySelector("#t00").textContent == "x" && document.querySelector("#t01").textContent == "x" && document.querySelector("#t02").textContent == "x") {
        alert("We have a winner!...game is restarting");
        cells.forEach(function(cell) {
            cell.textContent = "";
        });
    } else if (document.querySelector("#t00").textContent == "0" && document.querySelector("#t01").textContent == "0" && document.querySelector("#t02").textContent == "0") {
        alert("We have a winner!...game is restarting");
        cells.forEach(function(cell) {
            cell.textContent = "";
        });
    } else if (document.querySelector("#t10").textContent == "x" && document.querySelector("#t11").textContent == "x" && document.querySelector("#t12").textContent == "x") {
        alert("We have a winner!...game is restarting");
        cells.forEach(function(cell) {
            cell.textContent = "";
        });
    } else if (document.querySelector("#t10").textContent == "0" && document.querySelector("#t11").textContent == "0" && document.querySelector("#t12").textContent == "0") {
        alert("We have a winner!...game is restarting");
        cells.forEach(function(cell) {
            cell.textContent = "";
        });
    } else if (document.querySelector("#t20").textContent == "x" && document.querySelector("#t21").textContent == "x" && document.querySelector("#t22").textContent == "x") {
        alert("We have a winner!...game is restarting");
        cells.forEach(function(cell) {
            cell.textContent = "";
        });
    } else if (document.querySelector("#t20").textContent == "0" && document.querySelector("#t21").textContent == "0" && document.querySelector("#t22").textContent == "0") {
        alert("We have a winner!...game is restarting");
        cells.forEach(function(cell) {
            cell.textContent = "";
        });
    } else if (document.querySelector("#t00").textContent == "x" && document.querySelector("#t10").textContent == "x" && document.querySelector("#t20").textContent == "x") {
        alert("We have a winner!...game is restarting");
        cells.forEach(function(cell) {
            cell.textContent = "";
        });
    } else if (document.querySelector("#t00").textContent == "0" && document.querySelector("#t10").textContent == "0" && document.querySelector("#t20").textContent == "0") {
        alert("We have a winner!...game is restarting");
        cells.forEach(function(cell) {
            cell.textContent = "";
        });
    } else if (document.querySelector("#t01").textContent == "x" && document.querySelector("#t11").textContent == "x" && document.querySelector("#t21").textContent == "x") {
        alert("We have a winner!...game is restarting");
        cells.forEach(function(cell) {
            cell.textContent = "";
        });
    } else if (document.querySelector("#t01").textContent == "0" && document.querySelector("#t11").textContent == "0" && document.querySelector("#t21").textContent == "0") {
        alert("We have a winner!...game is restarting");
        cells.forEach(function(cell) {
            cell.textContent = "";
        });
    } else if (document.querySelector("#t02").textContent == "x" && document.querySelector("#t12").textContent == "x" && document.querySelector("#t22").textContent == "x") {
        alert("We have a winner!...game is restarting");
        cells.forEach(function(cell) {
            cell.textContent = "";
        });
    } else if (document.querySelector("#t02").textContent == "0" && document.querySelector("#t12").textContent == "0" && document.querySelector("#t22").textContent == "0") {
        alert("We have a winner!...game is restarting");
        cells.forEach(function(cell) {
            cell.textContent = "";
        });
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.querySelector("#t00").addEventListener("click", function() { //First method to change something onclick

    document.querySelector("#t00").textContent = "x";
    checkWinner();

});

document.querySelector("#t00").addEventListener("dblclick", function() {

    document.querySelector("#t00").textContent = "0";
    checkWinner();

});

$("#t01").click(function() { //this is JQuery Equivalent of First method

    $(this).text("x");
    checkWinner();
    console.log("JQuery works!!!")
});

$("#t01").dblclick(function() { //this is JQuery Equivalent of First method

    $(this).text("0");
    checkWinner();
    console.log("JQuery works!!!")
});

document.querySelector("#t02").addEventListener("click", function() {

    document.querySelector("#t02").textContent = "x";
    checkWinner();

});

document.querySelector("#t02").addEventListener("dblclick", function() {

    document.querySelector("#t02").textContent = "0";
    checkWinner();

});

//////////////////////////////////////////////////////////////////////////////////////////////////////
t.getElementsByTagName("tr")[1].getElementsByTagName("td")[0].addEventListener("click", function() { //Second method to change something onclick

    t.getElementsByTagName("tr")[1].getElementsByTagName("td")[0].textContent = "x";
    checkWinner();

});

t.getElementsByTagName("tr")[1].getElementsByTagName("td")[0].addEventListener("dblclick", function() {

    t.getElementsByTagName("tr")[1].getElementsByTagName("td")[0].textContent = "0";
    checkWinner();

});

t.getElementsByTagName("tr")[1].getElementsByTagName("td")[1].addEventListener("click", function() {

    t.getElementsByTagName("tr")[1].getElementsByTagName("td")[1].textContent = "x";
    checkWinner();

});

t.getElementsByTagName("tr")[1].getElementsByTagName("td")[1].addEventListener("dblclick", function() {

    t.getElementsByTagName("tr")[1].getElementsByTagName("td")[1].textContent = "0";
    checkWinner();

});

t.getElementsByTagName("tr")[1].getElementsByTagName("td")[2].addEventListener("click", function() {

    t.getElementsByTagName("tr")[1].getElementsByTagName("td")[2].textContent = "x";
    checkWinner();

});

t.getElementsByTagName("tr")[1].getElementsByTagName("td")[2].addEventListener("dblclick", function() {

    t.getElementsByTagName("tr")[1].getElementsByTagName("td")[2].textContent = "0";
    checkWinner();

});

//////////////////////////////////////////////////////////////////////////////////////////////////////
document.querySelector("#t20").addEventListener("click", function() {

    document.querySelector("#t20").textContent = "x";
    checkWinner();

});

document.querySelector("#t20").addEventListener("dblclick", function() {

    document.querySelector("#t20").textContent = "0";
    checkWinner();

});

document.querySelector("#t21").addEventListener("click", function() {

    document.querySelector("#t21").textContent = "x";
    checkWinner();

});

document.querySelector("#t21").addEventListener("dblclick", function() {

    document.querySelector("#t21").textContent = "0";
    checkWinner();

});

document.querySelector("#t22").addEventListener("click", function() {

    document.querySelector("#t22").textContent = "x";
    checkWinner();

});

document.querySelector("#t22").addEventListener("dblclick", function() {

    document.querySelector("#t22").textContent = "0";
    checkWinner();

});

////////////////////////////////////////////////////////////////////////////////////////////////////////