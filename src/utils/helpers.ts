export function getRandomPosition(boardSize: number): [number, number] {
  const position = [
    Math.floor(Math.random() * boardSize),
    Math.floor(Math.random() * boardSize),
  ];
  return position;
}

export function checkCollision(snake: Array<[number, number]>, newHead: [number, number]): boolean {
  for (let i = 0; i < snake.length; i++) {
    if (snake[i][0] === newHead[0] && snake[i][1] === newHead[1]) {
      return true;
    }
  }
  return false;
}

export function checkFoodConsumption(snake: Array<[number, number]>, food: [number, number]): boolean {
  return snake[0][0] === food[0] && snake[0][1] === food[1];
}

export function getNewDirection(currentDirection: string, keyPressed: string): string {
  const directions = {
    ArrowUp: 'UP',
    ArrowDown: 'DOWN',
    ArrowLeft: 'LEFT',
    ArrowRight: 'RIGHT',
  };
  const oppositeDirections = {
    UP: 'DOWN',
    DOWN: 'UP',
    LEFT: 'RIGHT',
    RIGHT: 'LEFT',
  };
  if (directions[keyPressed] && directions[keyPressed] !== oppositeDirections[currentDirection]) {
    return directions[keyPressed];
  } else {
    return currentDirection;
  }
}