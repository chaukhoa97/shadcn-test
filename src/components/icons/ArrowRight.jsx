import { cn } from '@/lib/utils'

function ArrowRight({ className = '', toggleOnHover = false, ...props }) {
  return (
    <svg
      className={cn(
        'inline-block h-5 w-5 lg:h-6 lg:w-6',
        toggleOnHover && 'hidden group-hover:inline-block',
        className,
      )}
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.572 6.914l6.07 6.07-6.07 6.07M3.642 12.984h16.83"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ArrowRight
