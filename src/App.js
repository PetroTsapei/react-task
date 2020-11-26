import React from 'react';
import List from './components/List';

import useObservable from './hooks/useObservable';
import Emitter from './services/Emitter';
import { source } from './services';
import './App.css';

function App() {
  const measures = useObservable(new Emitter(), source);

  return (
    <div className="App">
      <h1>Timothy, approve me</h1>
      <List items={Object.entries(measures)} />
    </div>
  );
}

export default App;
