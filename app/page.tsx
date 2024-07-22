import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn, sortPosts } from "@/lib/utils";
import { posts } from "#site/content";
import Link from "next/link";
import { PostItem } from "@/components/post-item";

export default function Home() {
  const LATEST_POSTS_COUNT = 5;
  const latestPosts = sortPosts(posts).slice(0, LATEST_POSTS_COUNT);

  return (
    <>
      <section className="space-y-6 pt-6 md:pb-12 md:mt-10 lg:py-32">
        <div className="container flex flex-col gap-4 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance">
            Hello, I&apos;m Bishwajeet 👋
          </h1>

          <p className="max-w-[64rem] mx-auto mt-10 text-muted-foreground sm:text-xl text-balance">
            Welcome to &quot;Let Me Sleep&quot;, a Blog, or what I like to call
            &quot;Brain Dump&quot;, where the boundaries of thought and
            creativity are limitless. Here, you&apos;ll find a tapestry of
            ideas, reflections, and musings that span a myriad of topics.
            Whether you&apos;re looking for deep dives into technology,
            explorations of artistic endeavors, or just random thoughts that pop
            into my mind, this space serves as both a personal brain dump and a
            shared journey with you.
          </p>

          <p className="max-w-[64rem] mx-auto mt-6 text-muted-foreground sm:text-xl text-balance">
            A significant portion of this blog is dedicated to my tech-related
            content and the various projects I&apos;m working on. Here,
            I&apos;ll share detailed accounts of my coding adventures,
            development processes, and the challenges and triumphs I encounter
            along the way. You&apos;ll get an inside look at how I tackle
            complex problems, implement innovative solutions, and continuously
            learn and grow in the field of technology. Whether you&apos;re a
            fellow coder, a tech enthusiast, or simply curious about the inner
            workings of software development, these posts will provide valuable
            insights and inspiration.
          </p>

          <div className="flex flex-col mt-16 gap-4 justify-center sm:flex-row">
            <Link
              href="/dump"
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "w-full sm:w-fit"
              )}
            >
              View The Dumps
            </Link>

            <Link
              href={siteConfig.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "w-full sm:w-fit"
              )}
            >
              Reveal The Sauce
            </Link>
          </div>
        </div>
      </section>

      <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-30">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center">
          Latest Posts
        </h2>

        <ul className="flex flex-col">
          {latestPosts.map(
            (post) =>
              post.published && (
                <li
                  key={post.slug}
                  className="first:border-t first:border-border"
                >
                  <PostItem
                    slug={post.slug}
                    title={post.title}
                    description={post.description}
                    date={post.date}
                    tags={post.tags}
                  />
                </li>
              )
          )}
        </ul>
      </section>
    </>
  );
}
