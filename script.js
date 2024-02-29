console.log("welcome to my playground")

let bgMusic = new Audio ("/assets/music.mp3")
let audioTurn = new Audio ("/assets/ting.mp3")
let gameOver = new Audio ("/assets/gameover.mp3")

let isGameOver = false; 

let turn = "X"

// function to change the turn x to 0 and 0 to x
const changeTurn = () =>{
    return turn === "X"?"0":"X"
}

// function to check who won
const checkWin = () =>{
    let boxTexts = document.getElementsByClassName("boxtext");
    let wins = [
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,45],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],

    ]
    wins.forEach(e =>{
        if((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[2]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxTexts[e[0]].innerText + " WON"
            isGameOver = true
            document.querySelector(".imgBox").getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.width = "20vw"
            document.querySelector(".line").style.transform = `translate(${e[3]}vw , ${e[4]}vw) rotate(${e[5]}deg)`
            
        }
        
    })
    

}

//game logic
// bgMusic.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector(".boxtext")
    element.addEventListener('click' , () =>{
        if(boxText.innerText === ""){
            boxText.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isGameOver){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;

            }
        }
    })
})

reset.addEventListener('click', () =>{
    let boxTexts = document.querySelectorAll ('.boxtext');
    Array.from(boxTexts).forEach(element =>{
        element.innerText = ""
    });
    turn = "X";
    isGameOver = false;
    document.querySelector(".line").style.width = "0vw"
    document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px"
})
