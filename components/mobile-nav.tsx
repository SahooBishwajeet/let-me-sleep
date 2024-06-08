"use client"

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { Icons } from "./icons";
import { siteConfig } from "@/config/site";


export function MobileNav() {
    const [open, setOpen] = useState(false);
    
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="outline" className="w-10 px-0 sm:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Menu Bar</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right">
                <MobileLink href="/" className="flex items-center" onOpenChange={setOpen}>
                    <Icons.logo className="mr-2 h-6 w-6" />
                    <span className="font-bold text-2xl">{siteConfig.name}</span>
                </MobileLink>
                <div className="flex flex-col gap-3 mt-5">
                    <MobileLink onOpenChange={setOpen} href="/dump">
                        Dump
                    </MobileLink>

                    <MobileLink onOpenChange={setOpen} href="/about">
                        About
                    </MobileLink>
                    
                    <Link target="_blank" rel="noreferrer" href={siteConfig.links.github}>
                        Github
                    </Link>
                    
                    <Link target="_blank" rel="noreferrer" href={siteConfig.links.discord}>
                        Discord
                    </Link>
                    
                    <Link target="_blank" rel="noreferrer" href={siteConfig.links.linkedin}>
                        LinkedIn
                    </Link>
                    
                    <Link target="_blank" rel="noreferrer" href={siteConfig.links.twitter}>
                        Twitter
                    </Link>
                    
                    <Link target="_blank" rel="noreferrer" href={siteConfig.links.portfolio}>
                        Portfolio
                    </Link>
                </div>
            </SheetContent>
        </Sheet>
    );
}

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  children,
  className,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}