import * as React from 'react';
import './App.css';
import FoodCard from './FoodCard/index';


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <FoodCard />
      </div>
    );
  }
}

export default App;
