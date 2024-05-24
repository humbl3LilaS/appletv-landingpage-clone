import {movies, randomMoviesSet1, randomMoviesSet2} from "../util/movie.ts";
import SmallVideoCarousel from "./SmallVideoCarousel.tsx";
import {motion, useScroll, useTransform, useMotionValueEvent} from "framer-motion";
import {useMemo, useRef, useState} from "react";
import {useWindowSize} from "react-use";

export default function VideoCarousel() {
    const {width, height} = useWindowSize();
    const carouselWrapperRef = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({target: carouselWrapperRef, offset: ["start start", "end end"]});
    const maximumScale = useMemo(() => {
        const windowYRatio = height / width;
        const xScale = 1.6667;
        const yScale = xScale * windowYRatio * (16 / 9);
        return Math.max(xScale, yScale);
    }, [width, height]);
    const scale = useTransform(scrollYProgress, [0.3, 0.5, 0.66], [2, maximumScale, 1]);
    const posterOpacity = useTransform(scrollYProgress, [0.64, 0.66], [0, 1]);
    const posterTranslateXLeft = useTransform(scrollYProgress, [0.64, 0.66], [-100, 0]);
    const posterTranslateXRight = useTransform(scrollYProgress, [0.64, 0.66], [100, 0]);

    const [carouselVariant, setCarouselVariant] = useState<"active" | "inactive">("inactive");
    useMotionValueEvent(scrollYProgress, "change", (progress) => {
        if (progress >= 0.67) {
            setCarouselVariant("active");
        } else {
            setCarouselVariant("inactive");
        }
    });
    return (
        <motion.div className={"bg-background pb-8"} animate={carouselVariant}>

            <div className={"h-[200vh] -mt-[100vh] overflow-clip"}
                 ref={carouselWrapperRef}>
                <div className={"h-screen sticky top-0 flex items-center"}>
                    <div className={"relative left-1/2 mb-5 flex -translate-x-1/2 gap-5 "}>
                        <motion.div className={"w-[60vw] aspect-video shrink-0 rounded-2xl overflow-clip"}
                                    style={{opacity: posterOpacity, translateX: posterTranslateXLeft}}
                        >
                            <img src={movies[0].poster} alt={movies[0].name} className={"w-full h-full object-cover"}/>
                        </motion.div>

                        <motion.div className={"w-[60vw] aspect-video shrink-0  rounded-2xl overflow-clip"}
                                    style={{scale}}
                        >
                            <img src={movies[1].poster} alt={movies[1].name} className={"w-full h-full object-cover"}/>
                        </motion.div>

                        <motion.div className={"w-[60vw] aspect-video shrink-0  rounded-2xl overflow-clip"}
                                    style={{opacity: posterOpacity, translateX: posterTranslateXRight}}
                        >
                            <img src={movies[2].poster} alt={movies[2].name} className={"w-full h-full object-cover"}/>
                        </motion.div>
                    </div>
                </div>
            </div>

            <motion.div className={"-mt-[calc((100vh-(300px*(16/9)))/2)]"}
                        variants={{
                            active: { opacity: 1, y: 0 },
                            inactive: { opacity: 0, y: 20 },
                        }}
                        transition={{duration: 0.4}}
            >
                <SmallVideoCarousel movies={randomMoviesSet1}/>

                <div className={"[--duration:80s] [--carousel-offset:-6rem]"}>
                    <SmallVideoCarousel movies={randomMoviesSet2}/>
                </div>
            </motion.div>

        </motion.div>
    );
}