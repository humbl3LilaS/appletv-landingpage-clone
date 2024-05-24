import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import Usps from "./components/Usps.tsx";
import ThreeColLayout from "./ThreeColLayout.tsx";
import VideoCarousel from "./components/VideoCarousel.tsx";

function App() {


    return (
        <>
            <Header/>
            <main>
                <div className={"bg-background"}>
                    <Hero/>
                    <Usps/>
                    <ThreeColLayout/>
                </div>
                <VideoCarousel/>
                <div className={"h-[300vh]"}/>
            </main>
        </>
    );
}

export default App;
