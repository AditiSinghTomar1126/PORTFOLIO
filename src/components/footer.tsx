import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
    { icon: Github, href: "https://github.com/AditiSinghTomar1126", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/aditi-singh-tomar-598320305", label: "LinkedIn" },
    { icon: Mail, href: "mailto:aditisinghtomar1126@gmail.com", label: "Email" },
];

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-surface/50 backdrop-blur-sm">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                <div className="grid gap-8 md:grid-cols-3">
                    {/* Brand */}
                    <div>
                        <h3 className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text font-outfit text-xl font-bold text-transparent">
                            Aditi Singh Tomar
                        </h3>
                        <p className="mt-2 text-sm text-muted">
                            Full Stack  Developer. Building scalable web applications with Node.js, RestfulAPI, and React.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-4 font-medium text-foreground">Pages</h4>
                        <ul className="space-y-2">
                            {[
                                { name: "About", href: "/about" },
                                { name: "Projects", href: "/projects" },
                                { name: "Experience", href: "/experience" },
                                { name: "Skills", href: "/skills" },
                            
                                
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-muted transition-colors hover:text-accent-primary"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="mb-4 font-medium text-foreground" id="connect">
                            Connect
                        </h4>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full border border-border bg-surface p-2 transition-all hover:border-accent-primary hover:bg-accent-primary/10"
                                    aria-label={social.label}
                                >
                                    <social.icon className="h-5 w-5 text-muted hover:text-accent-primary" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-border pt-8">
                    <p className="text-center text-sm text-muted mb-3">
                        © {currentYear} Aditi Singh Tomar - Full Stack Developer 
                    </p>
                 
                </div>
            </div>
        </footer>
    );
}
