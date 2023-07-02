import React from 'react';
import './Snake.css';

interface SnakeProps {
  snakeDots: Array<[number, number]>;
}

const Snake: React.FC<SnakeProps> = ({ snakeDots }) => {
  return (
    <div>
      {snakeDots.map((dot, i) => {
        const style = {
          left: `${dot[0]}%`,
          top: `${dot[1]}%`
        }
        return (
          <div className="snake-dot" key={i} style={style}></div>
        )
      })}
    </div>
  );
}

export default Snake;