import React from 'react';
import { SnakeProps } from '../utils/helpers';
import { SnakeBody } from '../styles/Snake.styles';

const Snake: React.FC<SnakeProps> = ({ snakeDots }) => {
  return (
    <>
      {snakeDots.map((dot, i) => {
        const style = {
          left: `${dot[0]}%`,
          top: `${dot[1]}%`
        }
        return (
          <SnakeBody key={i} style={style} />
        )
      })}
    </>
  );
}

export default Snake;