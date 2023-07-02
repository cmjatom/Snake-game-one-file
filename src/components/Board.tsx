import React from 'react';
import { BoardContainer } from '../styles/Board.styles';

const Board: React.FC = () => {
  return (
    <BoardContainer id="game-board">
      {/* Game elements like Snake and Food will be rendered here */}
    </BoardContainer>
  );
};

export default Board;