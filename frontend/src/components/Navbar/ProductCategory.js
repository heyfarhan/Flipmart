const ProductCategory = (props)=>{
    return(
        <div className='flex gap-2 flex-col w-[4rem] items-center text-xs sm:text-sm whitespace-nowrap'>
                    <img className=" min-h-[2.8rem] max-[602px]:max-w-[2.8rem] min-w-[2.8rem]" src={props.img}></img>
                    <span>{props.name}</span>
                </div>
    )
}
export default ProductCategory