import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';



const anotherElement = React.createElement(
  'a',
  {href:'https://www.google.com',
  target: '_blank',
  },
  'Click here'

)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

