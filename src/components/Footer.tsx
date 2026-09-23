'use client';

import Link from 'next/link';
import { globalConfig } from '@/config/global';

export default function Footer() {
  return (
    <section className="text-gray-700 bg-white border-t dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
      <div className="container flex flex-col items-center justify-center min-h-[40px] mx-auto px-7 max-w-7xl sm:flex-row sm:min-h-[50px]">
        <Link href="/" className="h-5 text-base group relative z-30 flex items-center space-x-1.5 text-black dark:text-white font-semibold">
          <span className="text-xl -translate-y-0.5 group-hover:-rotate-12 group-hover:scale-[1.2] ease-in-out duration-300">✦</span>
          <span className="-translate-y-0.5">{globalConfig.site.author}</span>
        </Link>
        
        <span className="inline-flex justify-center mt-2 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
          <a
            href={globalConfig.footer.social.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
          >
            <span className="sr-only">Telegram</span>

            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21.8 3.2 2.9 10.5c-1.3.5-1.3 1.2-.2 1.5l4.8 1.5 1.8 5.6c.2.6.1.8.7.8.5 0 .7-.2 1-.5l2.3-2.2 4.8 3.5c.9.5 1.5.3 1.7-.8l3.1-14.7c.3-1.3-.5-1.9-1.7-1.5ZM8.3 13.2l10.9-6.9c.5-.3.9-.1.5.2l-8.8 7.9-.3 3.4-1.3-4.1-1-.5Z" />
            </svg>
          </a> 
          <a href={globalConfig.footer.social.github} target="_blank" className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">
            <span className="sr-only">GitHub</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
            </svg>
          </a>

          <a href={`mailto:${globalConfig.footer.social.email}`} className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">
            <span className="sr-only">Email</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </span>
      </div>
    </section>
  );
} 