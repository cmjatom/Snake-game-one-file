import React, { useState, useEffect } from 'react';
import Snake from './Snake';
import Food from './Food';
import Board from './Board';
import { DIRECTIONS, INITIAL_SNAKE, INITIAL_FOOD } from '../utils/constants';
import { checkCollision, getRandomCoordinates } from '../utils/helpers';

const SnakeGame: React.FC = () => {
  const [snakeDots, setSnakeDots] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [direction, setDirection] = useState(DIRECTIONS.RIGHT);
  const [speed, setSpeed] = useState(200);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const interval = setInterval(moveSnake, speed);
    return () => clearInterval(interval);
  }, [snakeDots, speed]);

  const moveSnake = () => {
    let dots = [...snakeDots];
    let head = dots[dots.length - 1];

    switch (direction) {
      case DIRECTIONS.RIGHT:
        head = [head[0] + 2, head[1]];
        break;
      case DIRECTIONS.LEFT:
        head = [head[0] - 2, head[1]];
        break;
      case DIRECTIONS.DOWN:
        head = [head[0], head[1] + 2];
        break;
      case DIRECTIONS.UP:
        head = [head[0], head[1] - 2];
        break;
    }

    dots.push(head);
    dots.shift();
    setSnakeDots(dots);
  };

  const checkIfOutOfBorders = () => {
    let head = snakeDots[snakeDots.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      setGameOver(true);
    }
  };

  const checkIfCollapsed = () => {
    let snake = [...snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach(dot => {
      if (head[0] === dot[0] && head[1] === dot[1]) {
        setGameOver(true);
      }
    });
  };

  const checkIfEat = () => {
    let head = snakeDots[snakeDots.length - 1];
    if (head[0] === food[0] && head[1] === food[1]) {
      setFood(getRandomCoordinates());
      enlargeSnake();
      increaseSpeed();
    }
  };

  const enlargeSnake = () => {
    let newSnake = [...snakeDots];
    newSnake.unshift([]);
    setSnakeDots(newSnake);
  };

  const increaseSpeed = () => {
    if (speed > 10) {
      setSpeed(speed - 10);
    }
  };

  return (
    <div>
      <Board>
        <Snake snakeDots={snakeDots} />
        <Food dot={food} />
      </Board>
      {gameOver && <div>Game Over!</div>}
    </div>
  );
};

export default SnakeGame;