import React from 'react';
import './styles/App.css';
import SnakeGame from './components/SnakeGame';

const App: React.FC = () => {
  return (
    <div className="App">
      <SnakeGame />
    </div>
  );
}

export default App;