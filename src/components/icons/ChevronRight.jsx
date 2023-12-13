function ChevonRight({ className = '', ...props }) {
  return (
    <svg
      className={`inline-block h-5 w-5 lg:h-6 lg:w-6 ${className}`}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.83771 20.5435L16.3577 14.0235C17.1277 13.2535 17.1277 11.9935 16.3577 11.2235L9.83771 4.70349"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ChevonRight
