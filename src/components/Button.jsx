import React from 'react'
import '../stylesheets/Button.css'

const Button = (props) => {
  return (
    <button className="button bg-black m-5">
        {props.text} <span className="text-white text-2xl">✨</span>
    </button>
  )
}

export default Button
