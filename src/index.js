import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./pages/Home/index"
import App from './App';


ReactDOM.render(<App />, document.getElementById('root'));

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
