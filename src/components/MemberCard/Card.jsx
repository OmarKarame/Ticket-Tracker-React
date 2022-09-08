import './Card.scss'
import CardContainer from '../../container/counter_container/CounterContainer.jsx'
import CardHeader from '../headings/CardHeader/CardHeader.jsx'

const Card = (props) => {
    const {name, role, image} = props;
  return (
    <div className='card'>
        <img src={image} alt="" className='card__image' />
        <CardHeader name={name} role={role}/>
        <CardContainer />
    </div>
  )
}

export default Card