import './ButtonPlus.scss'

const ButtonPlus = ({changeNumber, isAdding, plusButtonClassName, isClickedLast}) => {
  isAdding = true;

  return (
    <button className={plusButtonClassName} onClick={() => {
        isClickedLast = false;
        changeNumber(isAdding, isClickedLast)
        console.log(plusButtonClassName);
    }}>+</button>
  )
}

export default ButtonPlus