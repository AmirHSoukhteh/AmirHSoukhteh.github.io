import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Post {
  title: string;
  description: string;
  date: string;
  readTime: string;
  slug: string;
  image: string;
  html: string;
}

export default function PostContent({ post }: { post: Post }) {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <div className="relative flex flex-1 flex-col">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:28px_48px]" />
          <div className="absolute left-1/2 top-0 h-[90vw] w-[90vw] max-h-[1200px] max-w-[1200px] -translate-x-1/2 rounded-full bg-neutral-400 opacity-10 blur-[100px]" />
        </div>

        <Navbar />

        <article className="relative z-20 mx-auto mt-28 mb-16 w-full max-w-4xl px-4 sm:mt-32 sm:px-6 lg:px-8">
          <div className="prose prose-neutral max-w-none break-words dark:prose-invert prose-headings:scroll-mt-24 sm:prose-lg">
            <h1>{post.title}</h1>
            <div className="not-prose mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <time>{post.date}</time>
              <span aria-hidden="true">•</span>
              <span>{post.readTime}</span>
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </article>
      </div>

      <Footer />
    </main>
  );
}
