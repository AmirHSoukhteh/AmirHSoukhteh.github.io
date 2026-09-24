'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { homeConfig } from '@/config/home';

function ThemeAwareImage() {
  const [mounted, setMounted] = useState(false);
  const [imageSrc, setImageSrc] = useState('/assets/images/tech-background-light.svg');

  useEffect(() => {
    setMounted(true);

    const updateImage = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setImageSrc(
        isDark
          ? '/assets/images/tech-background.svg'
          : '/assets/images/tech-background-light.svg',
      );
    };

    updateImage();

    const observer = new MutationObserver(updateImage);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  if (!mounted) {
    return <div className="aspect-square w-full max-w-[30rem]" aria-hidden="true" />;
  }

  return (
    <div className="relative aspect-square w-full max-w-[30rem]">
      <img
        src={imageSrc}
        alt=""
        aria-hidden="true"
        className="h-full w-full object-contain transition-transform duration-300 hover:scale-[1.03]"
      />
    </div>
  );
}

export default function HomeContent() {
  return (
    <section className="flex flex-1 items-center pt-28 pb-16 sm:pt-32 lg:pt-28">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 md:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:px-8">
        <div className="min-w-0 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
            Data Analyst
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl md:text-5xl">
            {homeConfig.greeting}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-neutral-600 dark:text-neutral-400 sm:text-lg sm:leading-8">
            {homeConfig.description}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/about"
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-neutral-800 hover:shadow-md dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
            >
              View About
              <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            <Link
              href="/projects"
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm font-medium text-neutral-900 transition-all duration-300 hover:bg-neutral-50 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
            >
              {homeConfig.buttons.myWorks}
              <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="flex min-w-0 justify-center lg:justify-end">
          <ThemeAwareImage />
        </div>
      </div>
    </section>
  );
}
