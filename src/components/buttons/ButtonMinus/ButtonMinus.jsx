import './ButtonMinus.scss'

const ButtonMinus = ({changeNumber, isAdding, minusButtonClassName, isClickedLast}) => {
  isAdding = false;

  return (
    <button className={minusButtonClassName} onClick={() => {
      isClickedLast = true
      changeNumber(isAdding, isClickedLast)
    }}>-</button>
  )
}

export default ButtonMinus