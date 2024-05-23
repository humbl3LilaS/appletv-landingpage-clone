import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import Usps from "./components/Usps.tsx";
import ThreeColLayout from "./ThreeColLayout.tsx";

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
            </main>
        </>
    );
}

export default App;
