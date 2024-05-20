import {ReactNode} from "react";
import {twMerge} from "tailwind-merge";

type Props = {
    children: ReactNode,
    className?: string,
}
export default function Container({children, className}: Props) {
    return (
        <div className={twMerge("max-w-[1000px] mx-auto px-6", className)}>
            {children}
        </div>
    )
}