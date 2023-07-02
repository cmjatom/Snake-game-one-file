import React from 'react';
import './Board.css';

interface BoardProps {
  boardSize: number;
  children: React.ReactNode;
}

const Board: React.FC<BoardProps> = ({ boardSize, children }) => {
  return (
    <div className="board" style={{ width: `${boardSize}px`, height: `${boardSize}px` }}>
      {children}
    </div>
  );
};

export default Board;