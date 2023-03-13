/* eslint-disable @next/next/no-img-element */
const Img: React.FC<any> = (props) => {
   const { item } = props
   return (
      <div className="rounded-lg overflow-hidden">
         <img src={`https://image.tmdb.org/t/p/w500${item?.file_path}`} alt="" />
      </div>
   )
}

export default Img