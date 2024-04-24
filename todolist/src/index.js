import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import and export in JS
// With default export: we can specify the name for import file
// With named export: we must import exactly the name of file has exported
// We can import all of a file by using asterisk notation. Ex: import * as bundle from "./file"

function emitComment(id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`channel-${id}`, {
        detail: `Comment's content of this channel ${id}`
      })
    )
  }, 2000); //
}

emitComment(1)
emitComment(2)
emitComment(3)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
