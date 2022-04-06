import Link from 'next/link'

interface ButtonProps {
  url: string
}

export const GraphQLButton = ({ url }: ButtonProps) => {
  return (
    <Link href={url}>
      <a
        title="Explore schema"
        className="inline-flex items-center px-4 py-2 text-xs font-semibold bg-indigo-600 text-white border border-indigo-600 rounded-lg focus:outline-none hover:bg-indigo-700 hover:border-indigo-700 focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          focusable="false"
          className="w-3 h-3 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="48px"
          height="48px"
        >
          <path
            fill="currentColor"
            d="M24.5,45.161L7,34.82V14.18L24.5,3.839L42,14.18V34.82L24.5,45.161z M9,33.68l15.5,9.159L40,33.68 V15.32L24.5,6.161L9,15.32V33.68z"
          />
          <circle cx="24.5" cy="5.5" r="3.5" fill="currentColor" />
          <circle cx="24.5" cy="43.5" r="3.5" fill="currentColor" />
          <circle cx="8.5" cy="33.5" r="3.5" fill="currentColor" />
          <circle cx="40.5" cy="33.5" r="3.5" fill="currentColor" />
          <circle cx="8.5" cy="15.5" r="3.5" fill="currentColor" />
          <circle cx="40.5" cy="15.5" r="3.5" fill="currentColor" />
          <path
            fill="currentColor"
            d="M42.72,35H6.28L24.5,2.978L42.72,35z M9.72,33H39.28L24.5,7.022L9.72,33z"
          />
        </svg>
        Explore schema
      </a>
    </Link>
  )
}
