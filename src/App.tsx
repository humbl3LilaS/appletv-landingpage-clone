import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import Usps from "./components/Usps.tsx";

function App() {


    return (
        <>
            <Header/>
            <main>
                <div className={"bg-background"}>
                    <Hero/>
                    <Usps/>
                </div>
            </main>
        </>
    );
}

export default App;
