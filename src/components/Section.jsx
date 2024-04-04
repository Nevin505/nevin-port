import sectionStyle from './Section.module.css'
const Section = ({children,gapType="smallPadding"}) => {
  let styles=sectionStyle.smallPadding;

   if(gapType==='mediumPadding'){
    styles=sectionStyle.mediumPadding;
  }
  return (
    <div className={styles}>
      {children}
    </div>
  )
}

export default Section
