import React, { useState, useEffect } from 'react';
import { Snake } from './Snake';
import { Food } from './Food';
import { Board } from './Board';
import { DIRECTION, GAME_OVER, SCORE_UPDATE } from '../utils/constants';
import { checkCollision, moveSnake, updateScore } from '../utils/helpers';

const SnakeGame: React.FC = () => {
  const [snake, setSnake] = useState([]);
  const [food, setFood] = useState([]);
  const [direction, setDirection] = useState(DIRECTION.RIGHT);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSnake(oldSnake => moveSnake(oldSnake, direction));
    }, 200);
    return () => clearInterval(interval);
  }, [direction]);

  useEffect(() => {
    if (checkCollision(snake)) {
      setGameOver(true);
      document.dispatchEvent(new CustomEvent(GAME_OVER));
    }
    if (snake[0].x === food.x && snake[0].y === food.y) {
      setScore(oldScore => updateScore(oldScore));
      document.dispatchEvent(new CustomEvent(SCORE_UPDATE, { detail: score }));
      setFood([]);
    }
  }, [snake, food, score]);

  const handleKeyDown = (e: KeyboardEvent) => {
    e.preventDefault();
    switch (e.key) {
      case 'ArrowUp':
        setDirection(DIRECTION.UP);
        break;
      case 'ArrowDown':
        setDirection(DIRECTION.DOWN);
        break;
      case 'ArrowLeft':
        setDirection(DIRECTION.LEFT);
        break;
      case 'ArrowRight':
        setDirection(DIRECTION.RIGHT);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Board>
      <Snake snake={snake} />
      <Food food={food} />
    </Board>
  );
};

export default SnakeGame;