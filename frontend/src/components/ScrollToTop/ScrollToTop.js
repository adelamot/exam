import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import "./scroll.css";
export const ScrollToTop = () => {

    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisibility] = useState(false);

    useEffect(() => {
        if(pageYOffset > 200) {
            setVisibility(true);
        }
        else {
            setVisibility(false);
        }
    }, [pageYOffset]);

    if(!visible) {
        return false;
    }

    return(
        <div className="scroll-to-top cursor-pointer text-center" onClick={() => {
            return window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }}>
           <i className="icon fas fa-chevron-up"></i>
        </div>
    );
}