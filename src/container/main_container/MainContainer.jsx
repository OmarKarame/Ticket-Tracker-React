import Card from '../../components/MemberCard/Card.jsx'
import './MainContainer.scss'
import image1 from '../../assets/images/image1.jpeg'
import image2 from '../../assets/images/image2.jpeg'
import image3 from '../../assets/images/image3.jpeg'
import { useState } from 'react'
import AddCardContainer from '../add_card_container/AddCardContainer.jsx'

const images = [image1, image2, image3];


const MainContainer = (props) => {
    const {team} = props;
    let index = 0;
    const [isAddingCard, setIsAddingCard] = useState(false);
    const [buttonClassName, setButtonClassName] = useState("add")
    const [cardsJSX, setCardsJSX] = useState(team.map((member) => {
      index++
      if(index == 3){
        index = 0;
      }
      return (
        <>
          <Card key = {member.id} name = {member.name} role = {member.role} image = {images[index]} className="card__contents"/>
        </>
      )
    }))

    const toggleDisplayAddCard = () => {
        if (buttonClassName == "add") {
          setButtonClassName(buttonClassName => buttonClassName = "close");
        }
        else if (buttonClassName == "close") {
          setButtonClassName(buttonClassName => buttonClassName = "add");
        }
      console.log(buttonClassName);
      setIsAddingCard(isAddingCard => !isAddingCard)
    }

    const filterTeam = (str) => {
      if (str != ""){
        let filteredTeam = team.filter((member) => member.name.toLowerCase().startsWith(str))
        setCardsJSX(cardsJSX => cardsJSX = filteredTeam.map((member) => {
          //index++
          if(index == 3){
            index = 0;
          }
          return (
            <>
              <Card key = {member.id} name = {member.name} role = {member.role} image = {images[index]} className="card__contents"/>
            </>
          )
        }))
      }
      else {
        setCardsJSX(cardsJSX => cardsJSX = team.map((member) => {
          index++
          if(index == 3){
            index = 0;
          }
          return (
            <>
              <Card key = {member.id} name = {member.name} role = {member.role} image = {images[index]} className="card__contents"/>
            </>
          )
        }))
      }
    }

  return (
    <>
    <div className='header'>
      <div className='search'>
        <h2 className='search__header'>Search</h2>
        <input type="text" className='search__bar' onChange={(e) => {
              filterTeam(e.target.value.toLowerCase());
          }} />
      </div>
      <div className="add-button">
        <button className={buttonClassName} onClick={toggleDisplayAddCard}>+</button>
      </div>
    </div>
    <div className='main-container'>
      {isAddingCard ? <AddCardContainer toggleDisplayAddCard={toggleDisplayAddCard}/> : cardsJSX}
    </div>
    </>
  )
}

export default MainContainer