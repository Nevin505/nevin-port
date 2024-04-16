import inputStyles from './Input.module.css';

const Input = ({textArea,inputType,placeholder,name,onchange}) => {
  return (
       textArea ? <textarea className={inputStyles.textArea} placeholder={placeholder} name={name} onChange={onchange}></textarea>:<input className={inputStyles.defaultStyle} type={inputType} placeholder={placeholder} name={name} onChange={onchange}/>
  )
}

export default Input;
