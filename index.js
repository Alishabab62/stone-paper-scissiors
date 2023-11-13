
const startBtn = document.getElementById("startBtn");
const options = document.getElementById("your-options");
const modalContainer = document.getElementById("modal-container")
let computerChoice;
startBtn.addEventListener("click",() => {
    const computerOptions = [1,2,3];
    const randomIndex = Math.floor(Math.random() * computerOptions.length);
    computerChoice = computerOptions[randomIndex];
    options.style.display = "block";
});


let reloadBtn = document.createElement('button');

options.addEventListener("change",() => {
    const selectedIndexUser = options.selectedIndex;
    console.log(selectedIndexUser,computerChoice);
    options.style.display = "none";
    if(selectedIndexUser == 0){
        alert("Please select valid Choice");
        return;
    }
    if(selectedIndexUser == computerChoice){
        alert("Match Draw");
    }
    else if(selectedIndexUser == 1 && computerChoice == 2){
        alert("Computer Win");
    }
    else if(selectedIndexUser == 1 && computerChoice == 3){
        alert("You Win");
    }
    else if(selectedIndexUser == 2 && computerChoice == 1){
        alert("You Win");
    }
    else if(selectedIndexUser == 2 && computerChoice == 3){
        alert("Computer Win");
    }
    else if(selectedIndexUser == 3 && computerChoice == 1){
        alert("Computer Win");
    }
    else if(selectedIndexUser == 3 && computerChoice == 2){
        alert("You Win");
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
    location.reload();
})