const Input = ({label, value, placeholder, handleChange}) =>{
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input 
          className="input"
          type="number"
          placeholder={placeholder}
          onChange={handleChange}
          value={value}/>
      </div>
    </div>
  )
}

export default Input