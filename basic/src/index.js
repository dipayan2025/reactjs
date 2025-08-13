import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/App.css'
import App from './App';
import Chai from './Chai';
function MyForm() {
  return (
    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
  )
}
const username="Dipayan";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <App />
    <Chai /><MyForm />{username}
  </>
  
 
);

