const Game = () => {
            let boxes = document.querySelectorAll(".box");
            let restart = document.querySelector(".reset");
            let displayWin = document.querySelector(".display");
            let newGame = document.querySelector(".newGame");

            let markX= true;
            let GotWinner = false;

            let numberofDIsabledBox = 0;

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
                    numberofDIsabledBox = numberofDIsabledBox + 1;
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
                            GotWinner = true;
                            boxes[pattern[0]].style.background = "green";
                            boxes[pattern[1]].style.background = "green";
                            boxes[pattern[2]].style.background = "green";
                            afterWinner();
                            break;
                        }
                    }
                }
                if(!GotWinner && numberofDIsabledBox === 9) {
                        console.log("DRAW...")
                        displayWin.innerText = "Draw X - O ";
                    }
            }

            const afterWinner = () => {
                for(box of boxes){
                    box.disabled = true;
                }
            }

            const restartGame = () =>{
                restart.addEventListener("click", () => {
                    if(GotWinner)
                        {
                            console.log("hi")
                         resetEverything();
                        }

                })
            }
            restartGame();

            const resetEverything = () => {
                markX= true;
                GotWinner = false;
                numberofDIsabledBox = 0;
                displayWin.innerText = "";
                for(let pattern of winPattern){
                    boxes[pattern[0]].style.background = "transparent";
                    boxes[pattern[1]].style.background = "transparent";
                    boxes[pattern[2]].style.background = "transparent";
                }
                for(box of boxes){
                    box.disabled = false;
                    box.innerText = "";
                }
            }


            const newGameStart = () =>{
                newGame.addEventListener("click", () => {
                    //console.log("hi")
                   resetEverything();
                })
            }
            newGameStart();
}


Game()
