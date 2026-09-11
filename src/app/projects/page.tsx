import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Projects as ProjectsSection } from "@/components/sections/projects";

export const metadata: Metadata = {
    title: "Projects by Aditi Singh Tomar | React & Next.js Applications",
    description: "Explore web development projects built by Aditi Singh Tomar using React, Next.js, Docker, and modern tech stacks. Full stack portfolio showcase.",
    keywords: [
        "Aditi Singh Tomar Projects",
        "React Projects",
        "Next.js Projects",
    
        "Full Stack Projects",
        "Web Development Portfolio",
        
    ],
    openGraph: {
        title: "Projects by Aditi Singh Tomar | Full Stack Development Portfolio",
        description: "Explore React, Next.js, and other modern web development projects built by Aditi Singh Tomar. Cutting-edge applications with a focus on performance and user experience.",
        url: "https://aditisinghtomar-aditi-singh-tomar1126.vercel.app//projects",
        type: "website",
    },
    alternates: {
        canonical: "https://aditisinghtomar-aditi-singh-tomar1126.vercel.app//projects",
    },
};

export default function ProjectsPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        "name": "Projects by Aditi Singh Tomar",
                        "description": "Portfolio of web development projects including Django, FastAPI, React, and Next.js applications",
                        "url": "https://aditisinghtomar-aditi-singh-tomar1126.vercel.app//projects",
                        "author": {
                            "@type": "Person",
                            "name": "Aditi Singh Tomar"
                        }
                    }),
                }}
            />
            <Navbar />
            <main className="min-h-screen pt-20">
                <ProjectsSection />
            </main>
            <Footer />
        </>
    );
}
