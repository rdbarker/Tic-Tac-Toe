const game = ((doc)=>{   
    const Cell = (pos) =>{
        const onClick = () =>{
            console.log(pos);
        }
        let state = null;
        //initial render
        const domElement = doc.createElement("div");
        domElement.classList = "square";
        docGameBoard.appendChild(domElement);
        domElement.addEventListener("click",onClick);
        
        return {state};
    } 
    const generateGrid = (gridSize) =>{
    //generate game board
    let gridArray = [];
    for (let x=0;x<gridSize**2;x++){
        gridArray.push(Cell(x));
    }
    return gridArray;
    }
    const checkWinner = () =>{
        const checkArray = [
            [0,1,2],
            [0,3,6],
            [0,4,8],
            [6,4,2],
            [2,5,8],
            [6,7,8]
        ]
        checkArray.forEach(checkPositions => {
            const checkSum = checkPositions[0]+checkPositions[1]+checkPositions[2];
            if (checkSum==="xxx"||checkSum==="yyy"){
                console.log("Winner");
                break;
            }
        });
    }
    const docGameBoard = doc.querySelector(".game-board");
    const grid = generateGrid(3);
})(document);

