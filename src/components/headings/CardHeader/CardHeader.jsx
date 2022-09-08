import './CardHeader.scss'

const CardHeader = (props) => {
    const {name, role} = props;
  return (
    <div className='card-heading'>
        <h1 className='card-heading__name'>{name}</h1>
        <h2 className='card-heading__role'>{role}</h2>
    </div>
  )
}

export default CardHeader