const gameBoard = ((doc)=>{   
    const Cell = (x,y) =>{
    let state = null;
    //initial render
    const domElement = doc.createElement("div");
    domElement.classList = "square";
    docGameBoard.appendChild(domElement);
    return {state};
    } 

    const docGameBoard = doc.querySelector(".game-board");
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
    
    

})(document);

