'use client';

import Link from 'next/link';
import { homeConfig } from '@/config/home';

export default function HomeContent() {
  return (
    <section className="relative flex min-h-screen flex-1 items-center overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-28">

      {/* Light theme background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat dark:hidden"
        style={{
          backgroundImage: "url('/assets/images/home-background-light.png')",
        }}
      />

      {/* Dark theme background */}
      <div
        className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat dark:block"
        style={{
          backgroundImage: "url('/assets/images/home-background.png')",
        }}
      />

      {/* Theme-specific overlay */}
      <div className="absolute inset-0 bg-white/45 dark:bg-black/55" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">

          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-neutral-700 dark:text-neutral-300">
            Data Analyst
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl md:text-5xl">
            {homeConfig.greeting}
          </h1>

          <p className="mt-4 max-w-xl text-base leading-7 text-neutral-700 dark:text-neutral-300 sm:text-lg sm:leading-8">
            {homeConfig.description}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">

            <Link
              href="/about"
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-neutral-800 hover:shadow-lg dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
            >
              View About

              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>

            <Link
              href="/projects"
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-white/80 px-4 py-2.5 text-sm font-medium text-neutral-900 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-lg dark:border-white/30 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              {homeConfig.buttons.myWorks}

              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}