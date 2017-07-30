console.log('js loaded');
var row, cell, numRows = 8;
var e = document.getElementById("board");

console.log(e);

createDivs();
//button functionality
document.getElementById('kingButton').addEventListener('click', kingMoves);


function createDivs() {
    var h;
    for (var i = 0; i < 8; i++) {
        row = document.createElement('div');
        row.className = 'row';
        for (var j = 0; j < 8; j++) {
            h = j + i % 2;
            cell = document.createElement('div');
            cell.className = 'cell';
            cell.id = String.fromCharCode(i+65) + j.toString(10);
            //  cellSelector = '#board:nth-child(' + h + ') ';
            // cellSelector += 'div:nth-child(' + i + ')';
            // console.log(cellSelector);
            // cell = document.getElementsByClassName(cellSelector); 
            console.log(cell);
            if (h % 2  === 0) {
                cell.classList.add('black');
                console.log(cell);
            } else {
                cell.classList.add('white');
            }
            //cell.innerText = 2;
            row.appendChild(cell);
            
        }
        console.log(row);
        //document.Body.appendChild(row) doesn't work: cannot read property of null
        e.appendChild(row);
    }
}

function kingMoves() {
    console.log('king button clicked');
    var piece = document.createElement('span');
    piece.className = 'glyphicon glyphicon-king piece';
    document.getElementById('D4').appendChild(piece);
    var moves = [''];
}