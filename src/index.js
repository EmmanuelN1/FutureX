import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  {StateProvider } from "./components/ContextApi/StateProvider";
import reducer, {initialState} from "./components/ContextApi/reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}> {/* The initial state is how the data layer looks like from the begining and the reducer is how we manipulate around the data layer or takes care of how we are able to dispatch an action to a data layer */}
        <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
