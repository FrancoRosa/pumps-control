const Input = ({label, value, placeholder, setValue, changed, id}) =>{
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input 
          className={`input ${changed && 'is-danger'}`}
          type="number"
          min="0"
          placeholder={placeholder}
          onChange={e => setValue(e.target.value, id)}
          value={value}/>
      </div>
    </div>
  )
}

export default Input