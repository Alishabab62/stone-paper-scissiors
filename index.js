
const startBtn = document.getElementById("startBtn");
const options = document.getElementById("your-options");
const modalContainer = document.getElementById("modal-container")
const roundContainer = document.getElementById('round-container');
let computerRound = 0;
let userWin = 0;

const comRoundOutput = document.createElement("h3");
const userRoundOutput = document.createElement("h3");
comRoundOutput.innerHTML = `Computer win: ${computerRound}`;
userRoundOutput.innerHTML = `User win: ${userWin}`;
roundContainer.appendChild(comRoundOutput);
roundContainer.appendChild(userRoundOutput);



let computerChoice;
startBtn.addEventListener("click",() => {
    const computerOptions = [1,2,3];
    const randomIndex = Math.floor(Math.random() * computerOptions.length);
    computerChoice = computerOptions[randomIndex];
    options.style.display = "block";
});


let reloadBtn = document.createElement('button');
let output3 = document.createElement('h3');

options.addEventListener("change",() => {
    const selectedIndexUser = options.selectedIndex;
    options.style.display = "none";
    if(selectedIndexUser == 0){
        alert("Please select valid Choice");
        return;
    }
    if(selectedIndexUser == computerChoice){
        modalContainer.innerHTML = ""
        output3.innerHTML = "Match Draw";
        modalContainer.appendChild(output3);
        
    }
    else if(selectedIndexUser == 1 && computerChoice == 2){
        modalContainer.innerHTML = ""
        output3.innerHTML = "Computer Win";
        modalContainer.appendChild(output3);
        computerRound++;
        roundContainer.innerHTML = "";
        comRoundOutput.innerHTML = `Computer win: ${computerRound}`;
        userRoundOutput.innerHTML = `User win: ${userWin}`;
        roundContainer.appendChild(comRoundOutput);
        roundContainer.appendChild(userRoundOutput);

    }
    else if(selectedIndexUser == 1 && computerChoice == 3){
        modalContainer.innerHTML = ""
        output3.innerHTML = "You Win";
        modalContainer.appendChild(output3);
        userWin++;
        roundContainer.innerHTML = ""
        comRoundOutput.innerHTML = `Computer win: ${computerRound}`;
        userRoundOutput.innerHTML = `User win: ${userWin}`;
        roundContainer.appendChild(comRoundOutput);
        roundContainer.appendChild(userRoundOutput);

    }
    else if(selectedIndexUser == 2 && computerChoice == 1){
        modalContainer.innerHTML = ""
        output3.innerHTML = "You Win";
        modalContainer.appendChild(output3);
        userWin++;
        roundContainer.innerHTML = ""
        comRoundOutput.innerHTML = `Computer win: ${computerRound}`;
        userRoundOutput.innerHTML = `User win: ${userWin}`;
        roundContainer.appendChild(comRoundOutput);
        roundContainer.appendChild(userRoundOutput);
        
    }
    else if(selectedIndexUser == 2 && computerChoice == 3){
        modalContainer.innerHTML = ""
        output3.innerHTML = "Computer Win";
        modalContainer.appendChild(output3);
        computerRound++;
        roundContainer.innerHTML = ""
        comRoundOutput.innerHTML = `Computer win: ${computerRound}`;
        userRoundOutput.innerHTML = `User win: ${userWin}`;
        roundContainer.appendChild(comRoundOutput);
        roundContainer.appendChild(userRoundOutput);
        
    }
    else if(selectedIndexUser == 3 && computerChoice == 1){
        modalContainer.innerHTML = ""
        output3.innerHTML = "Computer Win";
        modalContainer.appendChild(output3);
        computerRound++;
        roundContainer.innerHTML = ""
        comRoundOutput.innerHTML = `Computer win: ${computerRound}`;
        userRoundOutput.innerHTML = `User win: ${userWin}`;
        roundContainer.appendChild(comRoundOutput);
        roundContainer.appendChild(userRoundOutput);
        
    }
    else if(selectedIndexUser == 3 && computerChoice == 2){
        modalContainer.innerHTML = ""
        output3.innerHTML = "You Win";
        modalContainer.appendChild(output3);
        userWin++;
        roundContainer.innerHTML = ""
        comRoundOutput.innerHTML = `Computer win: ${computerRound}`;
        userRoundOutput.innerHTML = `User win: ${userWin}`;
        roundContainer.appendChild(comRoundOutput);
        roundContainer.appendChild(userRoundOutput);
        
    }


    modalContainer.style.display = "block";
    const output1 = document.createElement('h3');
    const output2 = document.createElement('h3');
    output1.id = 'output1';
    output2.id = 'output2';
    output1.innerHTML = `Your Choice: ${options[selectedIndexUser].innerHTML}`;
    output2.innerHTML = `Computer Choice: ${options[computerChoice].innerHTML}`;
    reloadBtn.innerHTML = "Play Again";
    reloadBtn.classList = 'reloadBtn';
    modalContainer.appendChild(output1);
    modalContainer.appendChild(output2);
    modalContainer.appendChild(reloadBtn);
});


reloadBtn.addEventListener('click', () =>{
    modalContainer.style.display = "none";
});

