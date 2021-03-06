import * as React from 'react';
import './App.scss';
import FoodCard, {IFoodInfo} from './FoodCard/index';


class App extends React.Component {
  public render() {
    let TestInfo: IFoodInfo[] = [{
      title: '고추장불고기 삼각김밥',
      image: 'https://www.foodsafetykorea.go.kr/upload/kisna/foodimg/10085.png',
      weight: 100,
      kcal: 165, // 2000
      fat: 1.58, // 50
      protain: 3.66, //60
      carbohydrate: 34.11, // 328
      salt: 3.4, // 2
      cholesterol: 0.01 // 0.3
    },{
      title: '참치불고기 삼각김밥',
      image: 'https://www.foodsafetykorea.go.kr/upload/kisna/foodimg/10085.png',
      weight: 100,
      kcal: 165, // 2000
      fat: 1.58, // 50
      protain: 3.66, //60
      carbohydrate: 34.11, // 328
      salt: 3.4, // 2
      cholesterol: 0.01 // 0.3
    }]
    return (
      <div className="App">
        <FoodCard foods={TestInfo}/>
      </div>
    );
  }
}

export default App;
