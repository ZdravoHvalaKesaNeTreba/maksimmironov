import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Mironov Maksim personal blog and services
      </h1>
      <p className="mb-4">
        {`Enjoy using my pet projects and feel free to message me`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
