import Link from 'next/link'

import { postManLinks } from '@/config/postmanLinks'

export const PostmanLinks = () => {
  return (
    <ul>
      {postManLinks.map((link) => (
        <li key={link.title}>
          <Link
            href={link.url}
            title={link.title}
            target="_blank"
            rel="noreferrer"
            data-heap={link.heapTracker}
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
