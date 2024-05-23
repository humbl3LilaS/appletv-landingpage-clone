import {ReactNode} from "react";
import {motion} from "framer-motion";

type Props = {
    children: ReactNode
}

const fadeInVariants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0
    }
};

export default function FadeIn({children}: Props) {
    return (
        <motion.div
            variants={fadeInVariants}
            initial={"initial"}
            whileInView={"visible"}
            viewport={{margin: "100% 0px -300px 0px"}}
        >
            {children}
        </motion.div>
    );
}