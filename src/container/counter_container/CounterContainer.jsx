import './CounterContainer.scss'
import ButtonMinus from '../../components/buttons/ButtonMinus/ButtonMinus.jsx'
import ButtonPlus from '../../components/buttons/ButtonPlus/ButtonPlus.jsx'
import { useState } from 'react'

const CounterContainer = () => {
  const [number, setNumber] = useState(0);
  let isAdding = true;
  let isClicked = true;

  const [minusButtonClassName, setMinusButtonClassName] = useState('minus');
  const [plusButtonClassName, setPlusButtonClassName] = useState('plus');

  const changeNumber = (isAdding, isClickedLast) => {
    if(!isClickedLast){
      setMinusButtonClassName(minusButtonClassName => minusButtonClassName = 'minus');
      setPlusButtonClassName(plusButtonClassName => plusButtonClassName = 'plus');
    }
    else {
      setMinusButtonClassName(minusButtonClassName => minusButtonClassName = 'minus-clicked');
      setPlusButtonClassName(plusButtonClassName => plusButtonClassName = 'plus-clicked');
    }

    if (number >= 0 && isAdding){
      setNumber(number => number + 1)
    }
    else if (number > 0 && !isAdding){
      setNumber(number => number - 1)
    }
    return minusButtonClassName, plusButtonClassName
  }


  return (
    <div className="counter">
        <h1 className="counter__header">Tasks</h1>
        <h2 className="counter__number">{number}</h2>
        <div className="buttons">
            <ButtonMinus changeNumber={changeNumber} isAdding={isAdding} minusButtonClassName={minusButtonClassName} isClicked={isClicked}/>
            <ButtonPlus changeNumber={changeNumber} isAdding={isAdding} plusButtonClassName={plusButtonClassName}  isClicked={isClicked}/>
        </div>
    </div>
  )
}

export default CounterContainer