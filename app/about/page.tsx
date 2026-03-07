export const metadata = {
  title: 'About',
}

export default function About() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        About Me
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p className="mb-4">
          Hi! I'm Maksim Mironov, a software developer passionate about building web applications and exploring new technologies.
        </p>
        <p className="mb-4">
          This website showcases my personal projects, technical blog posts, and experiments with various technologies. 
          I enjoy working with modern web frameworks, automation tools, and creating useful applications.
        </p>
        <h2 className="mt-8 mb-4 text-xl font-semibold">Skills & Interests</h2>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Web Development (React, Next.js, TypeScript)</li>
          <li>Python Development & Automation</li>
          <li>Browser Extensions</li>
          <li>Data Processing & Analysis</li>
          <li>API Integration</li>
        </ul>
        <h2 className="mt-8 mb-4 text-xl font-semibold">Contact</h2>
        <p className="mb-4">
          Feel free to reach out if you'd like to collaborate on a project or just want to connect!
        </p>
      </div>
    </section>
  )
}
