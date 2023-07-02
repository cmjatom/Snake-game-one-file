import styled from 'styled-components';

export const GameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #282c34;
`;

export const GameBoard = styled.div`
  position: relative;
  height: 600px;
  width: 600px;
  border: 1px solid white;
`;

export const ScoreBoard = styled.div`
  color: white;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const GameOverMessage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: red;
  font-size: 48px;
`;