import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { About as AboutSection } from "@/components/sections/about";

export const metadata: Metadata = {
    title: "About Aditi Singh Tomar | Full Stack Python Developer from Uttar Pradesh, India",
    description: "Learn about Aditi Singh Tomar, a Full Stack Python Developer from Uttar Pradhttps://aditisinghtomar-aditi-singh-tomar1126.vercel.app/ Django, FastAPI, React, and Next.js. Educational background at University of Calicut.",
    keywords: [
        "About Aditi Singh Tomar",
        "Aditi Singh Tomar Biography",
        "Full Stack Developer Uttar Pradesh",
        "Python Developer India",
        "University of Calicut",
        "Django Developer Background",
        "FastAPI Developer Profile",
        "Web Developer India India"
    ],
    openGraph: {
        title: "About Aditi Singh Tomar | Full Stack Python Developer",
        description: "Learn about Aditi Singh Tomar's journey as a Full Stack Python Developer from Uttar Prhttps://aditisinghtomar-aditi-singh-tomar1126.vercel.app/ Django, FastAPI, React, and Next.js.",
        url: "https://aditisinghtomar-aditi-singh-tomar1126.vercel.app//about",
        type: "profile",
    },
    alternates: {
        canonical: "https://aditisinghtomar-aditi-singh-tomar1126.vercel.app//about",
    },
};

export default function AboutPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "AboutPage",
                        "mainEntity": {
                            "@type": "Person",
                            "name": "Aditi Singh Tomar",
                            "jobTitle": "Full Stack Python Developer",
                            "description": "Full Stack Python Developer from Uttar Pradhttps://aditisinghtomar-aditi-singh-tomar1126.vercel.app/ Django, FastAPI, React, and Next.js",
                            "url": "https://aditisinghtomar-aditi-singh-tomar1126.vercel.app/",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Uttar Pradesh",
                                "addressRegion": "India",
                                "addressCountry": "India"
                            },
                            "alumniOf": {
                                "@type": "EducationalOrganization",
                                "name": "University of Calicut"
                            }
                        }
                    }),
                }}
            />
            <Navbar />
            <main className="min-h-screen pt-20">
                <AboutSection />
            </main>
            <Footer />
        </>
    );
}
