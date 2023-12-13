import { cn } from '../lib/utils'
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  'ring-offset-background focus-visible:ring-ring group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl border font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:border-neutrals-lightest disabled:bg-neutrals-lightest disabled:text-neutrals-lighter',
  {
    variants: {
      variant: {
        primary:
          'border-primary-500 bg-primary-500 text-white hover:px-[18px] lg:hover:px-4',
        secondary:
          'border-primary-500 bg-white text-primary-500 hover:bg-primary-500 hover:px-[18px] hover:text-white disabled:border-neutrals-lightest disabled:bg-white lg:hover:px-4',
        tertiary:
          'border-transparent text-primary-500 hover:gap-4 disabled:border-transparent disabled:bg-white',
        inversePrimary:
          'border-white bg-white text-primary-500 hover:px-[18px] lg:hover:px-4',
        inverseSecondary:
          'border-white text-white hover:bg-white hover:px-[18px] hover:text-primary-500 disabled:border-neutrals-lighter disabled:bg-transparent lg:hover:px-4',
        inverseTertiary:
          'border-transparent text-white hover:gap-4 disabled:border-transparent disabled:bg-transparent',
        bluePrimary:
          'border-secondary-500 bg-secondary-500 text-white hover:px-[18px] lg:hover:px-4',
        blueSecondary:
          'border-secondary-500 bg-white text-secondary-500 hover:bg-secondary-500 hover:px-[18px] hover:text-white disabled:border-neutrals-lightest disabled:bg-white lg:hover:px-4',
        blueTertiary:
          'border-transparent text-secondary-500 hover:gap-4 disabled:bg-white',
        danger:
          'border-red-lightest bg-red-lightest text-red hover:px-[18px] lg:hover:px-4',
        warning:
          'border-yellow-lightest bg-yellow-lightest text-yellow hover:px-[18px] lg:hover:px-4',
      },
      size: {
        default: 'px-8 py-3.5 text-base lg:py-3 lg:text-lg',
        small: 'rounded-3xl px-4 py-[7px] text-sm lg:py-2',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  toggleArrowOnHover?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
