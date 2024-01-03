jest.mock('./script.js', () => {
  const originalModule = jest.requireActual('./script.js');

  return {
    ...originalModule,
    document: {
      querySelector: jest.fn(),
    },
  };
});

const {
  handleCellPlayed,
  handlePlayerChange,
  handleResultValidation,
  handleRestartGame,
} = require('./script.js');

test('handleCellPlayed updates gameState and cell content', () => {
  const gameState = ["", "", "", "", "", "", "", "", ""];
  const clickedCellIndex = 0;

  handleCellPlayed({ innerHTML: '' }, clickedCellIndex);

  expect(gameState[clickedCellIndex]).toBe("X");
});

test('handlePlayerChange switches the currentPlayer', () => {
  let currentPlayer = "X";

  handlePlayerChange();

  expect(currentPlayer).toBe("O");
});

test('handleResultValidation ends the game if a player wins', () => {
  const gameState = ["X", "X", "X", "", "", "", "", "", ""];

  const result = handleResultValidation(gameState);

  expect(result).toBe("Player X has won!");
});

test('handleResultValidation ends the game in a draw', () => {
  const gameState = ["X", "O", "X", "O", "X", "O", "O", "X", "X"];

  const result = handleResultValidation(gameState);

  expect(result).toBe("Game ended in a draw!");
});

test('handleRestartGame resets the game state', () => {
  const initialState = {
    gameActive: false,
    currentPlayer: "O",
    gameState: ["X", "O", "", "", "", "", "", "", ""],
  };

  handleRestartGame();

  expect(gameActive).toBe(true);
  expect(currentPlayer).toBe("X");
  expect(gameState).toEqual(["", "", "", "", "", "", "", "", ""]);
});

