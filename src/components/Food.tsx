import React from 'react';
import { FoodStyle } from '../styles/Food.styles';
import { Position } from '../utils/helpers';

interface FoodProps {
  food: Position;
}

const Food: React.FC<FoodProps> = ({ food }) => {
  return (
    <FoodStyle style={{ left: `${food.x}%`, top: `${food.y}%` }} id="food" />
  );
};

export default Food;