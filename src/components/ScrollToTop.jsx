import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed bottom-8 right-8 z-50">
            <button
                type="button"
                onClick={scrollToTop}
                className={`
          p-4 rounded-full shadow-lg transition-all duration-300 transform
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
          bg-[#4731D3] hover:bg-[#3525a5] text-white border-2 border-white
          dark:bg-[#CBF281] dark:hover:bg-[#bde66e] dark:text-[#4731D3] dark:border-transparent
          hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4731D3]
        `}
            >
                <ArrowUp className="w-6 h-6" aria-hidden="true" />
            </button>
        </div>
    );
};

export default ScrollToTop;
