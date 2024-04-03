import React from 'react'
import style from "./Avatar.module.css"

export default function Avatar() {
  return (
    <div className={style.avatar_container}>
      <div className={style.avatar}></div>
      <p className={style.my_profile_text}>My profile</p>
    </div>
  )
}
