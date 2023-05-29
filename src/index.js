import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import StateProvider from './components/State';
import initialState from "./components/reducer";
import reducer from "./components/reducer"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
  </React.StrictMode>
);

