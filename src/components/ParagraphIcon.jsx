import paragraphIconStyles from "./ParagraphIcon.module.css";

const ParagraphIcon = ({children}) => {
  return (
    <p className={paragraphIconStyles.pDesigin}>
      {children}
    </p>
  )
}

export default ParagraphIcon;
