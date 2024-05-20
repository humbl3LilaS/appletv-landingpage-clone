import {ComponentProps} from "react";
import {twMerge} from "tailwind-merge";
import {cva, VariantProps} from "class-variance-authority";

type Props = VariantProps<typeof button> & ComponentProps<"button">

const button = cva(["rounded-full "], {
    variants: {
        size: {
            sm: ["text-xs px-2 py-1"],
            md: ["text-sm px-5 py-2"],
            lg: ["text-base px-8 py-5"]
        },
        bg: {
            white: ["bg-white text-textBlack"],
            black: ["bg-backgroundContrast text-white"]
        }
    },
    defaultVariants: {
        size: "md",
        bg: "white"
    }
});

export default function Button({size, bg, className, children, ...props}: Props) {

    return (
        <button className={twMerge(button({size, bg}), className)} {...props}>
            {children}
        </button>
    );
}