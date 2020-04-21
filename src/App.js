import React from 'react';
import MainComponent from './components/MainComponent';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/ConfigureStore'
import './App.css';

const store = ConfigureStore();

function App() {
  return (
    <Provider store={ store }>
      <BrowserRouter>
          <MainComponent/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
