import {Movie} from "../util/movie.ts";


type props = {
    movies: Movie[];
}

export default function SmallVideoCarousel({movies}: props) {
    return (
        <div className={"mb-5 overflow-clip last:mb-0"}>
            <div
                className={"w-full flex gap-3 relative left-[var(--carousel-offset,0px)]  animate-carousel-move"}>
                {
                    movies.map((movie, idx) =>
                        <div className={"w-[23vw] aspect-video shrink-0 "} key={`${movie.name}-${idx}`}>
                            <img src={movie.poster} alt={movie.name}
                                 className={"w-full h-full object-cover rounded-xl"}/>
                        </div>
                    )
                }
            </div>
        </div>
    );
}