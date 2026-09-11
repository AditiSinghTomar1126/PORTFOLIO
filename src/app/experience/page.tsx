import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Experience as ExperienceSection } from "@/components/sections/experience";

export const metadata: Metadata = {
    title: "Work Experience | Aditi Singh Tomar - Full Stack Python Developer",
    description: "Professional work experience of Aditi Singh Tomar, including Django development, FastAPI projects, and full stack web applications. Freelance and independent development.",
    keywords: [
        "Aditi Singh Tomar Experience",
        "Python Developer Experience",
        "Django Developer Career",
        "FastAPI Projects",
        "Freelance Developer India",
        "Full Stack Work History",
        "Web Development Experience"
    ],
    openGraph: {
        title: "Work Experience | Aditi Singh Tomar",
        description: "Professional journey and work experience of Aditi Singh Tomar as a Full Stack Python Developer.",
        url: "https://aditisinghtomar-aditi-singh-tomar1126.vercel.app//experience",
        type: "website",
    },
    alternates: {
        canonical: "https://aditisinghtomar-aditi-singh-tomar1126.vercel.app//experience",
    },
};

export default function ExperiencePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Aditi Singh Tomar",
                        "jobTitle": "Full Stack Python Developer",
                        "hasOccupation": {
                            "@type": "Occupation",
                            "name": "Full Stack Developer",
                            "occupationLocation": {
                                "@type": "City",
                                "name": "Uttar Pradesh, India"
                            },
                            "skills": [
                                "Django",
                                "FastAPI",
                                "React.js",
                                "Next.js",
                                "Python",
                                "TypeScript",
                                "Docker",
                                "Redis",
                                "WebSockets"
                            ]
                        },
                        "worksFor": {
                            "@type": "Organization",
                            "name": "Freelance / Independent"
                        }
                    }),
                }}
            />
            <Navbar />
            <main className="min-h-screen pt-20">
                <ExperienceSection />
            </main>
            <Footer />
        </>
    );
}
