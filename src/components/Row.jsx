import rowStyle from './Row.module.css'

const Row = ({gapSize='smallGap',children}) => {
  let rowStyles=rowStyle.smallGap;

  if(gapSize==='mediumGap'){
    rowStyles=rowStyle.mediumGap;
  }
  else if(gapSize==='largeGap'){
    rowStyles=rowStyle.largeGap;
  }
  return (
    <div className={rowStyles}>
      {children}
    </div>
  )
}

export default Row
