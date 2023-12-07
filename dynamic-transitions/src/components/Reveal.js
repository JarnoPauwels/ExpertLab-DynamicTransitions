import { useEffect, useRef} from "react";
import {motion, useInView, useAnimation} from "framer-motion";

export const Reveal = ({ children, width = "100%", classname}) => {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true})
    
    const mainControls = useAnimation();
    const slideControls = useAnimation();


    useEffect(() => {
        if(isInView) {
            mainControls.start("visible");
            slideControls.start("visible");

        }
    }, [isInView, mainControls, slideControls])

    return (
        <div ref={ref} style={{width, overflow:"hidden" }}>
            <motion.div
            variants={{
                hidden: {opacity: 0, y: 75},
                visible: {opacity: 1, y: 0}
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.8, delay: 0.5}}
            className={classname}
            >{children}</motion.div>
        </div>
    )
}