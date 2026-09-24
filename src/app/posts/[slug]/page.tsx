import { promises as fs } from 'fs';
import path from 'path';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { postsConfig } from "@/config/posts";
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return postsConfig.posts.map((post) => ({
    slug: post.slug.replace('posts/', ''),
  }));
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = postsConfig.posts.find((p) => p.slug === `posts/${slug}`);

  if (!post) {
    notFound();
  }

  const postSlug = post.slug.replace('posts/', '');
  const postHtmlPath = path.join(
    process.cwd(),
    'generated',
    'posts',
    `${postSlug}.html`,
  );

  let postHtml: string = post.html;

  try {
    postHtml = await fs.readFile(postHtmlPath, 'utf8');
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`Falling back to config HTML for ${postSlug}:`, error);
    }
  }

  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:28px_48px]" />
        <div className="absolute left-1/2 top-0 h-[90vw] w-[90vw] max-h-[1200px] max-w-[1200px] -translate-x-1/2 rounded-full bg-neutral-400 opacity-10 blur-[100px]" />
      </div>

      <Navbar />

      <main className="relative z-10 flex-1">
        <article className="mx-auto mt-28 mb-16 w-full max-w-4xl px-4 sm:mt-32 sm:px-6 lg:px-8">
          <div className="prose prose-neutral max-w-none break-words dark:prose-invert prose-headings:scroll-mt-24 sm:prose-lg">
            <div dangerouslySetInnerHTML={{ __html: postHtml }} />
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
