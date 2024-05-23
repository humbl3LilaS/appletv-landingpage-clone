import Container from "./Container.tsx";
import Button from "./Button.tsx";
import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";

const contentVariants = {
    hidden: {
        opacity: 0,

    },
    visible: {
        opacity: 1,

    }
};

export default function Hero() {
    const videoContainerRef = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: videoContainerRef,
        offset: ["start start", "end end"]
    });
    const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);
    return (
        <div className={"relative text-white"}>
            <motion.div
                ref={videoContainerRef}
                className={"w-full h-[200vh] absolute -top-[--header-height] left-0"}
                style={{opacity}}
            >
                <img src="/public/posters/napoleon.webp"
                     alt={"Image of Napoleon movie in which four france soldiers stand standing next to a cannon"}
                     className={"h-screen w-full sticky top-0 left-0 object-cover"}
                />
            </motion.div>
            <Container className={"h-[--hero-height] pb-10  relative z-10"}>
                <motion.div
                    className={"h-full flex flex-col justify-end items-start "}
                    variants={contentVariants}
                    whileInView={"visible"}
                    exit={"hidden"}
                    animate={"hidden"}
                    viewport={{amount: 1}}
                >
                    <h1 className={"text-5xl font-bold mb-10"}>
                        All Apple Originals.<br/>
                        Only on Apple TV+
                    </h1>
                    <Button size={"lg"} bg={"white"} className={"mb-16"}>
                        Stream Now
                    </Button>
                    <p className={"font-semibold text-xl"}>
                        Watch on 📺 app
                    </p>
                </motion.div>
            </Container>
        </div>
    );
}