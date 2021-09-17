import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import React from 'react';
import './App.css';
import Form from './features/Form';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Form />
        </Route>
   
      </Switch>
    </Router>
  );
}

export default App;


