const game = ((doc) => {
    const Cell = () => {
        const onClick = () => {
            if (!state){
                state = turn;
                flipTurn();
                renderState();
                checkWinner();
            }

        }
        const getState = () => state;
        const renderState = () => {
            if (state) domElement.textContent = state.toUpperCase();
            else domElement.textContent = "";
        }
        //initial render
        let state = null;
        const domElement = doc.createElement("div");
        domElement.classList = "square";
        gameBoard.appendChild(domElement);
        domElement.addEventListener("click", onClick);
        return { getState };
    }
    const generateGrid = (gridSize) => {
        //generate game board
        let gridArray = [];
        for (let x = 0; x < gridSize ** 2; x++) {
            gridArray.push(Cell());
        }
        return gridArray;
    }
    const checkWinner = () => {
        const checkArray = [
            [0, 1, 2],
            [0, 3, 6],
            [0, 4, 8],
            [6, 4, 2],
            [2, 5, 8],
            [6, 7, 8]
        ]
        checkArray.forEach(checkPositions => {
            const checkSum = grid[checkPositions[0]].getState()
                + grid[checkPositions[1]].getState()
                + grid[checkPositions[2]].getState();
            if (checkSum === "xxx" || checkSum === "yyy") {
                console.log("Winner");
            }
        });
    }
    const flipTurn = () =>{
        if (turn==="x"){
            turn = "o";
        }
        else if (turn==="o"){
            turn = "x";
        };
    }
    const gameBoard = doc.querySelector(".game-board");
    const grid = generateGrid(3);
    let turn = "x";
    return {grid,turn};
})(document);

