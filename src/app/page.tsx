import dynamic from "next/dynamic";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { FAQSchema } from "@/components/faq-schema";
import Link from "next/link";
import { Code, Zap, Users, BookOpen, Award, MessageSquare } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "About Me",
    description: "Full Stack  Developer from Uttar Pradesh, India. Expertise in Next.js, Node.js, React, and Express.js.",
    href: "/about",
  },
  {
    icon: Zap,
    title: "Projects",
    description: "Explore web applications built with modern technologies and best practices.",
    href: "/projects",
  },
  {
    icon: Users,
    title: "Experience",
    description: "Professional journey in full stack development.",
    href: "/experience",
  },
  {
    icon: BookOpen,
    title: "Skills",
    description: "Technical expertise across  React, Next.js, Docker, and more.",
    href: "/skills",
  },
 
];

export default function Home() {
  return (
    <>
      <FAQSchema />
      <Navbar />
      <main className="min-h-screen">
        <Hero />

        {/* Quick Links Section */}
        <section className="py-24 md:px-60 px-6   bg-surface/30">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-outfit text-3xl font-bold md:text-4xl">
                Explore My Work
              </h2>
              <p className="text-muted">
                Learn more about my skills, projects, and expertise
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              {highlights.map((item, index) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group rounded-2xl border border-border bg-surface/50 p-6 backdrop-blur-sm transition-all hover:border-accent-primary/50 hover:shadow-lg hover:shadow-accent-primary/10"
                >
                  <item.icon className="mb-4 h-8 w-8 text-accent-primary transition-transform group-hover:scale-110" />
                  <h3 className="mb-2 font-outfit text-xl font-bold group-hover:text-accent-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted">{item.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-accent-primary">
                    Learn More
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </Link>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 rounded-2xl border border-border bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 p-12 text-center backdrop-blur-sm">
              <h2 className="mb-4 font-outfit text-3xl font-bold">
                Ready to Work Together?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-muted">
               I’m actively looking for full-time software engineering roles where I can contribute to scalable systems, clean UI, and reliable APIs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-primary px-8 py-3 font-medium text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent-primary/50"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface/50 px-8 py-3 font-medium backdrop-blur-sm transition-all hover:border-accent-primary hover:bg-accent-primary/10"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
