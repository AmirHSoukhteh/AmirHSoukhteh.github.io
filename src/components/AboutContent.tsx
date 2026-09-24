import Image from 'next/image';
import { aboutConfig } from '@/config/about';

export default function AboutContent() {
  return (
    <section className="relative z-20 mx-auto mt-28 mb-16 w-full max-w-5xl px-4 sm:mt-32 sm:px-6 lg:px-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
          {aboutConfig.title}
        </h1>

        <div className="mt-7 grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-14">
          <div className="min-w-0">
            <p className="text-base leading-7 text-neutral-600 dark:text-neutral-400 sm:text-lg sm:leading-8">
              {aboutConfig.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {aboutConfig.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-neutral-200 px-3 py-1.5 text-sm text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex min-w-0 justify-center md:justify-end">
            <div className="relative aspect-square w-full max-w-[22.5rem] overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
              <Image
                src={aboutConfig.image}
                alt="Profile"
                fill
                sizes="(max-width: 768px) 90vw, 360px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,1fr)_minmax(16rem,0.38fr)] md:gap-14">
        <div className="min-w-0">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            {aboutConfig.experience.title}
          </h2>

          <div className="mt-8">
            {aboutConfig.experience.items.map((item, index) => (
              <div
                key={`${item.period}-${item.role}`}
                className="relative border-l border-neutral-200 pb-10 pl-10 last:pb-0 dark:border-neutral-700"
              >
                <div className="absolute left-0 top-0 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-neutral-300 bg-white dark:border-neutral-700 dark:bg-neutral-950">
                  <svg className="h-6 w-6 text-neutral-700 dark:text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>

                <p className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-400 dark:text-neutral-500">
                  {item.period}
                </p>
                <h3 className="mt-2 text-lg font-bold text-neutral-900 dark:text-neutral-100">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  {item.company}
                </p>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <aside className="min-w-0">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            {aboutConfig.connect.title}
          </h2>
          <p className="mt-6 text-base leading-7 text-neutral-600 dark:text-neutral-400">
            {aboutConfig.connect.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium">
            <a
              href={aboutConfig.connect.links.twitter.url}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-600 underline underline-offset-4 hover:text-indigo-500"
            >
              {aboutConfig.connect.links.twitter.text}
            </a>
            <a
              href={aboutConfig.connect.links.email.url}
              className="text-indigo-600 underline underline-offset-4 hover:text-indigo-500"
            >
              {aboutConfig.connect.links.email.text}
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
