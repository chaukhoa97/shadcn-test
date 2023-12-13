function ArrowDown({ className = '', ...props }) {
  return (
    <svg
      className={`inline-block h-5 w-5 lg:h-6 lg:w-6 ${className}`}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.205 9.573l-6.52 6.52c-.77.77-2.03.77-2.8 0l-6.52-6.52"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ArrowDown
