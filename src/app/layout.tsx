import type { Metadata } from "next";
import { Geist, Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollProgress } from "@/components/scroll-progress";
import { Particles } from "@/components/particles";
import { ClientComponents } from "@/components/client-components";
import "./globals.css";

export const metadata: Metadata = {

  title: {
    default: "Aditi Singh Tomar | Full Stack  Developer from Uttar Pradesh, India",
    template: "%s | Aditi Singh Tomar",
  },
  description: "Aditi Singh Tomar is a Full Stack  Developer from Uttar Pradhttps://aditisinghtomar-aditi-singh-tomar1126.vercel.app/ React, Next.js, Node,js, and scalable whttps://aditisinghtomar-aditi-singh-tomar1126.vercel.app/ building high-performance systems with Docker, Redis, and WebSockets.",
  keywords: [
    "Aditi Singh Tomar",
    "Aditi Singh Tomar Portfolio",
    "Aditi Singh Tomar Full Stack Developer",
    "Aditi Singh Tomar Python Developer",
    "Aditi Singh Tomar Django Developer",
    "Full Stack Developer Uttar Pradesh",
    "Full Stack Developer India",
    "Python Developer Uttar Pradesh",
    "Django Developer India",
    "React Developer Uttar Pradesh",
    "Next.js Developer",
    "FastAPI Developer",
    "Full Stack Python Developer",
    "Django REST Framework Developer",
    "Backend Developer Uttar Pradesh",
    "Web Developer Uttar Pradesh",
    "Software Engineer Uttar Pradesh",
    "Freelance Developer Uttar Pradesh",
    "Docker Expert India",
    "Redis Developer",
    "WebSocket Developer",
    "AI Developer Uttar Pradesh",
    "Celery Developer",
    "PostgreSQL Developer",
    "AWS Developer India",
    "Aditi Tomar",
    "Aditi Singh"
  ],

  authors: [{ name: "Aditi Singh Tomar", url: "https://aditisinghtomar-aditi-singh-tomar1126.vercel.app/" }],
  creator: "Aditi Singh Tomar",
  publisher: "Aditi Singh Tomar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aditisinghtomar-aditi-singh-tomar1126.vercel.app/",
    siteName: "Aditi Singh Tomar - Full Stack Python Developer",
    title: "Aditi Singh Tomar | Full Stack  Developer from Uttar Pradesh, India",
    description: "Aditi Singh Tomar is a Full Stack Developer from Uttar Pradhttps://aditisinghtomar-aditi-singh-tomar1126.vercel.app/  React, Next.js, and scalable web applications.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aditi Singh Tomar - Full Stack Python Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditi Singh Tomar | Full Stack  Developer",
    description: "Full Stack  Developer from Uttar Pradhttps://aditisinghtomar-aditi-singh-tomar1126.vercel.app/ React, Next.js, and scalable web applications.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://aditisinghtomar-aditi-singh-tomar1126.vercel.app/",
  },
  verification: {
    google: "PqdS5PR7Tmc7KwL6aSA0j4r5Xlo-O3JqM3PyNy5ISLk",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body
        className={`${geistSans.variable} ${outfit.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Aditi Singh Tomar Portfolio",
                "url": "https://aditisinghtomar-aditi-singh-tomar1126.vercel.app/",
                "description": "Full Stack  Developer Portfolio - Aditi Singh Tomar",
                "author": {
                  "@type": "Person",
                  "name": "Aditi Singh Tomar"
                },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://aditisinghtomar-aditi-singh-tomar1126.vercel.app//?s={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Aditi Singh Tomar",
                "url": "https://aditisinghtomar-aditi-singh-tomar1126.vercel.app/",
                "image": "https://aditisinghtomar-aditi-singh-tomar1126.vercel.app//icon.png",
                "jobTitle": "Full Stack  Developer",
                "description": "Full Stack https://aditisinghtomar-aditi-singh-tomar1126.vercel.app/ React, Next.js, and scalable web applications",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Baghpat",
                  "addressRegion": "Uttar Pradesh",
                  "addressCountry": "India"
                },
                "alumniOf": {
                  "@type": "EducationalOrganization",
                  "name": "Uttarakhand Technical University",
                  "address": {
                    "@type": "PostalAddress",
                    "addressRegion": "Uttrakhand",
                    "addressCountry": "India"
                  }
                }, 
                "knowsAbout": [
                  "Python",
                  "Django",
                  "FastAPI",
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Docker",
                  "Redis",
                  "WebSockets",
                  "Celery",
                  "PostgreSQL",
                  "AWS",
                  "Full Stack Development",
                  "Backend Development",
                  "Frontend Development",
                  "API Development",
                  "Microservices"
                ],
                "hasOccupation": {
                  "@type": "Occupation",
                  "name": "Full Stack Developer",
                  "occupationLocation": {
                    "@type": "City",
                    "name": " Uttar Pradesh, India"
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
                    "WebSockets",
                    "Celery",
                    "PostgreSQL"
                  ]
                },
                "worksFor": {
                  "@type": "Organization",
                  "name": "Freelance / Independent"
                },
                "sameAs": [
                  "hhttps://aditisinghtomar-aditi-singh-tomar1126.vercel.app//aditi-singh-tomar-598320305",
                  "https://github.com/AditiSinghTomar1126",
                ]
              }
            ]),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <ClientComponents />
          <ScrollProgress />
          <Particles />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
