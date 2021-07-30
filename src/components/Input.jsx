import { useState } from "react"

const Input = ({label, value, placeholder, setValue}) =>{
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input 
          className="input"
          type="number"
          min="0"
          placeholder={placeholder}
          onChange={e => setValue(e.target.value)}
          value={value}/>
      </div>
    </div>
  )
}

export default Input