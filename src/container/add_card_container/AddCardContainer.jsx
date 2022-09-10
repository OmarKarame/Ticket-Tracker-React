import {useState} from 'react';
import './AddCardContainer.scss';


const AddCardContainer = ({handleNewCardButtonPress, handleAddName, handleAddRole}) => {
  return (
    <div className='add-card-form'>
        <div className='info'>
            <h3>Name</h3>
            <input className='name-input card-input' type="text" onChange={handleAddName}/>
        </div>
        <div className='info'>
            <h3>Title</h3>
            <input className='title-input card-input' type="text" onChange={handleAddRole}/>
        </div>
        <button className='add-card' onClick={handleNewCardButtonPress}>Add new card</button>
    </div>
  )
}

export default AddCardContainer