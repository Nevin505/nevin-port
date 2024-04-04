import pageStyles from "./Page.module.css";

const Page = ({children}) => {
  return (
    <div className={pageStyles.pageDesigin}>
       {children} 
    </div>
  )
}

export default Page;
