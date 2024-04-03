import React, { useState } from 'react'
import style from "./Input.module.css"

export default function Input(props) {
  const {placeholder, type, setConfig} = props
  const [value, setValue] = useState("")
  const [error, setError] = useState("");

  const validateInput = (inputValue) => {
    switch (type) {
        case 'text':
            if(inputValue.length > 3 && inputValue.length < 12 ) {
                return [inputValue, setConfig(true)]
            };
        case "password":
            if(inputValue.length > 3 && inputValue.length < 12 ) {
              return [inputValue, setConfig(true)]
            };
        default:
            return false;
    }
};


  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    if (inputValue.trim() === "") {
        setError("This field is required");
    } else if (!validateInput(inputValue)) {
        type === "text" ? setError(`Invalid ${type} (Please, write your name)`) :
        type === "tel" ? setError(`Invalid ${type} (It should contain "+" and 10 - 13 digits)`) :
        setError(`Invalid ${type} (Your email, should contain "@mail" word)`)
    } else {
        setError("");
    }
};

  return (
    <>
      <input
                  className={style.input}
                  placeholder={placeholder}
                  type={type}
                  onChange={handleInputChange}
                  value={value}
      />
      {error ? <p className={style.error}>{error}</p> : ""}
    </>
  )
}
