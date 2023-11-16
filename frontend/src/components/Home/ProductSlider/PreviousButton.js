const PreviousButton = () => {
    const handlePrev = (e) => {
        var left = e.target;
        if (left.tagName === 'svg') {
            left = left.parentElement
        }
        else if (left.tagName === 'path') {
            left = left.parentElement.parentElement
        }
        var productWidth = left.nextSibling.clientWidth;
        const content = left.parentElement;
        if (content.scrollLeft + content.clientWidth >= content.scrollWidth - productWidth) {
            content.classList.remove("scroll-smooth")
            content.classList.remove("snap-x")
            content.scrollLeft -= 2;
        }
        var right = content.lastChild
        if (content.scrollLeft > productWidth) {
            left.classList.remove('hidden')
            left.classList.add('flex')
        }
        else {
            left.classList.remove('flex')
            left.classList.add('hidden')
        }
        if (!(content.scrollLeft + content.clientWidth >= content.scrollWidth)) {
            right.classList.remove('hidden')
            right.classList.add('flex')
            content.classList.add("scroll-smooth")
            content.classList.add("snap-x")
        }
        content.scrollLeft -= 3 * productWidth;
    }
    return (
        <button className="bg-blue fill-wwhite h-10 px-3.5 rounded-full sticky top-[40%] left-1  items-center hidden  opacity-80 z-[99]" onClick={handlePrev}>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
        </button>
    )
}
export default PreviousButton
