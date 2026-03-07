export const metadata = {
  title: 'My Projects',
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Projects
      </h1>
      <p className="mb-4">
        Here are some of my personal projects hosted on GitHub. Feel free to explore and contribute!
      </p>
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-4">
        <li>
          <a
            className="flex items-start transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
            rel="noopener noreferrer"
            target="_blank"
            href="/blog/telegram-parser-project"
          >
            <span className="flex-shrink-0 mt-[5px]">
              <ArrowIcon />
            </span>
            <p className="ml-2 leading-normal">Project 1 - Telegram channels parser for collecting data (img, txt) into a Spreashsheet table with descring via ChatGPT</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-start transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
            rel="noopener noreferrer"
            target="_blank"
            href="/blog/dear-edit-project"
          >
            <span className="flex-shrink-0 mt-[5px]">
              <ArrowIcon />
            </span>
            <p className="ml-2 leading-normal">Project 2 - Dear Edit: online checker for PR and educational articles</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-start transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
            rel="noopener noreferrer"
            target="_blank"
            href="/blog/chrome-extension-bookmarks"
          >
            <span className="flex-shrink-0 mt-[5px]">
              <ArrowIcon />
            </span>
            <p className="ml-2 leading-normal">Project 3 - Chrome extension: storage for personal bookmarks and some services</p>
          </a>
        </li>
      </ul>
    </section>
  )
}