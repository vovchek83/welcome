import type { PropsWithChildren } from "react";
import { tv, type VariantProps } from "tailwind-variants";


const buttonStyle = tv({
    base: "w-24 p-2 rounded-lg hover:cursor-pointer",
    variants: {
        type: {
            primary: "bg-green-500 ",
            secondary: "bg-transparent border-2 border-green-500 text-green-500 ",
        }, 
        disabled: {
            true: "opacity-50",
        },
    },
    
     defaultVariants: {
            type: "primary",
        },
});

type ButtonVariants = VariantProps<typeof buttonStyle>;

type ButtonProps = PropsWithChildren<ButtonVariants>;

export default function Button({ children, ...variantProps }: ButtonProps) {
  return (
    <button className={buttonStyle(variantProps)}>
      {children}
    </button>
  )
}


