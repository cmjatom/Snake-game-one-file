import React from 'react';
import './Food.css';

interface FoodProps {
  dot: number[];
}

const Food: React.FC<FoodProps> = ({ dot }) => {
  const style = {
    left: `${dot[0]}%`,
    top: `${dot[1]}%`
  }

  return (
    <div className="snake-food" style={style}></div>
  );
}

export default Food;