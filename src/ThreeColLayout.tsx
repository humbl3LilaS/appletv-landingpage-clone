import Container from "./components/Container.tsx";
import Button from "./components/Button.tsx";
import FadeIn from "./components/FadeIn.tsx";

export default function ThreeColLayout() {
    return (
        <FadeIn>
            <Container className={"pb-36 grid grid-cols-3 grid-rows-[300px]"}>
                <div className={"px-5 flex flex-col justify-between items-start  text-white "}>
                    <h2 className={"mb-5 font-bold text-2xl"}>
                        Buy an Apple Device
                    </h2>
                    <p className={"mb-4 font-bold text-3xl"}>
                        3 months free
                    </p>
                    <p className={"mb-6 font-light text-textGray"}>
                        Apple TV + included for 3 months when you purchase an Apple device
                        and redeem the offer within 90days.
                    </p>
                    <Button size={"lg"} className={"min-w-[220px] font-bold"}>
                        Check eligibility
                    </Button>
                </div>
                <div className={"px-5 flex flex-col justify-between items-start  text-white "}>
                    <h2 className={"mb-5 font-bold text-2xl"}>
                        Free 7-day Trail
                    </h2>
                    <p className={"mb-4 font-bold text-3xl"}>
                        $9.99/mo
                    </p>
                    <p className={"mb-6 font-light text-textGray"}>
                        A monthly subscription is just $9.99 per month after a free 7-day trail.
                        share apple TV+ with your family
                    </p>
                    <Button size={"lg"} className={"min-w-[220px] font-bold"}>
                        Try it free
                    </Button>
                </div>
                <div className={"px-5 flex flex-col justify-between items-start  text-white "}>
                    <h2 className={"mb-5 font-bold text-2xl"}>
                        Free 1-month Trial
                    </h2>
                    <p className={"mb-4 font-bold text-3xl"}>
                        Apple One
                    </p>
                    <p className={"mb-6 font-light text-textGray"}>
                        Bundle Apple TV+ with up to five other great services for one low monthly price.
                        And enjoy more for less <br/>
                        <a href={"#"}>Learn more {">"} </a>
                    </p>
                    <Button size={"lg"} className={"min-w-[220px] font-bold"}>
                        Try Apple One free
                    </Button>
                </div>
            </Container>
        </FadeIn>
    );
}