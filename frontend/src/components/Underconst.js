import  img from '../img/underconst.gif'  
const UnderConst=()=>{
    return(
        <div className=' bg-[black] text-wwhite flex items-center flex-col gap-5 py-8'>
            <h1 className='text-4xl font-medium text-center'>Please Stand By</h1>
        <img className=" w-[60%] sm:w-[40%] py-2" src={img}/>
        </div>

    )
}
export default UnderConst