
// Buttons Included With icon

import ButtonStyles from './Button.module.css'

const Button=({variantType='classicButton',icon,children,type,ClickEventHandler})=>{
  let styles;
    if(variantType==='easeInButton'){
        styles=ButtonStyles.defaultStyle+" "+ButtonStyles.buttonEaseIn
    }
    else if(variantType==='classicButton'){
        styles=ButtonStyles.defaultStyle+" "+ButtonStyles.classicButton;
    }

    return(
        <button className={styles} type={type} onClick={ClickEventHandler}>
            <div className={ButtonStyles.textIcon}>
                
                {children}
                {icon && icon}
            </div>
        </button>
    )
}
export default Button;