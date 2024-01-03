const { JSDOM } = require('jsdom');
const fs = require('fs');

const html = fs.readFileSync('./src/index.html', 'utf8');
const dom = new JSDOM(html, { runScripts: 'dangerously' });

global.document = dom.window.document;

const {
  handlePlayerChange,
  handleCellClick,
  currentPlayerTurn,
  handleRestartGame,
  gameActive,
  gameState,
  currentPlayer,
  statusDisplay,
} = require('./script');

function clickCell(index) {
  let cell = document.querySelector(`.cell[data-cell-index="${index}"]`);

  handleCellClick({ target: cell });
}

describe('Tic Tac Toe Game', () => {
  afterEach(() => {
    // Set up a clean slate for each test
    handleRestartGame()
  });

  test('Should handle cell played', () => {
    clickCell(0)
    const initialPlayer = currentPlayer;
  
    expect(gameState[0]).toBe(initialPlayer);
    expect(statusDisplay.innerHTML).toBe(currentPlayerTurn());
  });

  test('Should handle player change', () => {
    handlePlayerChange();
    expect(currentPlayerTurn()).toBe("It's O's turn");
  })

  test('should handle result validation - player wins', () => {
    // Simulate a winning condition
    clickCell(0)
    clickCell(3)
    clickCell(1)
    clickCell(4)
    clickCell(2)
    clickCell(5)

    // expect(gameActive).toBe(false)
    expect(statusDisplay.innerHTML).toBe('Player X has won!')
  });

  test('should handle result validation - draw', () => {
    // Simulate a draw condition
    let sequance = ['X', 'O', 'X', 'X', 'X', 'O', 'O', 'X', 'O']

    clickCell(0)
    clickCell(1)
    clickCell(2)
    clickCell(5)
    clickCell(3)
    clickCell(6)
    clickCell(4)
    clickCell(8)
    clickCell(7)

    // expect(gameActive).toBe(false);
    expect(statusDisplay.innerHTML).toBe("Game ended in a draw!");
  });

});

