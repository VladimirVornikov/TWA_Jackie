import React from 'react'
import Avatar from '../components/Avatar'
import style from "./HomePage.module.css"
import ButtonHome from '../components/ButtonHome'
import Like from "../assets/Like.png"
import Dislike from "../assets/Dislike.png"

export default function HomePage() {
  return (
    <div className={style.home_page}>
      <div className={style.avatar_wrapper}>
        <Avatar/> 
        <input placeholder='search'></input>
      </div>
      <ButtonHome text = "Complete a profile"/>
      <ButtonHome text = "Share report or invite friends"/>
      <ButtonHome text = "Get insights via chat with Jackie"/>

      <div className={style.add_friends_block}>
        <h3>Add people</h3>
        <span className={style.info_wrapper}>
          <div>
            <h5>Analyze new person</h5>
            <p>Add your friend/mom/partner’s photo and check your relationship quality</p>
          </div>
          <div>
            <h5>Import your contact</h5>
            <p>Add your friend/mom/partner’s photo and check your relationship quality</p>
          </div>
        </span>
      </div>
      <h4>Find your match with us</h4>

      <div className={style.match_container}>
        <div className={style.foto}></div>
        <span className={style.info_block}>
          <div className={style.users_info}>
            <p>Name:</p>
            <p>Age:</p>
            <p>Gender:</p>
            <img src={Like} alt="Not found"/>
            <img src={Dislike} alt="Not found"/>
          </div>
          <div>
            <h6>Your match</h6>
            <div className={style.statistic}></div>
          </div>
        </span>
      </div>

      <button className={style.other_persons}>Other persons</button>
    </div>
  )
}
