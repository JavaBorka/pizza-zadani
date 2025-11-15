import Check from '../Check';
import type {ITopping} from '../../models/Topping';
import './style.css';

interface IToppingProps {
  topping: ITopping;
  onCheckChange: (newCheck: boolean) => void
  checked: boolean
}

const Topping  = ({ topping, onCheckChange, checked }: IToppingProps) => {
  return (
    <div className="topping">
      <Check onCheckChange={onCheckChange} checked={checked} />
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
