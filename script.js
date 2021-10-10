const Cell = (x,y) =>{
    let state = null;
}
const gameBoard = (()=>{
    //generate game board
    const gridSize = 3;
    let gridArray = [];
    for (let x=0;x<gridSize;x++){
        let gridRow = [];
        for (let y=0;y<gridSize;y++){
            gridRow.push(Cell(x,y));
        }
        gridArray.push(gridRow);
    }

})();
