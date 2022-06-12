import React from 'react';
import Square from './Square.jsx';
import calculateWinner from './calculateWinner.js';
import './board.scss';

const Board = (props) => {
  const { squares, onClick } = props;
    
  function renderSquare(i) {
    const boardLine = [i, ++i, ++i].map((num) => 
      <Square 
        key={num}
        value={squares[num]}
        onClick={() => onClick(num)}
      />
    );
    
    return boardLine;
  }

  const board = [0, 3, 6].map((num) => 
    <div 
      key={num}
      className="board-row"
    >
      { renderSquare(num) }
    </div>
  );
   
  return (
    <div>
      {board}
    </div>
  );
};

export default Board;
