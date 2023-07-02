import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import GlobalStyle from './styles/global';
import App from './App';

const Global = createGlobalStyle`
  ${GlobalStyle}
`;

ReactDOM.render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);