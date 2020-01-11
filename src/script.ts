const statusDisplay: Element = document.querySelector('.game--status')!;

enum PlayerSigns {
    X = "X",
    O = "O"
}

let gameActive: boolean = true;
let currentPlayer: PlayerSigns = PlayerSigns.X;
let gameState: string[] = ["", "", "", "", "", "", "", "", ""];

const winningMessage: () => string = () => `Player ${currentPlayer} has won!`;
const drawMessage: () => string = () => `Game ended in a draw!`;
const currentPlayerTurn: () => string = () => `It's ${currentPlayer}'s turn`;

statusDisplay.innerHTML = currentPlayerTurn();

const winningConditions: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellPlayed(clickedCell: Element, clickedCellIndex: number): void {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

function handlePlayerChange(): void {
    currentPlayer = currentPlayer === PlayerSigns.X ? PlayerSigns.O : PlayerSigns.X;
    statusDisplay.innerHTML = currentPlayerTurn();
}

function handleResultValidation(): void {
    let roundWon: boolean = false;

    for (let i = 0; i <= 7; i++) {
        const winCondition: number[] = winningConditions[i];
        let a: string = gameState[winCondition[0]];
        let b: string = gameState[winCondition[1]];
        let c: string = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }

    if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }

    let roundDraw: boolean = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }

    handlePlayerChange();
}

function handleCellClick(clickedCellEvent: Event) {
    const clickedCell: Element = <Element>clickedCellEvent.target;
    const clickedCellIndex: string | null = clickedCell.getAttribute('data-cell-index');

    if(clickedCellIndex === null) {
        return;
    }

    const clickedCellIndexValue: number = parseInt(clickedCellIndex);

    if (gameState[clickedCellIndexValue] !== "" || !gameActive) {
        return;
    }

    handleCellPlayed(clickedCell, clickedCellIndexValue);
    handleResultValidation();
}

function handleRestartGame() {
    gameActive = true;
    currentPlayer = PlayerSigns.X;
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart')!.addEventListener('click', handleRestartGame);