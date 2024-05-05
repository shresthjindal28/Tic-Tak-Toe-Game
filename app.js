const Game = () => {
            let boxes = document.querySelectorAll(".box");
            let restart = document.querySelector(".reset");
            let displayWin = document.querySelector(".display");
            let newGame = document.querySelector(".newGame");

            let markX= true;
            let GotWinner = false;

            const winPattern = [
                [0, 1, 2],
                [0, 3, 6],
                [0, 4, 8],
                [1, 4, 7],
                [2, 5, 8],
                [2, 4, 6],
                [3, 4, 5],
                [6, 7, 8]
            ];

            boxes.forEach((box) => {
                box.addEventListener("click", () => {
                    //console.log("hello")
                    if(markX){
                        box.innerText = "X";
                        markX = false;

                    }
                    else{
                        box.innerText = "O";
                        markX = true;

                    }
                    box.disabled = true;
                    win()
                })

            })

            const win = () => {
                for(let pattern of winPattern){
                    const pos1 = boxes[pattern[0]].innerText;
                    const pos2 = boxes[pattern[1]].innerText;
                    const pos3 = boxes[pattern[2]].innerText;


                    if(pos1 != "" && pos2 != "" && pos3 != ""){
                        if(pos1 === pos2 && pos2 === pos3){
                            //console.log("winner");
                            displayWin.innerText = "Winner : " + pos1;
                            afterWinner();
                        }
                    }
                }
            }

            const afterWinner = () => {
                for(box of boxes){
                    box.disabled = true;
                    GotWinner = true;
                }
            }

            const restartGame = () =>{
                restart.addEventListener("click", () => {
                    if(GotWinner)
                        {
                            console.log("hi")
                            markX= true;
                            displayWin.innerText = "";
                            for(box of boxes){
                                box.disabled = false;
                                box.innerText = "";
                            }
                        }

                })
            }
            restartGame();


            const newGameStart = () =>{
                newGame.addEventListener("click", () => {
                    console.log("hi")
                    markX= true;
                    displayWin.innerText = "";
                    for(box of boxes){
                        box.disabled = false;
                        box.innerText = "";
                    }
                })
            }
            newGameStart();
}


Game()