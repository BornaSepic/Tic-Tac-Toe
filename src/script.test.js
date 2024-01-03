const {
  handleCellPlayed,
  handlePlayerChange,
  handleResultValidation,
  handleRestartGame,
} = require('./script');

describe('Tic Tac Toe Game', () => {
  beforeEach(() => {
    // Set up a clean slate for each test
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
  });

  test('should handle cell played', () => {
    const clickedCell = document.createElement('div');
    const clickedCellIndex = 0;
    handleCellPlayed(clickedCell, clickedCellIndex);

    expect(gameState[clickedCellIndex]).toBe("X");
    expect(clickedCell.innerHTML).toBe("X");
  });

  test('should handle player change', () => {
    handlePlayerChange();
    expect(currentPlayer).toBe("O");
    expect(statusDisplay.innerHTML).toBe("It's O's turn");
  });

  test('should handle result validation - player wins', () => {
    // Simulate a winning condition
    gameState = ["X", "X", "X", "", "", "", "", "", ""];
    handleResultValidation();

    expect(gameActive).toBe(false);
    expect(statusDisplay.innerHTML).toBe("Player X has won!");
  });

  test('should handle result validation - draw', () => {
    // Simulate a draw condition
    gameState = ["X", "O", "X", "O", "X", "O", "O", "X", "X"];
    handleResultValidation();

    expect(gameActive).toBe(false);
    expect(statusDisplay.innerHTML).toBe("Game ended in a draw!");
  });

  test('should handle restarting the game', () => {
    // Simulate a played game
    gameState = ["X", "O", "X", "O", "X", "O", "O", "X", "X"];
    handleResultValidation();
    handleRestartGame();

    expect(gameActive).toBe(true);
    expect(currentPlayer).toBe("X");
    expect(gameState).toEqual(["", "", "", "", "", "", "", "", ""]);
    expect(statusDisplay.innerHTML).toBe("It's X's turn");
    document.querySelectorAll('.cell').forEach(cell => {
      expect(cell.innerHTML).toBe("");
    });
  });
});

