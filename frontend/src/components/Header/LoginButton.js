import { useState } from "react"

const LoginButton = () => {
    const [isLogin,setIsLogin]=useState("false");
    return (
        <div className="bg-wwhite text-gray  rounded-sm drop-shadow-md md:mx-7 flex">
                {
                    (isLogin==="true")?(true && 
                        
                        <button className="text-blue text-base font-medium  w-20 md:w-24 h-9" onClick={()=>{
                            setIsLogin(()=>"false")
                        }}>Logout</button>
                        ):(
                            true && 
                            <button className="text-blue text-base font-medium w-20 md:w-24 h-9 " onClick={()=>{

                            setIsLogin(()=>"true")
            
                        }}>Login</button>

                        )
                }
            </div>
    )
}
export default LoginButton