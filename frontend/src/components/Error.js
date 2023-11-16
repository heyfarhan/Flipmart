const Error = () => {
    return (
        <div className="bg-wwhite my-2 py-6  px-4 flex flex-col gap-2 " >
            <img className="object-contain w-2/3 self-center md:w-1/2" src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/error-500_f9bbb4.png" alt=""></img>
            <p className=" font-medium text-lg text-center" >Unfortunately the page you are looking for has been moved or deleted</p>
            <button className="bg-blue my-8 py-2 px-4 rounded-md text-wwhite w-44 self-center">Go to Homepage</button>
        </div>
    )
}
export default Error