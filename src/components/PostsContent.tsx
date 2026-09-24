"use client";

import { useState } from "react";
import { postsConfig } from "@/config/posts";
import PostsSearch from "./PostsSearch";
import PostCard from "@/components/PostCard";

const POSTS_PER_PAGE = 5;

export default function PostsContent() {
  const totalPages = Math.ceil(postsConfig.posts.length / POSTS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = postsConfig.posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <section className="relative z-20 mx-auto mt-28 mb-16 w-full max-w-5xl px-4 sm:mt-32 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
          {postsConfig.title}
        </h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-neutral-600 dark:text-neutral-400 sm:text-lg sm:leading-8">
          {postsConfig.description}
        </p>
      </div>

      <div className="flex w-full flex-col gap-5">
        {currentPosts.map((post) => (
          <PostCard
            key={post.slug}
            title={post.title}
            description={post.description}
            date={post.date}
            href={`/${post.slug}`}
            pattern="dots"
            imageUrl={post.image}
            readingTime={parseInt(post.readTime, 10)}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-40 dark:text-neutral-400 dark:hover:bg-neutral-900"
          >
            {postsConfig.pagination.previous}
          </button>

          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              aria-current={page === currentPage ? "page" : undefined}
              className={`h-9 w-9 rounded-full text-sm font-medium transition-colors ${
                page === currentPage
                  ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900"
                  : "text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-900"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
            className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-40 dark:text-neutral-400 dark:hover:bg-neutral-900"
          >
            {postsConfig.pagination.next}
          </button>
        </div>
      )}

      <PostsSearch />
    </section>
  );
}
