

const OffersPanel =(props)=>{
    return (
        <div className="overflow-hidden items-center bg-wwhite flex flex-col md:flex-row">
            <div className=" bg-blue ">
           <img src={props.img[0]} className="lg:w-[] "></img>
            </div>
            <div className="h-full bg-blue ">
           <img src={props.img[1]} className="lg:w-[] "></img>
            </div>
        </div>
    )
}

export default OffersPanel