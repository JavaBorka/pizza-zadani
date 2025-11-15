import './style.css';

interface CheckProps {
  onCheckChange: (newCheck: boolean) => void
  checked: boolean
}

const Check = ({onCheckChange, checked}: CheckProps)  => {

  const handleClick = () => {
    onCheckChange(!checked);
  };

  return (
    <button
      className="check"
      onClick={handleClick}
    >
      {checked ? '✓' : ''}
    </button>
  )
};

export default Check;