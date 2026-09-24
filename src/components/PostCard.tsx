import Link from "next/link";
import Image from "next/image";

interface PostCardProps {
  title: string;
  description: string;
  date: string;
  href: string;
  pattern?: 'dots' | 'grid' | 'waves' | 'circles';
  imageUrl?: string;
  readingTime: number;
}

export default function PostCard({
  title,
  description,
  date,
  href,
  pattern = 'dots',
  imageUrl = '/placeholder.jpg',
  readingTime,
}: PostCardProps) {
  const patterns = {
    dots: "bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] dark:bg-[radial-gradient(#404040_1px,transparent_1px)]",
    grid: "bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] dark:bg-[linear-gradient(#404040_1px,transparent_1px),linear-gradient(90deg,#404040_1px,transparent_1px)]",
    waves: "bg-[linear-gradient(45deg,transparent_25%,#e5e7eb_25%,#e5e7eb_50%,transparent_50%,transparent_75%,#e5e7eb_75%)] [background-size:20px_20px] dark:bg-[linear-gradient(45deg,transparent_25%,#404040_25%,#404040_50%,transparent_50%,transparent_75%,#404040_75%)]",
    circles: "bg-[radial-gradient(circle_at_center,#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] dark:bg-[radial-gradient(circle_at_center,#404040_1px,transparent_1px)]",
  };

  return (
    <Link
      href={href}
      className="group block min-w-0 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-4 dark:focus-visible:ring-neutral-400 dark:focus-visible:ring-offset-neutral-950"
    >
      <article className="relative rounded-2xl border border-dashed border-neutral-300 p-3 transition-all duration-300 group-hover:border-neutral-400 dark:border-neutral-700 dark:group-hover:border-neutral-600 sm:p-4">
        <div className="absolute inset-0 overflow-hidden rounded-2xl bg-white dark:bg-neutral-950">
          <div className={`absolute inset-0 ${patterns[pattern]} opacity-50`} />
        </div>

        <div className="absolute inset-0 rounded-2xl border border-dashed border-neutral-300 opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100 dark:border-neutral-700" />

        <div className="relative flex min-w-0 flex-col gap-5 sm:flex-row sm:items-center sm:gap-7">
          <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-xl sm:aspect-[4/3] sm:w-52 md:w-60 lg:w-64">
            <Image
              src={imageUrl}
              alt={title}
              fill
              sizes="(max-width: 639px) 90vw, (max-width: 1023px) 240px, 256px"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>

          <div className="min-w-0 flex-1 px-1 pb-1 sm:py-1">
            <div className="flex items-start gap-2">
              <h2 className="min-w-0 text-lg font-bold leading-tight tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-xl lg:text-2xl">
                {title}
              </h2>
              <svg
                className="mt-1 h-4 w-4 shrink-0 -translate-x-1 text-neutral-500 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 dark:text-neutral-400"
                viewBox="0 0 13 15"
                fill="none"
                aria-hidden="true"
              >
                <path d="M5.33 2.33 10.83 7.83 5.33 13.33M10.83 7.83H1.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400 sm:text-base">
              {description}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-neutral-500 dark:text-neutral-400 sm:text-sm">
              <span>Posted on {date}</span>
              <span className="inline-flex items-center">
                <svg className="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {readingTime} min read
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
