import { siteConfig } from "@/config/site";
import { Mail } from "lucide-react";
import { Icons } from "./icons";

export function SiteFooter() {
    return (
        <footer>
            <div className="mb-6 mt-14 flex flex-col items-center">
                <div className="mb-3 flex space-x-4">
                    <a href={siteConfig.links.repo} target="_blank" rel="noreferrer">
                        <span className="sr-only">GitHub Repo</span>
                        <Icons.gitHub className="w-6 h-6" />
                    </a>

                    <a href="mailto:bishwajeet.s22@iiits.in" target="_blank" rel="noreferrer">
                        <span className="sr-only">Email</span>
                        <Mail className="w-6 h-6" />
                    </a>

                    <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
                        <span className="sr-only">LinkedIn</span>
                        <Icons.linkedIn className="w-6 h-6" />
                    </a>

                    <a href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
                        <span className="sr-only">Twitter</span>
                        <Icons.twitter className="w-6 h-6" />
                    </a>

                    <a href={siteConfig.links.discord} target="_blank" rel="noreferrer">
                        <span className="sr-only">Discord</span>
                        <Icons.discord className="w-6 h-6" />
                    </a>

                    <a href={siteConfig.links.portfolio} target="_blank" rel="noreferrer">
                        <span className="sr-only">Portfolio</span>
                        <Icons.portfolio className="w-6 h-6" />
                    </a>
                </div>

                    <div className="mb-2 flex space-x-2 text-sm text-muted-foreground">
                        <span>Designed & Built by</span>
                        <a href={siteConfig.links.github} target="_blank" rel="noreferrer" className="font-bold">
                            {siteConfig.author}
                        </a>
                    </div>
            </div>
        </footer>
    );
}