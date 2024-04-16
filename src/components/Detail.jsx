import divStyle from './Detail.module.css'

const Detail=({LabelName,candiateDetail})=>{
  return (
    <div className={divStyle.detailDiv}>
    <label className={divStyle.label}>{LabelName}</label>
    <span className={divStyle.span}> : {candiateDetail}</span>
    </div>
  );
}
export default Detail;