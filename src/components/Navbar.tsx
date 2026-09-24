'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import { globalConfig } from '@/config/global';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  if (!mounted) {
    return null;
  }

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50 h-20">
      <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between border-b border-transparent px-4 sm:px-6 lg:rounded-b-xl lg:border-l lg:border-r lg:px-8">
        <Link
          href="/"
          className="relative z-50 flex shrink-0 items-center gap-1.5 text-base font-semibold text-black dark:text-white"
          aria-label={`${globalConfig.site.author} home`}
        >
          <span className="text-xl -translate-y-0.5 transition-transform duration-300 group-hover:-rotate-12">
            ✦
          </span>
          <span className="-translate-y-0.5">{globalConfig.site.author}</span>
        </Link>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="relative z-50 inline-flex h-10 w-10 items-center justify-center rounded-lg text-neutral-700 transition-colors hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-900 sm:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isMenuOpen ? (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>

          {isMenuOpen && (
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-30 bg-white/80 backdrop-blur-sm dark:bg-neutral-950/80 sm:hidden"
            />
          )}

          <nav
            id="mobile-navigation"
            aria-label={globalConfig.navigation.aria}
            className={[
              'absolute left-4 right-4 top-[calc(100%-4px)] z-40 rounded-2xl border border-dashed border-neutral-300 bg-white/95 p-2 shadow-lg backdrop-blur-sm dark:border-neutral-700 dark:bg-neutral-950/95 sm:static sm:flex sm:items-center sm:gap-1 sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none sm:backdrop-blur-0 dark:sm:bg-transparent',
              isMenuOpen ? 'block' : 'hidden sm:flex',
            ].join(' ')}
          >
            {globalConfig.navigation.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={[
                  'block rounded-xl px-4 py-3 text-center text-sm font-medium tracking-wide transition-colors sm:px-3 sm:py-2',
                  isActive(item.href)
                    ? 'bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-white'
                    : 'text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-white',
                ].join(' ')}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="relative z-50">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
