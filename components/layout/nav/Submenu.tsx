import Link from 'next/link'

const navStyles = 'text-sm text-blue-700 font-semibold px-4 hover:underline'

export const Submenu = () => {
  return (
    <ul className="flex md:items-center space-y-6 md:space-y-0">
      <li>
        <Link href="/developers">
          <a title="Developers" className={navStyles}>
            Developers
          </a>
        </Link>
        <Link href="/free-trial">
          <a title="Free trial" className={navStyles}>
            Free trial
          </a>
        </Link>
      </li>
    </ul>
  )
}
