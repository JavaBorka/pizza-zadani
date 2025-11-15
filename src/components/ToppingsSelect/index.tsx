import type {ITopping} from "../../models/Topping";
import Topping from "../Topping";
import './style.css';

interface IToppingsSelectProps {
  toppings: ITopping[];
  onToppingsChange: (newToppings: ITopping[]) => void
}

const ToppingsSelect = ({ toppings, onToppingsChange }: IToppingsSelectProps) => {

  const handleCheckChange = (newCheck: boolean, i: number) => {
    const newToppings = [...toppings]
    newToppings[i].selected = newCheck
    onToppingsChange(newToppings)
  }

  let count = 0
  toppings.forEach(topping => {
    if (topping.selected) {
      count += 1
    }
  });

  let totalSum = 0
  toppings.forEach(topping => {
    if (topping.selected) {
      let price = topping.price
       totalSum += price
    }
  });

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>Selected toppings: {count}, total price: {totalSum.toFixed(2)} Euro</p>

      <div className="toppings">
        {toppings.map((topping, i) => (
          <Topping topping={topping} onCheckChange={(newCheck) => handleCheckChange(newCheck, i)} checked={topping.selected} key={topping.name} />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect