'use client'
import { motion } from "framer-motion";
import { translate } from "maath/dist/declarations/src/buffer";

export default function Template({children}:any){
    return(
        <motion.div className="w-screen"
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{ease:'easeInOut', duration:.75}}
        >
            {children}
        </motion.div>
    )
}