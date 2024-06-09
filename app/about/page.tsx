import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About Me",
    description: "Get to know me better",
}

export default async function About() {
    return (
        <div className="container max-w-6xl py-6 lg:py-10">
            <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
                <div className="flex-1 space-x-4">
                    <h1 className="inline-block font-black text-4xl lg:text-5xl">
                        About Me
                    </h1>
                </div>
            </div>

            <hr className="my-8" />
            
            <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
                <div className="min-w-96 max-w-96 flex flex-col gap-2 items-center">
                    <Avatar className="h-64 w-64" >
                        <AvatarImage src="/avatar.jpg" alt={siteConfig.author} />
                        <AvatarFallback>{siteConfig.author}</AvatarFallback>
                    </Avatar>

                    <h2 className="text-2xl font-bold text-center break-words">
                        {siteConfig.author}
                    </h2>

                    <div className="flex flex-wrap gap-2 justify-center mt-6">
                        <Button variant="secondary">
                            Competitive Programmer
                        </Button>
                        <Button variant="secondary">
                            Web Developer
                        </Button>
                        <Button variant="secondary">
                            Machine Learning Enthusiast
                        </Button>
                        <Button variant="secondary">
                            Graphics Designer
                        </Button>
                        <Button variant="secondary">
                            Novice App & Game Developer
                        </Button>
                    </div>

                </div>
                <div>

                <p className="text-muted-foreground text-lg py-4">
                I am Bishwajeet Sahoo, a Computer Science undergraduate at the Indian Institute of Information Technology, Sri City. My journey through technology and creativity has shaped a diverse skill set and a clear career vision. I strive for perfection, ensuring every endeavor meets high standards without any margin of error.
                </p>
                <p className="text-muted-foreground text-lg py-4">
                Precision and thoroughness define my work, accompanied by a strong technical inclination. I value knowledge and strive to stay organized and proactive in all my endeavors.
                My ambition is to master coding, competitive programming, and development, aiming for excellence in my career.
                </p>
                <p className="text-muted-foreground text-lg py-4">
                Apart from tech, my hobbies include cooking, playing music, painting, graphic design, animations, and 3D modeling. I contribute to college clubs with design and tech-related projects, blending creativity with technical skills.
                </p>

                <Link href={siteConfig.links.portfolio} className={cn(
                    buttonVariants({ variant: "link" }), "px-0")}>
                        Know More About Me ...
                </Link>
                </div>
            </div>
        </div>  
    );
}