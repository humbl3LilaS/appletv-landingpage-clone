import Container from "./Container.tsx";
import FadeIn from "./FadeIn.tsx";

export default function Usps() {
    return (
        <Container className={"relative  py-36 space-y-12 text-4xl text-white font-bold z-10"}>
            <FadeIn>
                <p>New Apple Originals every months - always ad-free</p>
            </FadeIn>
            <FadeIn>
                <p>
                    Stream on Apple TV on Apple Devices, smart TVs, consoles, or sticks
                </p>
            </FadeIn>
            <FadeIn>
                <p>
                    Watch in 4K HDR videos immersive Spatial Audio
                </p>
            </FadeIn>
            <FadeIn>
                <p>
                    Share a single subscription with up to five people
                </p>
            </FadeIn>
        </Container>
    );
}