import React, { useState } from 'react'
import style from "./LoginPage.module.css"
import Input from '../components/Input'
import Button from '../components/ButtonLogin'

export default function LoginPage() {
  const [login, setLogin] = useState("false")
  const [password, setPassword] = useState("false")

  return (
    <div className={style.login}>
      <h1 className={style.logo}>Logo</h1>
      <p className={style.greetings}>Hello, friend</p>
      <form className={style.form}>
        <label>Login</label>
        <Input placefolder="Login" type="text" setConfig={setLogin}/>
        <label>Password</label>
        <Input placefolder="Password" type="password" setConfig={setPassword}/>
      </form>
      <a href='https://www.google.com/' className={style.link}>Forget password?</a>
      
      <div className={style.button_container}>
        <Button name={"With Facebook (Widjet)"}/>
        <Button name={"With Apple (Widjet)"}/>
        <Button name={"With Google (Widjet)"}/>
      </div>
      <p className={style.info}>Регистрируясь, вы соглашаетесь с нашими <a href='/'>Условиями обслуживания. </a> 
        Узнайте о том, как мы обрабатываем и используем ваши данные, в нашей <a href='/'>Политике </a> 
        конфиденциальности.</p>
    </div>
  )
}
