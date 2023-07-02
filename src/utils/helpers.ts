export function getRandomPosition(min: number, max: number): number {
  return Math.round((Math.random() * (max - min) + min) / 10) * 10;
}

export function checkCollision(snake: Array<{x: number, y: number}>, food: {x: number, y: number}): boolean {
  for(let i = 0; i < snake.length; i++) {
    if(snake[i].x === food.x && snake[i].y === food.y) {
      return true;
    }
  }
  return false;
}

export function checkSelfCollision(snake: Array<{x: number, y: number}>): boolean {
  for(let i = 4; i < snake.length; i++) {
    if(snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
      return true;
    }
  }
  return false;
}

export function checkWallCollision(snake: Array<{x: number, y: number}>, boardSize: number): boolean {
  return snake[0].x < 0 || snake[0].y < 0 || snake[0].x > boardSize || snake[0].y > boardSize;
}