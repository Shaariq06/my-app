import './button.css'

const Button = ({children, onClick}) => {
  return (
    <div className='button'>
        <button onClick={onClick} className='button-submit'>{children}</button>
    </div>
  )
}


export default Button;