const NextButton = () => {
    const handleNext = (e) => {
        var right = e.target;
        if (e.target.tagName === 'svg') {
            right = e.target.parentElement
        }
        else if (e.target.tagName === 'path') {
            right = e.target.parentElement.parentElement
        }
        var productWidth = right.previousSibling.clientWidth;
        var content = right.parentElement;
        var container = content.parentElement;
        var left = content.firstChild
        if (content.classList.contains("snap-x" && "scroll-smooth")) {
            content.classList.remove("scroll-smooth")
            content.classList.remove("snap-x")
            content.scrollLeft += 2;
        }
        else {
            content.scrollLeft += 2;
        }
        if (content.scrollLeft > 0) {
            left.classList.remove('hidden')
            left.classList.add('flex')
            content.classList.add('scroll-smooth')
            content.classList.add('snap-x')
        }
        else {
            left.classList.remove('flex')
            left.classList.add('hidden')
        }
        content.scrollLeft += 3 * productWidth;
        if (content.scrollLeft + content.clientWidth >= content.scrollWidth - productWidth) {
            right.classList.remove('flex')
            right.classList.add('hidden')
        }
    }
    return (
        <button className="bg-blue h-10   px-3.5 rounded-full sticky right-1 top-[40%] items-center flex opacity-80 z-[3] fill-wwhite" onClick={handleNext}>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>

        </button>
    )
}
export default NextButton