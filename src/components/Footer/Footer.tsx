import { getCurrentYear } from '../../utils/date'

export const Footer = () => {
  return (
    <footer className="text-sm leading-6 mt-12">
      {/* <div className="mb-10 text-slate-700 font-semibold flex items-center dark:text-slate-200">
        <a
          className="group flex items-center hover:text-slate-900 dark:hover:text-white"
          href="/docs/min-width"
        >
          <svg
            viewBox="0 0 3 6"
            className="mr-3 w-auto h-1.5 text-slate-400 overflow-visible group-hover:text-slate-600 dark:group-hover:text-slate-300"
          >
            <path
              d="M3 0L0 3L3 6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Min-Width
        </a>
        <a
          className="group ml-auto flex items-center hover:text-slate-900 dark:hover:text-white"
          href="/docs/height"
        >
          Height
          <svg
            viewBox="0 0 3 6"
            className="ml-3 w-auto h-1.5 text-slate-400 overflow-visible group-hover:text-slate-600 dark:group-hover:text-slate-300"
          >
            <path
              d="M0 0L3 3L0 6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div> */}
      <div className="pt-10 pb-28 border-t border-slate-200 sm:flex justify-between text-slate-500 dark:border-slate-200/5">
        <div className="mb-6 sm:mb-0 sm:flex">
          <p>Copyright © {getCurrentYear()} Awell Health</p>
        </div>
        <a
          className="hover:text-slate-900 dark:hover:text-slate-400"
          href="https://github.com/tailwindlabs/tailwindcss.com/edit/master/src/pages/docs/max-width.mdx"
        >
          Edit this page on GitHub
        </a>
      </div>
    </footer>
  )
}
