import {movies, randomMoviesSet1, randomMoviesSet2} from "../util/movie.ts";
import SmallVideoCarousel from "./SmallVideoCarousel.tsx";

export default function VideoCarousel() {
    return (
        <div className={"bg-background pb-8"}>

            <div className={"overflow-clip"}>
                <div className={"left-1/2 mb-5 flex -translate-x-1/2 gap-5 "}>
                    <div className={"w-[60vw] aspect-video shrink-0 rounded-2xl overflow-clip"}>
                        <img src={movies[0].poster} alt={movies[0].name} className={"w-full h-full object-cover"}/>
                    </div>

                    <div className={"w-[60vw] aspect-video shrink-0  rounded-2xl overflow-clip"}>
                        <img src={movies[1].poster} alt={movies[1].name} className={"w-full h-full object-cover"}/>
                    </div>

                    <div className={"w-[60vw] aspect-video shrink-0  rounded-2xl overflow-clip"}>
                        <img src={movies[2].poster} alt={movies[2].name} className={"w-full h-full object-cover"}/>
                    </div>
                </div>
            </div>

            <SmallVideoCarousel movies={randomMoviesSet1}/>

            <div className={"[--duration:80s] [--carousel-offset:-6rem]"}>
                <SmallVideoCarousel movies={randomMoviesSet2}/>
            </div>

        </div>
    );
}