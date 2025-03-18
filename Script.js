let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;//playerX,playerO

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame =() => {
    let turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");

}


const disableBoxes =()=>{
    for(box of boxes){
        box.disabled=true;
    }
}

const enableBoxes =()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


boxes.forEach((box) => { 
    box.addEventListener('click',() => 
    {
       
        if (turnO)
        {
            box.innerText ="O";
            turnO=false;
        }
        else
        {
            box.innerText ="X";
            turnO=true;
        }
        box.disabled = true;

        chechWinner();
    });
});


const showWinner=(winner) => {
    msg.innerText=`Congratulations, Winner is " Player ${winner} " `;
    msgContainer.classList.remove("hide");
    disableBoxes();


}
const chechWinner = () => {
    for(let pattern of winPatterns)
    {
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!="" &&  pos2Val!="" &&  pos3Val !="")
        {
            if(pos1Val === pos2Val && pos2Val === pos3Val)
            {
                showWinner(pos1Val);
            }
        }
    }
}


newGameBtn.addEventListener('click',resetGame);
resetButton.addEventListener('click',resetGame);

/* Write code for a Draw match - No winner Kindly start a new game or reset*/
/* Write code to show diff colors of X and O */
/* Leetcode - find winner on a tic tac toe game*/