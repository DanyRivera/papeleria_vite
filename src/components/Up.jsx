import { animateScroll as scroll } from "react-scroll"

const Up = () => {
    return (
        <button 
            className="fixed bottom-2 right-2 md:bottom-5 md:right-5"
            onClick={() => scroll.scrollToTop()}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 bg-[#e1e1e1] text-secondary border p-3 rounded-full shadow-2xl">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
            </svg>
        </button>
    )
}

export default Up