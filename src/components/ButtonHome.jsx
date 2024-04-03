import React from 'react'
import style from "./ButtonHome.module.css"

export default function ButtonHome({text}) {
  return (
    <button className={style.button_home}>
        {text}
    </button>
  )
}
