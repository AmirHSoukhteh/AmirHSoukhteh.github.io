import Image from 'next/image';
import { projectsConfig } from '@/config/projects';

export default function ProjectsContent() {
  return (
    <section className="relative z-20 mx-auto mt-28 mb-16 w-full max-w-6xl px-4 sm:mt-32 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
          {projectsConfig.title}
        </h1>
        <p className="mt-4 text-base leading-7 text-neutral-600 dark:text-neutral-400 sm:text-lg sm:leading-8">
          {projectsConfig.description}
        </p>
      </div>

      <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projectsConfig.items.map((project) => (
          <a
            key={project.title}
            href={project.href}
            target={project.href.startsWith('http') ? '_blank' : undefined}
            rel={project.href.startsWith('http') ? 'noreferrer' : undefined}
            className="group relative block min-w-0 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-4 dark:focus-visible:ring-neutral-400 dark:focus-visible:ring-offset-neutral-950"
          >
            <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-2xl border border-dashed border-neutral-300 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2 dark:border-neutral-700" />
            <div className="relative rounded-2xl border border-dashed border-neutral-300 bg-white p-3 transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-950 sm:p-4">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  sizes="(max-width: 639px) 92vw, (max-width: 1023px) 46vw, 31vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="mt-4 min-w-0 px-1 pb-1">
                <div className="flex items-start gap-2">
                  <h2 className="min-w-0 flex-1 text-base font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-lg">
                    {project.title}
                  </h2>
                  <svg
                    className="mt-1 h-3.5 w-3.5 shrink-0 -rotate-45 text-neutral-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-neutral-400"
                    viewBox="0 0 13 15"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M5.33 2.33 10.83 7.83 5.33 13.33M10.83 7.83H1.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <p className="mt-1 line-clamp-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                  {project.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
