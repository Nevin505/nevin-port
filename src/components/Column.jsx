import ColumnStyles from "./Column.module.css";

const Column = ({variantType='gap',children}) => {
    let columnStyles=ColumnStyles.gap;

    if(variantType==='mediumgap'){
         columnStyles+=" "+ColumnStyles.mediumGap;
    }
    else if(variantType==='largeGap'){
        columnStyles+=" "+ColumnStyles.largeGap;
    }
  return (
    <div className={columnStyles}>
      {children}
    </div>
  )
}

export default Column
