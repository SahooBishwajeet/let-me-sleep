import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Icons } from "./icons";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
    return(
        <header className="sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center">
                <MainNav />
                <div className="flex flex-1 items-center justify-end space-x-2">
                    <nav className="fex items-center">
                        <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
                            <div className={cn(
                                buttonVariants({ variant: "ghost" }),
                                "w-10 px-0 hidden sm:inline-flex"
                            )}>
                                <Icons.gitHub className="h-full w-full" />
                                <span className="sr-only">GitHub</span>
                            </div>
                        </Link>
                        
                        <Link href={siteConfig.links.discord} target="_blank" rel="noreferrer">
                            <div className={cn(
                                buttonVariants({ variant: "ghost" }),
                                "w-10 px-0 hidden sm:inline-flex"
                            )}>
                                <Icons.discord className="h-full w-full" />
                                <span className="sr-only">Discord</span>
                            </div>
                        </Link>

                        <Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
                            <div className={cn(
                                buttonVariants({ variant: "ghost" }),
                                "w-10 px-0 hidden sm:inline-flex"
                            )}>
                                <Icons.linkedIn className="h-full w-full" />
                                <span className="sr-only">LinkedIn</span>
                            </div>
                        </Link>

                        <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
                            <div className={cn(
                                buttonVariants({ variant: "ghost" }),
                                "w-10 px-0 hidden sm:inline-flex"
                            )}>
                                <Icons.twitter className="h-full w-full" />
                                <span className="sr-only">Twitter</span>
                            </div>
                        </Link>

                        <Link href={siteConfig.links.portfolio} target="_blank" rel="noreferrer">
                            <div className={cn(
                                buttonVariants({ variant: "ghost" }),
                                "w-10 px-0 hidden sm:inline-flex"
                            )}>
                                <Icons.portfolio className="h-full w-full" />
                                <span className="sr-only">Portfolio</span>
                            </div>
                        </Link>

                        <MobileNav />
                    </nav>
                </div>
            </div>
        </header>
    );
}