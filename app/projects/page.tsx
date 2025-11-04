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
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/example/project1"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Project 1 - Description</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/example/project2"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Project 2 - Description</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/example/project3"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Project 3 - Description</p>
          </a>
        </li>
      </ul>
    </section>
  )
}