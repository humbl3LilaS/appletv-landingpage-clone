import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";

function App() {


    return (
        <>
            <Header/>
            <main className={"h-[300vh]"}>
                <Hero/>
            </main>
        </>
    );
}

export default App;
