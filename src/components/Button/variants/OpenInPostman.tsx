import Link from 'next/link'

interface ButtonProps {
  postmanUrl: string
}

export const OpenInPostman = ({ postmanUrl }: ButtonProps) => {
  return (
    <Link href={postmanUrl}>
      <a
        title="Open in postman"
        target="_blank"
        className="inline-flex items-center px-4 py-2 text-xs font-semibold bg-[#ff6c37] text-white border border-orange-500 rounded-lg focus:outline-none hover:bg-orange-600 focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-orange-300"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          preserveAspectRatio="none"
          viewBox="0 0 330 330"
          focusable="false"
          className="w-3 h-3 mr-2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M37.728,328.12c2.266,1.256,4.77,1.88,7.272,1.88c2.763,0,5.522-0.763,7.95-2.28l240-149.999  c4.386-2.741,7.05-7.548,7.05-12.72c0-5.172-2.664-9.979-7.05-12.72L52.95,2.28c-4.625-2.891-10.453-3.043-15.222-0.4  C32.959,4.524,30,9.547,30,15v300C30,320.453,32.959,325.476,37.728,328.12z" />
        </svg>
        Open in Postman
      </a>
    </Link>
  )
}
