import * as React from 'react';
import './FoodCard.scss';

export interface IFoodInfo {
  title: string;
  image: string;
  weight: number;
  kcal: number; // 2000
  fat: number; // 50
  protain: number; //60
  carbohydrate: number; // 328
  salt: number; // 2
  cholesterol: number; // 0.3
}
class FoodCard extends React.Component<{foods: IFoodInfo[]}, {}> {
  public render() {
    return this.props.foods.map((item)=>{
      let infos = {...item}
      return (
        <div className="FoodCard">
          <ul>
            <li>
              <strong>{infos.title}</strong>
                <img src={infos.image} alt={infos.title}/>
            </li>
            <li>
              <strong>{infos.weight} 당 영양성분</strong>
            </li>
            <li>
              <strong>칼로리 :{infos.kcal}</strong>
              <strong>{infos.kcal} / 2000</strong>
            </li>
            <li>
              <strong>지방 :{infos.fat}</strong>
              <strong>{infos.fat} / 50</strong>
            </li>
            <li>
              <strong>단백질 :{infos.protain}</strong>
              <strong>{infos.protain} / 50</strong>
            </li>
            <li>
              <strong>탄수화물 :{infos.carbohydrate}</strong>
              <strong>{infos.carbohydrate} / 328</strong>
            </li>
            <li>
              <strong>나트륨 :{infos.salt}</strong>
              <strong>{infos.salt} / 2</strong>
            </li>
            <li>
              <strong>콜레스테롤 :{infos.cholesterol}</strong>
              <strong>{infos.cholesterol} / 0.3</strong>
            </li>
          </ul>
        </div>
      );
    })
  }
}

export default FoodCard;
