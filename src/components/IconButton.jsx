import IconButtonStyle from '../components/IconButton.module.css'

const IconButton = ({children}) => {
  return (
    <div className={IconButtonStyle.iconStyle}>
      {children}
    </div>
  )
}

export default IconButton
