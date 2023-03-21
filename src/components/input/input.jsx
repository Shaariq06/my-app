const Input = ({label, name, placeHolder, onChange, type}) => {
  return (
    <div>
        <p>
          {label} 
          <input type = {type} name={name} placeholder={placeHolder} onChange={onChange} required/>
        </p>
    </div>
  )
}

export default Input